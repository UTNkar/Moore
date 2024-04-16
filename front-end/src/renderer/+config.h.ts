import type { ConfigEnv } from 'vike/types';

import { PageConfig } from '#root/utils/page';

import DefaultLayout from './layout/DefaultLayout';

// https://vike.dev/config
export default {
  clientRouting: true,
  description:
    'Uppsala teknolog- och naturvetarkår är studentkåren för studenter på teknisk-naturvetenskapliga fakulteten vid Uppsala universitet.',
  hydrationCanBeAborted: true,
  Layout: DefaultLayout,
  locale: 'sv',
  meta: {
    data: { env: { client: true, server: true } },
    description: { env: { client: true, server: true } },
    Layout: { env: { client: true, server: true } },
    locale: { env: { client: true, server: true } },
    onBeforeRenderIsomorph: {
      effect: ({ configDefinedAt, configValue }) => {
        if (typeof configValue !== 'boolean') {
          throw new Error(`${configDefinedAt} should be a boolean`);
        }

        if (configValue) {
          return {
            meta: {
              onBeforeRender: {
                // We override Vike's default behavior of always loading/executing onBeforeRender() on the server-side.
                // If we set onBeforeRenderIsomorph to true, then onBeforeRender() is loaded/executed in the browser as well, allowing us to fetch data direcly from the browser upon client-side navigation (without involving our Node.js/Edge server at all).
                env: { client: true, server: true },
              },
            },
          };
        }
      },
      env: { client: false, config: true, server: false },
    },
    renderMode: {
      effect: ({ configDefinedAt, configValue }) => {
        let env: ConfigEnv | undefined;

        if (configValue === 'HTML') env = { client: false, server: true };
        if (configValue === 'SPA') env = { client: true, server: false };
        if (configValue === 'SSR') env = { client: true, server: true };

        if (!env) {
          throw new Error(`${configDefinedAt} should be 'SSR', 'SPA', or 'HTML'`);
        }

        return {
          meta: {
            Page: { env },
          },
        };
      },
      env: { client: false, config: true, server: false },
    },
    title: { env: { client: true, server: true } },
  },
  // https://vike.dev/passToClient
  passToClient: ['pageProps', 'title', 'description', 'locale', 'urlLogical', 'routeParams'],

  title: 'Uppsala teknolog- och naturvetarkår',
} satisfies PageConfig;
