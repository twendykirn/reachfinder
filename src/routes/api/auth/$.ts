import { createFileRoute } from '@tanstack/react-router';
import { reactStartHandler } from '@convex-dev/better-auth/react-start';

const handler = reactStartHandler();

export const Route = createFileRoute('/api/auth/$')({
    server: {
        handlers: {
            GET: handler,
            POST: handler,
        },
    },
});
