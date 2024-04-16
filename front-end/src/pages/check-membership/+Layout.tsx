import Container from '#root/components/Container';
import NavigationButtonGroup from '#root/components/NavigationButtonGroup';
import Section from '#root/components/Section';
import DefaultLayout from '#root/renderer/layout/DefaultLayout';
import { LocalizedText } from '#root/utils/intl';
import { LayoutProps, isWithinIframe } from '#root/utils/page';

export default function CheckMembershipLayout({ children, pageContext }: LayoutProps) {
  const iframeContent = <div className="w-layout-hflex sticky-content-wrapper module">{children}</div>;

  if (isWithinIframe(pageContext)) {
    return iframeContent;
  }

  return (
    <DefaultLayout pageContext={pageContext}>
      <Section>
        <Container>
          <LocalizedText element="h1">Medlemskollen</LocalizedText>

          <p className="large-paragraph">
            <LocalizedText element="span">Här kan du använda modulen som finns på</LocalizedText>
            &nbsp;
            <a href="https://utn.se/medlemskollen">utn.se/medlemskollen</a>.
          </p>

          <NavigationButtonGroup />
        </Container>
      </Section>

      <Section subdued emphasised id="module">
        <Container>{iframeContent}</Container>
      </Section>
    </DefaultLayout>
  );
}
