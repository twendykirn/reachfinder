import { httpRouter } from 'convex/server';
import { components } from './_generated/api';
import { auth } from './auth';

const http = httpRouter();

// Register Better Auth routes
components.betterAuth.registerRoutes(http, {
    auth,
});

export default http;
