export const defaultLocale = 'en' as const;
export const locales = ['en', 'zh-cn', 'zh-tw'] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  'zh-cn': 'zh-CN',
  'zh-tw': 'zh-TW',
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
};

interface UiStrings {
  siteTitle: string;
  tagline: string;
  cardSub: string;
  footerPrefix: string;
  allApps: string;
  supportBack: (app: string) => string;
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    siteTitle: 'App Support & Privacy',
    tagline: 'Support pages and privacy policies for my apps. Select an app below.',
    cardSub: 'Support & Privacy Policy',
    footerPrefix: 'Maintained by',
    allApps: '← All apps',
    supportBack: (app) => `← ${app} Support`,
  },
  'zh-cn': {
    siteTitle: '应用支持与隐私',
    tagline: '我的应用的技术支持页面与隐私政策,请选择应用。',
    cardSub: '技术支持与隐私政策',
    footerPrefix: '维护者:',
    allApps: '← 全部应用',
    supportBack: (app) => `← ${app} 技术支持`,
  },
  'zh-tw': {
    siteTitle: '應用支援與隱私',
    tagline: '我的應用程式的技術支援頁面與隱私權政策,請選擇應用程式。',
    cardSub: '技術支援與隱私權政策',
    footerPrefix: '維護者:',
    allApps: '← 全部應用程式',
    supportBack: (app) => `← ${app} 技術支援`,
  },
};

/** URL prefix for a locale; the default locale is served unprefixed. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/** Every locale's URL for the same page (landing, or an app's support/privacy page). */
export function pageUrls(appSlug?: string, privacy = false): Record<Locale, string> {
  const path = appSlug ? `/apps/${appSlug}/${privacy ? 'privacy/' : ''}` : '/';
  return Object.fromEntries(
    locales.map((locale) => [locale, `${localePrefix(locale)}${path}`]),
  ) as Record<Locale, string>;
}
