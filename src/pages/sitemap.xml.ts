import type { APIRoute } from 'astro';
import { getProducts } from '../data/products';
import { guideSlugs } from '../data/guides';
import { getAppPageProps } from '../lib/content';
import { guidePageUrls, htmlLang, localePrefix, locales, type Locale } from '../i18n';

/**
 * One <url> per route, with the three locales linked as alternates so a
 * crawler sees the same hreflang cluster the pages themselves declare.
 * Routes come from the content collections, so a new app or legal page is
 * picked up without editing this file.
 */
export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL('https://edenapps.site')).origin;
  const groups: Partial<Record<Locale, string>>[] = [];

  groups.push(Object.fromEntries(locales.map((locale) => [locale, `${localePrefix(locale)}/`])));
  for (const product of getProducts()) {
    groups.push(
      Object.fromEntries(
        locales.map((locale) => [locale, `${localePrefix(locale)}/products/${product.slug}/`]),
      ),
    );
  }
  for (const slug of guideSlugs) {
    groups.push(guidePageUrls(slug));
  }

  const appGroups = new Map<string, Partial<Record<Locale, string>>>();
  for (const locale of locales) {
    for (const page of await getAppPageProps(locale)) {
      const key = `${page.appSlug}/${page.kind}`;
      const group = appGroups.get(key) ?? {};
      group[locale] =
        page.kind === 'support'
          ? `${localePrefix(locale)}/apps/${page.appSlug}/`
          : `${localePrefix(locale)}/apps/${page.appSlug}/${page.kind}/`;
      appGroups.set(key, group);
    }
  }
  groups.push(...appGroups.values());

  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const body = groups
    .flatMap((paths) => {
      const defaultPath = paths.en ?? Object.values(paths)[0];
      // Every language version gets its own <url>, each carrying the full
      // alternate cluster, which is how Google expects localized sitemaps.
      return locales.filter((locale) => paths[locale]).map((locale) => {
        const alternates = locales
          .filter((other) => paths[other])
          .map(
            (other) =>
              `    <xhtml:link rel="alternate" hreflang="${htmlLang[other]}" href="${escape(origin + paths[other])}" />`,
          )
          .concat(
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(origin + defaultPath)}" />`,
          )
          .join('\n');
        return `  <url>\n    <loc>${escape(origin + paths[locale])}</loc>\n${alternates}\n  </url>`;
      });
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
