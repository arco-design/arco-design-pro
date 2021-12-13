import { createContext } from 'react';

export const GlobalContext = createContext<{ lang?: string }>({});
