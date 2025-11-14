import { HeadContent, Outlet, Scripts, createRootRouteWithContext, useRouteContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { QueryClient } from '@tanstack/react-query';

import Header from '../components/Header';

import appCss from '../styles.css?url';
import { createServerFn } from '@tanstack/react-start';
import { auth } from '@clerk/tanstack-react-start/server';
import { ClerkProvider, useAuth } from '@clerk/tanstack-react-start';
import { ConvexReactClient } from 'convex/react';
import { ConvexQueryClient } from '@convex-dev/react-query';
import { ConvexProviderWithClerk } from 'convex/react-clerk';

const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
    const { getToken, userId } = await auth();
    const token = await getToken({ template: 'convex' });

    return {
        userId,
        token,
    };
});

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
    beforeLoad: async ctx => {
        const auth = await fetchClerkAuth();
        const { userId, token } = auth;

        // During SSR only (the only time serverHttpClient exists),
        // set the Clerk auth token to make HTTP queries with.
        if (token) {
            ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
        }

        return {
            userId,
            token,
        };
    },
    shellComponent: RootComponent,
});

function RootComponent() {
    const context = useRouteContext({ from: Route.id });
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={context.convexClient} useAuth={useAuth}>
                <RootDocument>
                    <Outlet />
                </RootDocument>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <HeadContent />
            </head>
            <body>
                <Header />
                {children}
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
