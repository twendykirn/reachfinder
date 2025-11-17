import { v } from 'convex/values';
import { internalMutation, query } from './_generated/server';

export const get = query({
    args: {},
    handler: async ctx => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error('Not authenticated');
        }

        return await ctx.db
            .query('users')
            .withIndex('by_externalId', q => q.eq('externalId', identity.subject))
            .first();
    },
});

export const createUser = internalMutation({
    args: {
        userId: v.string(),
    },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query('users')
            .withIndex('by_externalId', q => q.eq('externalId', args.userId))
            .unique();

        if (existingUser) {
            console.log(`User ${args.userId} already exists`);
            return existingUser._id;
        }

        const userId = await ctx.db.insert('users', {
            externalId: args.userId,
            balance: 0,
        });

        return userId;
    },
});

export const deleteUser = internalMutation({
    args: {
        userId: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query('users')
            .withIndex('by_externalId', q => q.eq('externalId', args.userId))
            .unique();

        if (!user) {
            console.log(`User ${args.userId} not found for deletion`);
            return { success: false, message: 'User not found' };
        }

        const tasks = await ctx.db
            .query('tasks')
            .withIndex('by_userId_status', q => q.eq('userId', user._id))
            .collect();

        for (const task of tasks) {
            await ctx.db.delete(task._id);
        }

        await ctx.db.delete(user._id);

        return { success: true };
    },
});

export const updateUser = internalMutation({
    args: {
        externalId: v.union(v.string(), v.null()),
        balance: v.number(),
    },
    handler: async (ctx, args) => {
        const { externalId, balance } = args;

        if (externalId === null) {
            throw new Error('External ID cannot be null');
        }

        const user = await ctx.db
            .query('users')
            .withIndex('by_externalId', q => q.eq('externalId', externalId))
            .unique();

        if (!user) {
            console.log(`User ${externalId} not found for deletion`);
            return { success: false, message: 'User not found' };
        }

        await ctx.db.patch(user._id, {
            balance: user.balance + balance,
        });

        return { success: true };
    },
});
