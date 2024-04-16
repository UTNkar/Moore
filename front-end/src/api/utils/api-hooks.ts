import { PageContext } from 'vike/types';

import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { usePageContext } from '#root/utils/page';

import { ApiContext, apiContextFromPageContext, wrapWithApiContext } from './api-context';

export function useApiContext<Data = unknown>(
  pageContext: PageContext<Data> = usePageContext(),
): ApiContext<Data> {
  return apiContextFromPageContext(pageContext);
}

export function usePageDataQuery<PageData = unknown, Data = unknown, P extends any[] = [], TError = Error>(
  func: (context: ApiContext<PageData>, ..._parameters: P) => Data | Promise<Data>,
  pageDataKey: PageDataKey<PageData, Data>,
  parameters: P,
  context: ApiContext<PageData> = useApiContext<PageData>(),
): UseQueryResult<Data, TError> {
  return useQuery({
    initialData: context.data[pageDataKey],
    queryFn: wrapWithApiContext(context, func) as any,
    queryKey: [pageDataKey, ...parameters],
    staleTime: 30 * 1000,
  });
}

export type PageDataKey<PageData = unknown, Data = unknown> = {
  [K in keyof PageData]: PageData[K] extends Data ? K : never;
}[keyof PageData];
