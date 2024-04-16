import type { PageContextServer } from 'vike/types';

import { getAuthenticatedMember, getSections } from '#root/api';
import { apiContextFromPageContext } from '#root/api/utils';
import { Member, Section } from '#root/types';

export default async function data(pageContext: PageContextServer): Promise<MemberPageData> {
  const apiContext = apiContextFromPageContext(pageContext);

  const [authenticatedMember, sections] = await Promise.all([
    getAuthenticatedMember(apiContext),
    getSections(apiContext),
  ]);

  return { authenticatedMember, sections };
}

export interface MemberPageData {
  authenticatedMember: Member | undefined;
  sections: Section[];
}
