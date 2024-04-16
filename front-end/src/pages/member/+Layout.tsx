import { useAuthenticatedMember, useIsAuthenticated } from '#root/api';
import Container from '#root/components/Container';
import NavigationButtonGroup from '#root/components/NavigationButtonGroup';
import Section from '#root/components/Section';
import Tabs from '#root/components/Tabs';
import DefaultLayout from '#root/renderer/layout/DefaultLayout';
import { LocalizedText } from '#root/utils/intl';
import { LayoutProps, isWithinIframe } from '#root/utils/page';

import { MemberPageData } from './+data';

export default function MemberLayout({ children, pageContext }: LayoutProps) {
  const authenticatedMember = useAuthenticatedMember<MemberPageData>('authenticatedMember');
  const isAuthenticated = useIsAuthenticated(authenticatedMember);

  const iframeContent = (
    <div className="w-layout-hflex sticky-content-wrapper module">
      <Tabs
        tabs={[
          'space',
          !isAuthenticated && { href: '/member/register', label: 'Registrera dig' },
          !isAuthenticated && { href: '/member', label: 'Logga in' },
          isAuthenticated && { href: '/member', label: 'Min profil' },
        ]}
      />

      {children}
    </div>
  );

  if (isWithinIframe(pageContext)) {
    return iframeContent;
  }

  return (
    <DefaultLayout pageContext={pageContext}>
      <Section>
        <Container>
          <LocalizedText element="h1">Medlemskap</LocalizedText>

          <p className="large-paragraph">
            <LocalizedText element="span">Här kan du använda modulen som finns på</LocalizedText>
            &nbsp;
            <a href="https://utn.se/event">utn.se/medlem</a>.
          </p>

          <NavigationButtonGroup exclude="member" />
        </Container>
      </Section>

      <Section subdued emphasised id="module">
        <Container>{iframeContent}</Container>
      </Section>
    </DefaultLayout>
  );
}
