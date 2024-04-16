import React from 'react';

import { createIX2Engine } from './devlink';
import { InteractionsProvider } from './interactions';
export const DevLinkContext = React.createContext({});
export const DevLinkProvider = ({ children, ...context }) => (
  <DevLinkContext.Provider value={context}>
    <InteractionsProvider createEngine={createIX2Engine}>{children}</InteractionsProvider>
  </DevLinkContext.Provider>
);
