import { useAuthenticatedMember, useIsAuthenticated } from '#root/api';
import Container from '#root/components/Container';
import NavigationButtonGroup from '#root/components/NavigationButtonGroup';
import Section from '#root/components/Section';
import Tabs from '#root/components/Tabs';
import DefaultLayout from '#root/renderer/layout/DefaultLayout';
import { LocalizedText } from '#root/utils/intl';
import { LayoutProps, isWithinIframe } from '#root/utils/page';

import { InvolvementPageData } from './positions/+data';

export default function InvolvementLayout({ children, pageContext }: LayoutProps) {
  const authenticatedMember = useAuthenticatedMember<InvolvementPageData>('authenticatedMember');
  const isAuthenticated = useIsAuthenticated(authenticatedMember);

  const iframeContent = (
    <div className="w-layout-hflex sticky-content-wrapper module">
      <Tabs
        tabs={[
          { fallback: true, href: '/involvement', label: 'Lediga poster' },
          isAuthenticated && { href: '/involvement/applications', label: 'Sökta poster' },
          'space',
          !isAuthenticated && { href: '/involvement/register', label: 'Registrera dig' },
          !isAuthenticated && { href: '/involvement/profile', label: 'Logga in' },
          isAuthenticated && { href: '/involvement/profile', label: 'Min profil' },
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
          <LocalizedText element="h1">Engagemang</LocalizedText>

          <p className="large-paragraph">
            <LocalizedText element="span">Här kan du använda modulen som finns på</LocalizedText>
            &nbsp;
            <a href="https://utn.se/event">utn.se/engagemang</a>.
          </p>

          <NavigationButtonGroup exclude="involvement" />
        </Container>
      </Section>

      <Section subdued emphasised id="module">
        <Container>{iframeContent}</Container>
      </Section>
    </DefaultLayout>
  );
}
