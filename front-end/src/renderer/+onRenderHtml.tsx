// https://vike.dev/onRenderHtml
import { renderToString } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import { PageContextServer } from 'vike/types';

import clsx from 'clsx';

import { PageProps } from '#root/utils/page';

import { getLocale, getPageDescription, getPageTitle } from './page-meta-utils';
import PageShell from './PageShell';

export default async function onRenderHtml(pageContext: PageContextServer): Promise<any> {
  // See https://vike.dev/head
  const { documentProps, Page, pageProps = {} as PageProps } = pageContext;

  pageProps.pageContext = pageContext;

  const locale = getLocale(pageContext, documentProps);
  const title = getPageTitle(pageContext, documentProps, locale);
  const description = getPageDescription(pageContext, documentProps, locale);

  const themeColors = {
    dark: '#000000',
    light: '#ffffff',
  };

  const classes = {
    body: clsx(''),
    html: clsx('no-js non-interactive'),
    root: clsx(''),
  };

  let pageHtml: string = '';

  if (Page) {
    pageHtml = renderToString(
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>,
    );
  }

  // !TODO: vary theme color based on dark mode
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="${locale}" class="${classes.html}">
      <head>
        ${/* Title, description, and document configuration */ ''}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${description}" />

        ${/* Fonts */ ''}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">

        ${/* Manifests and favicons */ ''}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#004c98">
        <link rel="shortcut icon" href="/favicon.ico">
        <meta name="apple-mobile-web-app-title" content="UTN">
        <meta name="application-name" content="UTN">
        <meta name="msapplication-TileColor" content="#004c98">
        <meta name="msapplication-config" content="/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">

        ${/* Script for ".no-js"/".js"-selector and managing dark mode */ ''}
        <script>
          document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

          try {
            if (localStorage.theme === 'dark') {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');

              [
                ['meta[name="theme-color"]', 'content'],
                ['link[rel="mask-icon"]', 'color'],
                ['meta[name="msapplication-TileColor"]', 'content']
              ].forEach(function(params) {
                document.querySelector(params[0]).setAttribute(params[1], '${themeColors.dark}');
              });
            } else {
              document.documentElement.classList.add('light');
              document.documentElement.classList.remove('dark');

              [
                ['meta[name="theme-color"]', 'content'],
                ['link[rel="mask-icon"]', 'color'],
                ['meta[name="msapplication-TileColor"]', 'content']
              ].forEach(function(params) {
                document.querySelector(params[0]).setAttribute(params[1], '${themeColors.light}');
              });
            }
          } catch (error) {
            console.error('Failed managing dark mode:', error);
          }
        </script>
      </head>
      <body class="${classes.body}">
        <div id="root" class="${classes.root}">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
}
