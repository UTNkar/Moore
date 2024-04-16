import { PageContext } from 'vike/types';

import type { Locale } from '#root/utils/intl';

import type { memberMocks } from '../mocks';

export function apiContextFromPageContext<Data = unknown>(pageContext: PageContext<Data>): ApiContext<Data> {
  return { data: pageContext.data, locale: pageContext.locale, mock: true, queryHash: pageContext.locale };
}

export function wrapWithApiContext<P extends any[], RT>(
  context: ApiContext,
  func: (context: ApiContext, ..._parameters: P) => RT,
): (..._parameters: P) => RT {
  return (...params) => func(context, ...params);
}

export interface ApiContext<Data = unknown> {
  bearerToken?: string;
  csrfToken?: string;
  data: Data;
  locale: Locale;
  mock?: boolean;
  mockMember?: keyof typeof memberMocks;
  queryHash: string;
}
