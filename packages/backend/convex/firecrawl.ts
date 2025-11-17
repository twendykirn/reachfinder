'use node';

import { v } from 'convex/values';
import { internalAction } from './_generated/server';
import Firecrawl from '@mendable/firecrawl-js';
import { internal } from './_generated/api';

const SOCIAL_MEDIA_HOSTNAMES = [
    'twitter.com',
    'x.com',
    't.co',
    'discord.com',
    'instagram.com',
    'youtube.com',
    'facebook.com',
    'github.com',
    'linkedin.com',
];

const isSocialMediaHostname = (hostname: string) => {
    return SOCIAL_MEDIA_HOSTNAMES.some(media => hostname.endsWith(media));
};

export const runCrawl = internalAction({
    args: {
        url: v.string(),
        userId: v.id('users'),
        taskId: v.id('tasks'),
        limit: v.number(),
    },
    handler: async (ctx, args) => {
        const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY! });

        const crawlResponse = await firecrawl.crawl(args.url, {
            limit: args.limit,
            crawlEntireDomain: true,
            allowExternalLinks: false,
            scrapeOptions: {
                formats: ['links'],
            },
        });

        const links = new Set<string>();

        for (const dataItem of crawlResponse.data) {
            if (!dataItem.links) continue;

            for (const link of dataItem.links) {
                links.add(link);
            }
        }

        const emails = new Set<string>();
        const phoneNumbers = new Set<string>();
        const socialMedia = new Set<string>();
        const calCom = new Set<string>();

        for (const link of links) {
            if (link.startsWith('mailto:')) {
                emails.add(link);
            } else if (link.startsWith('tel:')) {
                phoneNumbers.add(link);
            } else {
                const url = new URL(link);

                if (['cal.com', ...SOCIAL_MEDIA_HOSTNAMES].includes(url.hostname) && !url.pathname) {
                    continue;
                }

                if (url.hostname.endsWith('cal.com')) {
                    calCom.add(link);
                } else if (isSocialMediaHostname(url.hostname)) {
                    socialMedia.add(link);
                }
            }
        }

        await ctx.runMutation(internal.tasks.updateInternal, {
            taskId: args.taskId,
            userId: args.userId,
            status: crawlResponse.status === 'completed' ? 'completed' : 'failed',
            cost: crawlResponse.creditsUsed,
            emails: Array.from(emails),
            phoneNumbers: Array.from(phoneNumbers),
            socialMedia: Array.from(socialMedia),
            calCom: Array.from(calCom),
        });
    },
});
