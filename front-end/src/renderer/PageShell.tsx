import 'react-toastify/dist/ReactToastify.css';
import '../devlink/global.css';
import './css/style.css';

import { ComponentType, StrictMode, useMemo } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';

import { DevLinkProvider } from '#root/devlink/devlinkContext';
import translations from '#root/translations';
import { Locale, defaultLocale } from '#root/utils/intl';
import { LayoutProps, PageContextProvider, PropsWithChildrenAndPageContext } from '#root/utils/page';

import DefaultLayout from './layout/DefaultLayout';

export default function PageShell({
  children,
  pageContext,
  reactQueryClient = useMemo(() => new QueryClient(), []),
}: PropsWithChildrenAndPageContext & {
  reactQueryClient?: QueryClient;
}) {
  const Layout: ComponentType<LayoutProps> = (pageContext.config as any).Layout || DefaultLayout;

  const messages = useMemo<Record<Locale, Record<string, string>>>(() => {
    const sv: Record<string, string> = {};
    const en: Record<string, string> = translations;

    Object.keys(translations).forEach((key) => {
      sv[key] = key;
    });

    return { en, sv };
  }, [translations]);

  return (
    <StrictMode>
      <IntlProvider
        locale={pageContext.locale}
        defaultLocale={defaultLocale}
        messages={messages[pageContext.locale]}
      >
        <QueryClientProvider client={reactQueryClient}>
          <DevLinkProvider>
            <PageContextProvider pageContext={pageContext}>
              <Layout pageContext={pageContext}>{children}</Layout>

              <ToastContainer />
            </PageContextProvider>
          </DevLinkProvider>
        </QueryClientProvider>
      </IntlProvider>
    </StrictMode>
  );
}
