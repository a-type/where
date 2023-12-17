import { HomePage } from './HomePage.jsx';
import { useCallback } from 'react';
import { lazyWithPreload as lazy } from 'react-lazy-with-preload';
import { makeRoutes, Router, Outlet, Link } from '@verdant-web/react-router';
import { updateApp, updateState } from '@/updateState.js';
import { PageRoot } from '@a-type/ui/components/layouts';
import { TopLoader } from '@/components/nav/TopLoader.jsx';
import { Navigation } from '@/components/nav/Navigation.jsx';

// dynamically import pages that may not be visited

const routes = makeRoutes([
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
]);

export function Pages() {
  const onNavigate = useCallback(() => {
    if (updateState.updateAvailable) {
      updateApp(true);
      return false;
    }
  }, []);
  return (
    <PageRoot>
      <Router routes={routes} onNavigate={onNavigate}>
        <Outlet />
        <TopLoader />
      </Router>
      <Navigation />
    </PageRoot>
  );
}
