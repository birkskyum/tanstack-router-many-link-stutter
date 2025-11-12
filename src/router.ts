import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPendingMs: 0,
    defaultPendingMinMs: 0,
    defaultPreloadStaleTime: 0,
  });

  return router;
}
