import { useAuthenticatedMember, useIsAuthenticated, useSections } from '#root/api';
import RegistrationForm from '#root/components/member/RegistrationForm';
import ModuleBodyWrapper from '#root/components/module/ModuleBodyWrapper';
import ModuleListItemCard from '#root/components/module/ModuleListItemCard';
import ModuleSidebarWrapper from '#root/components/module/ModuleSidebarWrapper';
import { LocalizedText } from '#root/utils/intl';
import { PageProps } from '#root/utils/page';

import type { MemberPageData } from './+data';

export default function MemberRegistrationPage({
  pageContext,
  sidebar: passedSidebar,
}: PageProps & { sidebar?: React.ReactNode }) {
  const authenticatedMember = useAuthenticatedMember<MemberPageData>('authenticatedMember');
  const sections = useSections<MemberPageData>('sections');

  const isAuthenticated = useIsAuthenticated(authenticatedMember);

  let sidebar: React.ReactNode = passedSidebar;

  if (!sidebar) {
    sidebar = (
      <ModuleSidebarWrapper>
        <ModuleListItemCard>
          <LocalizedText withoutSpacing element="h2">
            Registrera dig
          </LocalizedText>
          <LocalizedText withoutSpacing element="p">
            Att vara medlem i UTN är helt gratis, ger dig flera förmåner och stärker kårens inflytande mot
            universitetet. Här kan du gå vidare till registreringen eller kontrollera om du redan är medlem.
          </LocalizedText>
        </ModuleListItemCard>
      </ModuleSidebarWrapper>
    );
  }

  if (isAuthenticated) {
    return (
      <>
        {sidebar}

        <ModuleBodyWrapper>
          <div />
        </ModuleBodyWrapper>
      </>
    );
  } else {
    return (
      <>
        {sidebar}

        <ModuleBodyWrapper>
          <RegistrationForm sections={sections.data || []} />
        </ModuleBodyWrapper>
      </>
    );
  }
}
