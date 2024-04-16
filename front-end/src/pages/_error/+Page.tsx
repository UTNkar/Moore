import Container from '#root/components/Container';
import NavigationButtonGroup from '#root/components/NavigationButtonGroup';
import Section from '#root/components/Section';
import { LocalizedText } from '#root/utils/intl';

export default Page;

function Page({ is404 }: any) {
  let content: JSX.Element;

  if (is404) {
    content = (
      <>
        <LocalizedText element="h1">404</LocalizedText>

        <p className="large-paragraph">
          <LocalizedText element="span">Den här sidan kunde inte hittas.</LocalizedText>&#32;
          <LocalizedText element="span">Vi ber om ursäkt för det.</LocalizedText>
        </p>
      </>
    );
  } else {
    content = (
      <>
        <LocalizedText element="h1">500 Internt fel</LocalizedText>

        <p className="large-paragraph">
          <LocalizedText element="span">Något gick snett.</LocalizedText>&#32;
          <LocalizedText element="span">Systemutvecklarna jobbar på det.</LocalizedText>
        </p>
      </>
    );
  }

  return (
    <Section>
      <Container>
        {content}

        <NavigationButtonGroup />
      </Container>
    </Section>
  );
}
