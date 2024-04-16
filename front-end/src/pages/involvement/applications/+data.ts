import type { PageContextServer } from 'vike/types';

import { getAuthenticatedMember, getPositionApplications } from '#root/api';
import { apiContextFromPageContext } from '#root/api/utils';
import { Member, PositionApplication } from '#root/types';

export default async function data(pageContext: PageContextServer): Promise<InvolvementApplicationsPageData> {
  const apiContext = apiContextFromPageContext(pageContext);
  const authenticatedMember = await getAuthenticatedMember(apiContext);

  const positionApplications = authenticatedMember
    ? await getPositionApplications(apiContext, authenticatedMember)
    : [];

  return { authenticatedMember, positionApplications };
}

export interface InvolvementApplicationsPageData {
  authenticatedMember: Member;
  positionApplications: PositionApplication[];
}
