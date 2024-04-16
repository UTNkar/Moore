import type { ComponentType } from 'react';
import type { PageContext } from 'vike/types';

import type { ConfigBuiltIn } from 'node_modules/vike/dist/esm/shared/page-configs/Config';

import type { Locale } from '../intl';

export interface LayoutProps<Data = unknown> {
  children?: React.ReactNode;
  pageContext: PageContext<Data>;
}

export type PageConfig = ConfigBuiltIn & Vike.Config & VikePackages.ConfigVikeReact;

export interface PageProps<Data = unknown> {
  pageContext: PageContext<Data>;
}

export type PropsWithChildrenAndPageContext<T extends object = {}> = T & {
  children?: React.ReactNode;
  pageContext: PageContext;
};

export type PropsWithPageContext<T extends object = {}> = T & {
  pageContext: PageContext;
};

declare global {
  namespace Vike {
    interface DocumentProps {
      description?: string;
      locale?: Locale;
      title?: string;
    }

    interface PageContext {
      Page: ComponentType<PageProps>;
      description: string;
      documentProps: DocumentProps;
      locale: Locale;
      pageProps: PageProps;
      title: string;
      urlLogical: string;
    }

    interface Config {
      Layout?: ComponentType<LayoutProps>;
      Page?: ComponentType<PageProps>;
      description?: string;
      locale?: Locale;
      title?: string;
    }
  }

  namespace VikePackages {
    interface ConfigVikeReact {
      Layout: ComponentType<LayoutProps>;
      description: string;
      locale: Locale;
      title: string;
    }
  }
}
