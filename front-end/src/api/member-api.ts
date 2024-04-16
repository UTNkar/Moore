import { QueryFunctionContext, UseQueryResult } from '@tanstack/react-query';

import { Member, Section } from '#root/types';

import { memberMocks, sectionListMocks } from './mocks';
import { ApiContext, PageDataKey, useApiContext, usePageDataQuery } from './utils';

export async function checkMembership(ssn: string): Promise<boolean> {
  const body = new FormData();

  body.append('ssn', ssn);

  const data = await fetch('https://utn.se/member_check_api/', {
    body,
    method: 'POST',
  }).then((response) => response.json());

  return data.is_member;
}

export async function getAuthenticatedMember(
  context: ApiContext,
  _queryContext?: QueryFunctionContext,
): Promise<Member | undefined> {
  if (context.mock) {
    const memberKeys = Object.keys(memberMocks) as (keyof typeof memberMocks)[];

    const memberKey = memberKeys[Math.floor(Math.random() * memberKeys.length)] || 'annaLindberg';

    return memberMocks[memberKey];
  } else {
    throw new Error('Missing implementation');
  }
}

export async function getSections(
  context: ApiContext,
  _queryContext?: QueryFunctionContext,
): Promise<Section[]> {
  if (context.mock) {
    return sectionListMocks;
  } else {
    throw new Error('Missing implementation');
  }
}

export function useAuthenticatedMember<PageData = unknown>(
  pageDataKey: PageDataKey<PageData, Member | undefined>,
  context: ApiContext<PageData> = useApiContext(),
): UseQueryResult<Member | undefined, Error> {
  return usePageDataQuery<PageData, Member | undefined>(getAuthenticatedMember, pageDataKey, [], context);
}

export function useIsAuthenticated(authenticatedMember: UseQueryResult<Member | undefined, Error>): boolean {
  return Boolean(authenticatedMember.data || !authenticatedMember.isFetched);
}

export function useSections<PageData = unknown>(
  pageDataKey: PageDataKey<PageData, Section[]>,
  context: ApiContext<PageData> = useApiContext(),
): UseQueryResult<Section[], Error> {
  return usePageDataQuery<PageData, Section[]>(getSections, pageDataKey, [], context);
}
