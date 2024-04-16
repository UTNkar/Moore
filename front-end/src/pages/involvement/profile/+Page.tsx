import { useAuthenticatedMember, usePositionsWithApplications } from '#root/api';
import InvolvementPositionsSidebar from '#root/pages/involvement/positions/InvolvementPositionsSidebar';
import MemberPage from '#root/pages/member/+Page';
import { PageProps } from '#root/utils/page';

import type { InvolvementProfilePageData } from './+data';

export default function InvolvementApplicationsPage(props: PageProps) {
  const authenticatedMember = useAuthenticatedMember<InvolvementProfilePageData>('authenticatedMember');

  const positions = usePositionsWithApplications<InvolvementProfilePageData>(
    'positionsWithApplications',
    authenticatedMember.data,
  );

  return (
    <MemberPage {...props} sidebar={<InvolvementPositionsSidebar positionsWithApplications={positions} />} />
  );
}
