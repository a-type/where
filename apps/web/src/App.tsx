import { clientDescriptor, hooks } from '@/store.js';
import { ReactNode, Suspense } from 'react';
import { Pages } from '@/pages/Pages.jsx';

export interface AppProps {}

export function App({}: AppProps) {
  return (
    <Suspense>
      <VerdantProvider>
        <Pages />
      </VerdantProvider>
    </Suspense>
  );
}

function VerdantProvider({ children }: { children: ReactNode }) {
  return <hooks.Provider value={clientDescriptor}>{children}</hooks.Provider>;
}
