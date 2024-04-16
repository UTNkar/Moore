import type { PageContext } from 'vike/types';

import { Locale, defaultLocale, translate } from '#root/utils/intl';

export function getLocale(pageContext: PageContext, documentProps?: Vike.DocumentProps): Locale {
  const locale =
    // Title defined dynamically by onBeforeRender()
    pageContext.locale ??
    // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The config 'pageContext.config.title' is a custom config we defined at ./+config.ts
    pageContext.config?.locale ??
    documentProps?.locale ??
    defaultLocale;

  return locale;
}

export function getPageDescription(
  pageContext: PageContext,
  documentProps?: Vike.DocumentProps,
  locale: Locale = getLocale(pageContext, documentProps),
): string {
  const description =
    // Description defined dynamically by onBeforeRender()
    pageContext.description ||
    // Title defined statically by /pages/some-page/+description.js (or by `export default { description }` in /pages/some-page/+config.js)
    // The config 'pageContext.config.description' is a custom config we defined at ./+config.ts
    pageContext.config?.description ||
    documentProps?.description ||
    'Uppsala teknolog- och naturvetarkår är en studentkår för studenter på teknisk-naturvetenskapliga fakulteten vid Uppsala universitet.';

  return translate(description, locale);
}

export function getPageTitle(
  pageContext: PageContext,
  documentProps?: Vike.DocumentProps,
  locale: Locale = getLocale(pageContext, documentProps),
): string {
  const title =
    // Title defined dynamically by onBeforeRender()
    pageContext.title ||
    // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The config 'pageContext.config.title' is a custom config we defined at ./+config.ts
    pageContext.config?.title ||
    documentProps?.title ||
    'Uppsala teknolog- och naturvetarkår';

  return translate(title, locale);
}
