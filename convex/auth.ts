import { betterAuth } from 'better-auth';
import { convex } from '@convex-dev/better-auth';
import { components } from './_generated/api';
import { query } from './_generated/server';

export const createAuth = () => {
    return betterAuth({
        database: convex(components.betterAuth),
        emailAndPassword: {
            enabled: true,
        },
        plugins: [convex()],
    });
};

export const auth = createAuth();

export const getCurrentUser = query({
    args: {},
    handler: async (ctx) => {
        const userId = await ctx.auth.getUserIdentity();
        if (!userId) return null;

        return userId;
    },
});
