import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, type Locale } from '../i18n';

export type AppEntry = CollectionEntry<'apps'>;

export interface AppPageProps {
  locale: Locale;
  appSlug: string;
  kind: 'support' | 'privacy';
  entry: AppEntry;
}

/**
 * Content entry ids look like "<app-slug>/<locale>/<kind>". The default
 * locale ("en") is required; other locales fall back to it when missing.
 */
export async function getAppPageProps(locale: Locale): Promise<AppPageProps[]> {
  const entries = await getCollection('apps');
  const byId = new Map(entries.map((entry) => [entry.id, entry]));
  const appSlugs = [...new Set(entries.map((entry) => entry.id.split('/')[0]))];

  const pages: AppPageProps[] = [];
  for (const appSlug of appSlugs) {
    for (const kind of ['support', 'privacy'] as const) {
      const entry =
        byId.get(`${appSlug}/${locale}/${kind}`) ?? byId.get(`${appSlug}/${defaultLocale}/${kind}`);
      if (entry) {
        pages.push({ locale, appSlug, kind, entry });
      }
    }
  }
  return pages;
}

/** Landing-page cards: app display names always come from the default locale. */
export async function getAppCards(): Promise<{ app: string; slug: string }[]> {
  const entries = await getCollection('apps', ({ id }) => id.endsWith(`/${defaultLocale}/support`));
  return entries
    .map((entry) => ({ slug: entry.id.split('/')[0], app: entry.data.app }))
    .sort((a, b) => a.app.localeCompare(b.app));
}
