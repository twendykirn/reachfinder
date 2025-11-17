import { Toaster } from '@/components/ui/sonner';

import { HeadContent, Outlet, Scripts, createRootRouteWithContext, useRouteContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import appCss from '../index.css?url';
import type { QueryClient } from '@tanstack/react-query';
import type { ConvexQueryClient } from '@convex-dev/react-query';
import type { ConvexReactClient } from 'convex/react';

import { ClerkProvider, useAuth } from '@clerk/tanstack-react-start';
import { auth } from '@clerk/tanstack-react-start/server';
import { createServerFn } from '@tanstack/react-start';
import { ConvexProviderWithClerk } from 'convex/react-clerk';

const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
    const clerkAuth = await auth();
    const token = await clerkAuth.getToken({ template: 'convex' });
    return { userId: clerkAuth.userId, token };
});

export interface RouterAppContext {
    queryClient: QueryClient;
    convexClient: ConvexReactClient;
    convexQueryClient: ConvexQueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
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
                title: 'ReachFinder - Find & Connect with Influencers',
            },
            {
                name: 'description',
                content: 'ReachFinder helps you discover and connect with the right influencers for your brand. Find creators, analyze their reach, and grow your business.',
            },
            // Open Graph Tags
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:site_name',
                content: 'ReachFinder',
            },
            {
                property: 'og:title',
                content: 'ReachFinder - Find & Connect with Influencers',
            },
            {
                property: 'og:description',
                content: 'ReachFinder helps you discover and connect with the right influencers for your brand. Find creators, analyze their reach, and grow your business.',
            },
            {
                property: 'og:url',
                content: 'https://reachfinder.dev',
            },
            {
                property: 'og:image',
                content: 'https://reachfinder.dev/og-image.png',
            },
            {
                property: 'og:image:width',
                content: '1200',
            },
            {
                property: 'og:image:height',
                content: '630',
            },
            {
                property: 'og:image:alt',
                content: 'ReachFinder - Find & Connect with Influencers',
            },
            // Twitter Card Tags
            {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                name: 'twitter:site',
                content: '@reachfinder',
            },
            {
                name: 'twitter:title',
                content: 'ReachFinder - Find & Connect with Influencers',
            },
            {
                name: 'twitter:description',
                content: 'ReachFinder helps you discover and connect with the right influencers for your brand. Find creators, analyze their reach, and grow your business.',
            },
            {
                name: 'twitter:image',
                content: 'https://reachfinder.dev/og-image.png',
            },
            {
                name: 'twitter:image:alt',
                content: 'ReachFinder - Find & Connect with Influencers',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
            {
                rel: 'canonical',
                href: 'https://reachfinder.dev',
            },
        ],
    }),

    component: RootDocument,
    beforeLoad: async ctx => {
        const { userId, token } = await fetchClerkAuth();
        if (token) {
            ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
        }
        return { userId, token };
    },
});

function RootDocument() {
    const context = useRouteContext({ from: Route.id });
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={context.convexClient} useAuth={useAuth}>
                <html lang='en' className='dark'>
                    <head>
                        <HeadContent />
                    </head>
                    <body>
                        <Outlet />
                        <Toaster richColors />
                        <TanStackRouterDevtools position='bottom-left' />
                        <Scripts />
                    </body>
                </html>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
