import type { PageContextServer } from 'vike/types';

import { getAuthenticatedMember, getPositionsWithApplications } from '#root/api';
import { apiContextFromPageContext } from '#root/api/utils';
import type { MemberPageData } from '#root/pages/member/+data';
import { PositionWithApplication } from '#root/types';

export default async function data(pageContext: PageContextServer): Promise<InvolvementProfilePageData> {
  const apiContext = apiContextFromPageContext(pageContext);

  const authenticatedMember = await getAuthenticatedMember(apiContext);
  const positionsWithApplications = await getPositionsWithApplications(apiContext, authenticatedMember);

  return { authenticatedMember, positionsWithApplications };
}

export interface InvolvementProfilePageData extends MemberPageData {
  positionsWithApplications: PositionWithApplication[];
}
