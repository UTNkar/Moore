// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vike.dev/pageContext-anywhere

import React, { useContext } from 'react';
import type { PageContext } from 'vike/types';

import { getGlobalObject } from '#root/utils/misc/getGlobalObject';

const { Context } = getGlobalObject('page-context.ts', {
  Context: React.createContext<PageContext>(undefined as never),
});

export function PageContextProvider({
  pageContext,
  children,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}): JSX.Element {
  if (!pageContext) {
    throw new Error('Argument pageContext missing');
  }

  return React.createElement(Context.Provider, { value: pageContext }, children);
}

/** Access the `pageContext` from any React component */
export function usePageContext<Data = unknown>(): PageContext<Data> {
  const pageContext = useContext(Context);

  if (!pageContext) {
    throw new Error('<PageContextProvider> is needed for being able to use usePageContext()');
  }

  return pageContext as PageContext<Data>;
}
