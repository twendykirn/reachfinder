import { Polar } from '@polar-sh/sdk';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/checkout')({
    server: {
        handlers: {
            GET: async ({ request }) => {
                const url = new URL(request.url);
                const products = url.searchParams.getAll('products');

                if (products.length === 0) {
                    return Response.json({ error: 'Missing products in query params' }, { status: 400 });
                }

                const retUrl = new URL(process.env.POLAR_REDIRECT_URL!);

                const polar = new Polar({
                    accessToken: process.env.POLAR_ACCESS_TOKEN,
                    server: process.env.POLAR_SERVER_ENVIRONMENT as 'sandbox' | 'production',
                });

                try {
                    const result = await polar.checkouts.create({
                        products,
                        successUrl: decodeURI(retUrl.toString()),
                        externalCustomerId: url.searchParams.get('customerExternalId') ?? undefined,
                        customerEmail: url.searchParams.get('customerEmail') ?? undefined,
                        returnUrl: decodeURI(retUrl.toString()),
                    });

                    const redirectUrl = new URL(result.url);

                    redirectUrl.searchParams.set('theme', 'dark');

                    return new Response(JSON.stringify({ redirectUrl: redirectUrl.toString() }), {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                } catch (error) {
                    console.error(error);
                    return Response.error();
                }
            },
        },
    },
});
