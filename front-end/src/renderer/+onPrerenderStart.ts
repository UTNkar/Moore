// https://vike.dev/onPrerenderStart

import { PageContextServer } from 'vike/types';

import { defaultLocale, locales } from '#root/utils/intl';

// We only need this for pre-rendered apps https://vike.dev/pre-rendering
export default function onPrerenderStart(prerenderContext: any): any {
  const pageContexts = [];

  prerenderContext.pageContexts.forEach((pageContext: PageContextServer) => {
    // Duplicate pageContext for each locale
    locales.forEach((locale) => {
      // Localize URL
      let { urlOriginal: urlLogical } = pageContext;

      if (locale !== defaultLocale) {
        urlLogical = `/${locale}${urlLogical}`;
      }

      pageContexts.push({
        ...pageContext,

        config: {
          ...(pageContext.config || {}),
          lang: locale,
        },
        // Set pageContext.locale
        locale,
        urlLogical,
      });
    });
  });

  return {
    prerenderContext: {
      pageContexts,
    },
  };
}
