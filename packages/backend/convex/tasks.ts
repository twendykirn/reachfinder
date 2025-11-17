import { query, mutation, internalMutation } from './_generated/server';
import { components, internal } from './_generated/api';
import { v } from 'convex/values';
import { Workpool } from '@convex-dev/workpool';

const firecrawlWorkpool = new Workpool(components.firecrawlWorkpool, {
    maxParallelism: 25,
    retryActionsByDefault: true,
    defaultRetryBehavior: { maxAttempts: 3, initialBackoffMs: 1000, base: 2 },
});

export const getAll = query({
    args: {},
    handler: async ctx => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error('Not authenticated');
        }

        const user = await ctx.db
            .query('users')
            .withIndex('by_externalId', q => q.eq('externalId', identity.subject))
            .first();

        if (!user) {
            throw new Error('User not found');
        }

        return await ctx.db
            .query('tasks')
            .withIndex('by_userId_status', q => q.eq('userId', user._id))
            .order('desc')
            .collect();
    },
});

export const updateInternal = internalMutation({
    args: {
        taskId: v.id('tasks'),
        userId: v.id('users'),
        status: v.union(v.literal('completed'), v.literal('failed')),
        cost: v.optional(v.number()),
        emails: v.optional(v.array(v.string())),
        phoneNumbers: v.optional(v.array(v.string())),
        socialMedia: v.optional(v.array(v.string())),
        calCom: v.optional(v.array(v.string())),
    },
    handler: async (ctx, args) => {
        const task = await ctx.db.get(args.taskId);
        const user = await ctx.db.get(args.userId);

        if (!user) {
            throw new Error('User not found');
        }

        if (!task) {
            throw new Error('Task not found');
        }

        if (args.cost !== undefined) {
            await ctx.db.patch(user._id, {
                balance: user.balance - args.cost,
            });
        }

        await ctx.db.patch(task._id, {
            status: args.status,
            credits: args.cost,
            emails: args.emails,
            phoneNumbers: args.phoneNumbers,
            socialMedia: args.socialMedia,
            calCom: args.calCom,
        });
    },
});

export const create = mutation({
    args: {
        url: v.string(),
        limit: v.number(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error('Not authenticated');
        }

        const user = await ctx.db
            .query('users')
            .withIndex('by_externalId', q => q.eq('externalId', identity.subject))
            .first();

        if (!user) {
            throw new Error('User not found');
        }

        if (user.balance < 10) {
            throw new Error('Low balance');
        }

        const taskId = await ctx.db.insert('tasks', {
            userId: user._id,
            status: 'pending',
            url: args.url,
        });

        await firecrawlWorkpool.enqueueAction(ctx, internal.firecrawl.runCrawl, {
            url: args.url,
            userId: user._id,
            taskId,
            limit: args.limit,
        });
    },
});

export const remove = mutation({
    args: {
        taskId: v.id('tasks'),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error('Not authenticated');
        }

        const user = await ctx.db
            .query('users')
            .withIndex('by_externalId', q => q.eq('externalId', identity.subject))
            .first();

        if (!user) {
            throw new Error('User not found');
        }

        await ctx.db.delete(args.taskId);
    },
});
