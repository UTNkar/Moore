// https://vike.dev/onRenderClient
import { Root, createRoot, hydrateRoot } from 'react-dom/client';
import type { PageContextClient } from 'vike/types';

import { QueryClient } from '@tanstack/react-query';

import { PageProps } from '#root/utils/page';

import PageShell from './PageShell';

let reactRoot: Root;

const reactQueryClient = new QueryClient();

export default async function onRenderClient(pageContext: PageContextClient): Promise<void> {
  const { Page, pageProps = {} as PageProps } = pageContext;

  pageProps.pageContext = pageContext;

  const page = (
    <PageShell reactQueryClient={reactQueryClient} pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const rootElement = document.getElementById('root');

  if (rootElement.innerHTML !== '' && pageContext.isHydration) {
    reactRoot = hydrateRoot(rootElement, page);
  } else {
    if (!reactRoot) {
      reactRoot = createRoot(rootElement);
    }

    reactRoot.render(page);
  }
}
