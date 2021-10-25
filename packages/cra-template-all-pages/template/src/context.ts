import { createContext } from 'react';

export const GlobalContext = createContext<{ locale?: Record<string, string> }>({});
