import './polyfill.js';
import { type WebhookEvent } from '@clerk/backend';
import { httpRouter } from 'convex/server';
import { Webhook } from 'svix';
import { internal } from './_generated/api';
import { httpAction } from './_generated/server';
import { validateEvent, WebhookVerificationError } from '@polar-sh/sdk/webhooks';

async function validateRequest(req: Request): Promise<WebhookEvent | null> {
    const payloadString = await req.text();
    const svixHeaders = {
        'svix-id': req.headers.get('svix-id')!,
        'svix-timestamp': req.headers.get('svix-timestamp')!,
        'svix-signature': req.headers.get('svix-signature')!,
    };
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
    try {
        return wh.verify(payloadString, svixHeaders) as unknown as WebhookEvent;
    } catch (error) {
        console.error('Error verifying webhook event', error);
        return null;
    }
}

const http = httpRouter();

http.route({
    path: '/clerk-users-webhook',
    method: 'POST',
    handler: httpAction(async (ctx, request) => {
        const evt = await validateRequest(request);
        const svixId = request.headers.get('svix-id');

        if (!evt || !evt.type || !evt.data || !evt.data.id || !svixId) {
            console.error('HTTP Action: Webhook payload missing required fields (type, data.id).', event);
            return new Response('Invalid payload structure', { status: 400 });
        }

        console.log(`HTTP Action: Received Clerk event: ${evt.type} (ID: ${svixId})`);

        try {
            switch (evt.type) {
                case 'user.created':
                    await ctx.runMutation(internal.users.createUser, {
                        userId: evt.data.id,
                    });
                    console.log(`User created: ${evt.data.id}`);
                    break;
                case 'user.deleted':
                    await ctx.runMutation(internal.users.deleteUser, {
                        userId: evt.data.id,
                    });
                    console.log(`User deleted: ${evt.data.id}`);
                    break;
                default:
                    console.log(`Unhandled webhook event type: ${evt.type}`);
            }

            return new Response(null, { status: 200 });
        } catch (error) {
            console.error('Webhook processing error:', error);
            return new Response('Internal Server Error', { status: 500 });
        }
    }),
});

const getCorrectCreditsAmount = (productId: string | null) => {
    if (!productId) return 0;

    if (productId === process.env.POLAR_STARTER_CREDITS_PRODUCT_ID!) return 334;
    if (productId === process.env.POLAR_HOBBY_CREDITS_PRODUCT_ID!) return 800;
    return 0;
};

http.route({
    path: '/polar-webhook',
    method: 'POST',
    handler: httpAction(async (ctx, request) => {
        if (!request.body) {
            throw new Error('No body');
        }

        const body = await request.text();
        const headers = Object.fromEntries((request.headers as any).entries());

        try {
            const event = validateEvent(body, headers, process.env.POLAR_WEBHOOK_SECRET!);
            switch (event.type) {
                case 'order.paid': {
                    await ctx.runMutation(internal.users.updateUser, {
                        externalId: event.data.customer.externalId,
                        balance: getCorrectCreditsAmount(event.data.productId),
                    });
                    break;
                }
                case 'order.refunded': {
                    await ctx.runMutation(internal.users.updateUser, {
                        externalId: event.data.customer.externalId,
                        balance: -getCorrectCreditsAmount(event.data.productId),
                    });
                    break;
                }
            }
            return new Response('Accepted', { status: 202 });
        } catch (error) {
            if (error instanceof WebhookVerificationError) {
                console.error(error);
                return new Response('Forbidden', { status: 403 });
            }
            throw error;
        }
    }),
});

export default http;
