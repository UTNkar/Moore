import Container from '#root/components/Container';
import NavigationButtonGroup from '#root/components/NavigationButtonGroup';
import Section from '#root/components/Section';
import Tabs from '#root/components/Tabs';
import DefaultLayout from '#root/renderer/layout/DefaultLayout';
import { LocalizedText } from '#root/utils/intl';
import { LayoutProps, isWithinIframe } from '#root/utils/page';

export default function EventLayout({ children, pageContext }: LayoutProps) {
  const iframeContent = (
    <>
      <Tabs
        tabs={[
          { href: '/event', label: 'Öppna för anmälan' },
          { href: '/event/applications', label: 'Deltaganden' },
          'space',
          { href: '/event/profile', label: 'Profil' },
        ]}
      />

      {children}
    </>
  );

  if (isWithinIframe(pageContext)) {
    return iframeContent;
  }

  return (
    <DefaultLayout pageContext={pageContext}>
      <Section>
        <Container>
          <LocalizedText element="h1">Våra event</LocalizedText>

          <p className="large-paragraph">
            <LocalizedText element="span">Här kan du använda modulen som finns på</LocalizedText>
            &nbsp;
            <a href="https://utn.se/event">utn.se/event</a>.
          </p>

          <NavigationButtonGroup exclude="event" />
        </Container>
      </Section>

      <Section subdued emphasised>
        <Container>{iframeContent}</Container>
      </Section>
    </DefaultLayout>
  );
}
