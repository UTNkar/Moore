import { Footer } from '#root/devlink/Footer';
import { Header } from '#root/devlink/Header';
import { LayoutProps, isWithinIframe } from '#root/utils/page';

export default function DefaultLayout({ children, pageContext }: LayoutProps) {
  return (
    <>
      {!isWithinIframe(pageContext) && <Header />}

      <main>{children}</main>

      {!isWithinIframe(pageContext) && <Footer />}
    </>
  );
}
