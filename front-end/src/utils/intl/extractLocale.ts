import locales, { Locale, defaultLocale } from './locales';

export default function extractLocale(url: string): { locale: Locale; urlWithoutLocale: string } {
  const urlPaths = url.split('/');

  let locale: Locale;
  let urlWithoutLocale: string;

  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const firstPath = urlPaths[1];

  if (locales.filter((locale) => locale !== defaultLocale).includes(firstPath as Locale)) {
    locale = firstPath as Locale;
    urlWithoutLocale = '/' + urlPaths.slice(2).join('/');
  } else {
    locale = defaultLocale;
    urlWithoutLocale = url;
  }

  return { locale, urlWithoutLocale };
}
