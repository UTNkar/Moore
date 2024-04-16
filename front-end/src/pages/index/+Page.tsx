import Container from '#root/components/Container';
import NavigationButtonGroup from '#root/components/NavigationButtonGroup';
import Section from '#root/components/Section';
import { LocalizedText } from '#root/utils/intl';
import { PageProps, isWithinIframe } from '#root/utils/page';

export default function HomePage({ pageContext }: PageProps) {
  const iframeContent = (
    <>
      <LocalizedText element="h1">Project Moore</LocalizedText>

      <p className="large-paragraph">
        <LocalizedText element="span">Här kan du hitta alla moduler som används på</LocalizedText>
        &nbsp;
        <a href="https://utn.se">utn.se</a>.&#32;
        <LocalizedText element="span">Nedan kan du se exempel på hur de kan användas.</LocalizedText>
      </p>
    </>
  );

  if (isWithinIframe(pageContext)) {
    return iframeContent;
  }

  return (
    <>
      <Section id="module">
        <Container>
          {iframeContent}

          <NavigationButtonGroup />
        </Container>
      </Section>
    </>
  );
}
