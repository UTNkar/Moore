import { useMemo } from 'react';
import { PageContext } from 'vike/types';

import { PageDataKey } from '#root/api/utils';

import { extractActiveItem, usePageContext } from '.';

export default function useActiveItem<T, ID extends PageDataKey<T, number | string>>(
  items: T[],
  options: {
    fallbackFirst?: boolean;
    idKey: ID;
    numberKeys: T[ID] extends number ? [ID, ...PageDataKey<T, number>[]] : PageDataKey<T, number>[];
    stringKeys: T[ID] extends string ? [ID, ...PageDataKey<T, string>[]] : PageDataKey<T, string>[];
  },
  pageContext: PageContext = usePageContext(),
): T | undefined {
  return useMemo(
    () => extractActiveItem(pageContext, items, options),
    [
      items,
      pageContext.routeParams,
      options.idKey,
      options.fallbackFirst,
      ...options.numberKeys,
      ...options.stringKeys,
    ],
  );
}
