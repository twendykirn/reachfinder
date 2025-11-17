import { HeadContent, Outlet, Scripts, createRootRouteWithContext, useRouteContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { QueryClient } from '@tanstack/react-query';

import appCss from '../styles.css?url';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { ConvexQueryClient } from '@convex-dev/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';
import { NotFound } from '@/components/NotFound';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
    convexClient: ConvexReactClient;
    convexQueryClient: ConvexQueryClient;
}>()({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'TanStack Start Starter',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
        ],
    }),
    errorComponent: props => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        );
    },
    notFoundComponent: () => <NotFound />,
    component: RootComponent,
});

function RootComponent() {
    const context = useRouteContext({ from: Route.id });
    return (
        <ConvexProvider client={context.convexClient}>
            <RootDocument>
                <Outlet />
            </RootDocument>
        </ConvexProvider>
    );
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <HeadContent />
            </head>
            <body>
                <ThemeProvider>
                    {children}
                    <Toaster richColors />
                </ThemeProvider>
                <TanStackDevtools
                    config={{
                        position: 'bottom-right',
                    }}
                    plugins={[
                        {
                            name: 'Tanstack Router',
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    );
}
