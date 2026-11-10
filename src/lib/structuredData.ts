import type { Locale } from '../i18n';
import type { Product } from '../data/products';
import release from '../data/virtualLocationRelease.json';

const categories: Record<Product['slug'], string> = {
  'virtual-location': 'DeveloperApplication',
  americano: 'UtilitiesApplication',
  settingshop: 'UtilitiesApplication',
  storehop: 'UtilitiesApplication',
};

/**
 * Only facts already stated on the page go in here. No aggregateRating and
 * no review: the apps have no public ratings, and inventing them would be
 * spam markup. Prices are omitted except where the page itself says the
 * download is free (VirtualLocation), so paid App Store apps carry no offer.
 */
export function productJsonLd(product: Product, locale: Locale, path: string) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: categories[product.slug],
    operatingSystem:
      product.slug === 'virtual-location'
        ? `macOS ${release.minimumSystemVersion} or later`
        : product.platform.replaceAll(' · ', ', '),
    description: product.tagline[locale],
    url: `https://edenapps.site${path}`,
  };
  if (product.slug === 'virtual-location') {
    data.softwareVersion = release.version;
    data.downloadUrl = release.downloadURL;
    data.offers = { '@type': 'Offer', price: 0, priceCurrency: 'USD' };
  }
  return data;
}
