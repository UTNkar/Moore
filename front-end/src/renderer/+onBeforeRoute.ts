import { OnBeforeRenderSync, PageContext } from 'vike/types';

import { extractLocale } from '#root/utils/intl';

export default function onBeforeRoute(pageContext: PageContext): ReturnType<OnBeforeRenderSync> {
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlOriginal);

  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`. We can then use https://vike.dev/pageContext-anywhere to access pageContext.locale in any React component.
      locale,
      // We overwrite the original URL
      urlLogical: urlWithoutLocale,
    },
  };
}
