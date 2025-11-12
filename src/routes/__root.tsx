import { HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
      
        <HeadContent />
      
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
      </head>
      <body>
        {children}
         <Scripts />
      </body>
    </html>
  );
}
