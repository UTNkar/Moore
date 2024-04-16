import { useAuthenticatedMember, useIsAuthenticated } from '#root/api';
import ModuleListItemCard from '#root/components/module/ModuleListItemCard';
import ModuleSidebarWrapper from '#root/components/module/ModuleSidebarWrapper';
import { LocalizedText } from '#root/utils/intl';
import { PageProps } from '#root/utils/page';

import { MemberPageData } from './+data';

export default function MemberPage({
  pageContext,
  sidebar: passedSidebar,
}: PageProps & { sidebar?: React.ReactNode }) {
  const authenticatedMember = useAuthenticatedMember<MemberPageData>('authenticatedMember');

  const isAuthenticated = useIsAuthenticated(authenticatedMember);

  let sidebar: React.ReactNode = passedSidebar;

  if (!sidebar) {
    sidebar = (
      <ModuleSidebarWrapper>
        <ModuleListItemCard>
          <LocalizedText withoutSpacing element="h2">
            Om medlemssystemet
          </LocalizedText>
          <LocalizedText withoutSpacing element="p">
            Vi ser till att din profil är både registrerad hos Mecenat och i vårt egna system. Det gör att du
            kan ta det av Mecenats erbjudanden och att du enkelt kan söka våra engagemang samt anmäla dig till
            våra evenemang.
          </LocalizedText>
        </ModuleListItemCard>
      </ModuleSidebarWrapper>
    );
  }

  if (isAuthenticated) {
  }

  return (
    <>
      {sidebar}

      <div className="sticky-content-body module">
        <div className="module-item-header" />

        <div className="divider module-content" />
      </div>
    </>
  );
}
