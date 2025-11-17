import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    users: defineTable({
        externalId: v.string(),
        balance: v.number(),
    }).index('by_externalId', ['externalId']),
    tasks: defineTable({
        userId: v.id('users'),
        url: v.string(),
        status: v.union(v.literal('pending'), v.literal('completed'), v.literal('failed')),
        emails: v.optional(v.array(v.string())),
        phoneNumbers: v.optional(v.array(v.string())),
        socialMedia: v.optional(v.array(v.string())),
        calCom: v.optional(v.array(v.string())),
        credits: v.optional(v.number()),
    })
        .index('by_userId_status', ['userId', 'status'])
        .searchIndex('search_url', {
            searchField: 'url',
        }),
});
