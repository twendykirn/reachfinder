// convex/convex.config.ts
import { defineApp } from 'convex/server';
import workpool from '@convex-dev/workpool/convex.config';

const app = defineApp();
app.use(workpool, { name: 'firecrawlWorkpool' });

export default app;
