import { PageContext } from 'vike/types';

import { PageDataKey } from '#root/api/utils';
import { Falsy } from '#root/utils/types';

export default function extractActiveItem<T, ID extends PageDataKey<T, number | string>>(
  pageContext: PageContext,
  items: (T | Falsy)[] | Falsy,
  options: {
    fallbackFirst?: boolean;
    idKey: ID;
    numberKeys: T[ID] extends number ? [ID, ...PageDataKey<T, number>[]] : PageDataKey<T, number>[];
    routeParam?: string;
    stringKeys: T[ID] extends string ? [ID, ...PageDataKey<T, string>[]] : PageDataKey<T, string>[];
  },
): T | undefined {
  const {
    fallbackFirst,
    idKey,
    numberKeys,
    stringKeys,
    routeParam: routeParamKey = idKey as string,
  } = options;

  const routeParam: string | undefined = pageContext.routeParams?.[routeParamKey];

  if (routeParam) {
    let match: T | undefined;

    if (numberKeys.length > 0) {
      let routeParamNumber: number | undefined;

      try {
        routeParamNumber = parseInt(routeParam);
      } catch (_) {
        // not a number
      }

      if (routeParamNumber) {
        match = (items as any).find(
          (item: T | undefined) => item && numberKeys.some((key) => item[key] === routeParamNumber),
        );
      }
    }

    if (!match) {
      match = (items as any)?.find(
        (item: T | undefined) => item && stringKeys.some((key) => item[key] === routeParam),
      );
    }

    if (match) {
      return match;
    }
  }

  if (fallbackFirst) {
    return items[0];
  } else {
    return undefined;
  }
}
