import { QueryFunctionContext, UseQueryResult } from '@tanstack/react-query';

import type { Member, Position, PositionApplication, PositionWithApplication } from '#root/types';

import { memberMocks, positionApplicationMocks, positionListMock } from './mocks';
import { ApiContext, PageDataKey, useApiContext, usePageDataQuery } from './utils';

export async function getPositionApplications(
  context: ApiContext,
  authenticatedMember: Member | undefined,
  _queryContext?: QueryFunctionContext,
): Promise<PositionApplication[]> {
  if (!authenticatedMember) {
    return [];
  }

  if (context.mock) {
    let authenticatedMemberKey: keyof typeof memberMocks;

    (Object.keys(memberMocks) as (keyof typeof memberMocks)[]).some((memberKey) => {
      if (memberMocks[memberKey] === authenticatedMember) {
        authenticatedMemberKey = memberKey;

        return true;
      }
    });

    const applicationRecord = positionApplicationMocks[authenticatedMemberKey || 'annaLindberg'];

    return (Object.keys(applicationRecord) as (keyof typeof applicationRecord)[]).map(
      (key) => applicationRecord[key]!,
    );
  } else {
    throw new Error('Missing implementation');
  }
}

export async function getPositions(
  context: ApiContext,
  _queryContext?: QueryFunctionContext,
): Promise<Position[]> {
  if (context.mock) {
    return positionListMock;
  } else {
    throw new Error('Missing implementation');
  }
}

/**
 * Returns available positions with
 */
export async function getPositionsWithApplications(
  context: ApiContext,
  authenticatedMember: Member | undefined,
  queryContext?: QueryFunctionContext,
): Promise<PositionWithApplication[]> {
  const [positions, positionApplications] = await Promise.all([
    getPositions(context, queryContext),
    getPositionApplications(context, authenticatedMember, queryContext),
  ]);

  return positions.map((position) => {
    const positionApplication = positionApplications.find(
      (positionApplication) => positionApplication.position.id === position.id,
    );

    if (positionApplication) {
      return { ...position, application: positionApplication };
    } else {
      return position as PositionWithApplication;
    }
  });
}

// --- HOOKS ---

export function usePositionApplications<PageData = unknown>(
  pageDataKey: PageDataKey<PageData, PositionApplication[]>,
  authenticatedMember: Member | undefined,
  context: ApiContext<PageData> = useApiContext(),
): UseQueryResult<PositionApplication[], Error> {
  return usePageDataQuery<PageData, PositionApplication[], [Member | undefined]>(
    getPositionApplications,
    pageDataKey,
    [authenticatedMember],
    context,
  );
}

export function usePositions<PageData = unknown>(
  pageDataKey: PageDataKey<PageData, Position[]>,
  context: ApiContext<PageData> = useApiContext(),
): UseQueryResult<Position[], Error> {
  return usePageDataQuery<PageData, Position[]>(getPositions, pageDataKey, [], context);
}

export function usePositionsWithApplications<PageData = unknown>(
  pageDataKey: PageDataKey<PageData, PositionWithApplication[]>,
  authenticatedMember: Member | undefined,
  context: ApiContext<PageData> = useApiContext(),
): UseQueryResult<PositionWithApplication[], Error> {
  return usePageDataQuery<PageData, PositionWithApplication[], [Member | undefined]>(
    getPositionsWithApplications,
    pageDataKey,
    [authenticatedMember],
    context,
  );
}
