export const defaultLocale = 'en' as const;
export const locales = ['en', 'zh-cn', 'zh-tw'] as const;
export type Locale = (typeof locales)[number];
export type AppPageKind = 'support' | 'privacy' | 'terms' | 'refund';

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
  metaDescription: string;
  heroTitle: string;
  heroBody: string;
  apps: string;
  allApps: string;
  support: string;
  privacy: string;
  terms: string;
  refund: string;
  features: string;
  emptyCatalog: string;
  footerMaintained: string;
  supportBack: (app: string) => string;
  learnMore: (product: string) => string;
  skipContent: string;
  langMenuLabel: string;
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    siteTitle: 'Eden — Apps for Mac, iPhone, and iPad',
    metaDescription: 'A collection of focused tools for Mac, iPhone, and iPad.',
    heroTitle: 'Useful apps, thoughtfully made.',
    heroBody: 'A collection of focused tools for Mac, iPhone, and iPad.',
    apps: 'Apps',
    allApps: '← All apps',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
    refund: 'Refund',
    features: 'Features',
    emptyCatalog: 'Apps are on the way.',
    footerMaintained: 'Maintained by Eden',
    supportBack: (app) => `← ${app} Support`,
    learnMore: (product) => `Learn more about ${product}`,
    skipContent: 'Skip to content',
    langMenuLabel: 'Language',
  },
  'zh-cn': {
    siteTitle: 'Eden 的应用',
    metaDescription: 'Eden 的实用工具合集，为 Mac、iPhone 和 iPad 打造。',
    heroTitle: '实用应用，用心打造。',
    heroBody: 'Eden 的工具合集，为 Mac、iPhone 和 iPad 解决具体问题。',
    apps: '应用',
    allApps: '← 全部应用',
    support: '技术支持',
    privacy: '隐私政策',
    terms: '服务条款',
    refund: '退款政策',
    features: '功能',
    emptyCatalog: '更多应用正在路上。',
    footerMaintained: '由 Eden 维护',
    supportBack: (app) => `← ${app} 技术支持`,
    learnMore: (product) => `了解 ${product}`,
    skipContent: '跳至主要内容',
    langMenuLabel: '语言',
  },
  'zh-tw': {
    siteTitle: 'Eden 的 App',
    metaDescription: 'Eden 的實用工具合集，為 Mac、iPhone 和 iPad 打造。',
    heroTitle: '實用 App，用心打造。',
    heroBody: 'Eden 的工具合集，為 Mac、iPhone 和 iPad 解決具體問題。',
    apps: 'App',
    allApps: '← 全部 App',
    support: '技術支援',
    privacy: '隱私權政策',
    terms: '服務條款',
    refund: '退款政策',
    features: '功能',
    emptyCatalog: '更多 App 正在路上。',
    footerMaintained: '由 Eden 維護',
    supportBack: (app) => `← ${app} 技術支援`,
    learnMore: (product) => `了解 ${product}`,
    skipContent: '跳至主要內容',
    langMenuLabel: '語言',
  },
};

/** URL prefix for a locale; the default locale is served unprefixed. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

function urlsForPath(path: string): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${localePrefix(locale)}${path}`]),
  ) as Record<Locale, string>;
}

/** Every locale's URL for the home page or an app article. */
export function pageUrls(appSlug?: string, kind: AppPageKind = 'support'): Record<Locale, string> {
  const path = appSlug
    ? `/apps/${appSlug}/${kind === 'support' ? '' : `${kind}/`}`
    : '/';
  return urlsForPath(path);
}

/** Every locale's URL for a product page. */
export function productPageUrls(productSlug: string): Record<Locale, string> {
  return urlsForPath(`/products/${productSlug}/`);
}

/** Every locale's URL for a guide. */
export function guidePageUrls(guideSlug: string): Record<Locale, string> {
  return urlsForPath(`/guides/${guideSlug}/`);
}
