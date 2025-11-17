import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Gauge, Search, Zap } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Features() {
    return (
        <section id='features' className='bg-zinc-50 py-16 md:py-32 dark:bg-transparent'>
            <div className='@container mx-auto max-w-5xl px-6'>
                <div className='text-center'>
                    <h2 className='text-balance text-4xl font-semibold lg:text-5xl'>Powerful Features</h2>
                    <p className='mt-4'>Everything you need to find contact information across the web.</p>
                </div>
                <div className='@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16'>
                    <Card className='group shadow-zinc-950/5'>
                        <CardHeader className='pb-3'>
                            <CardDecorator>
                                <Zap className='size-6' aria-hidden />
                            </CardDecorator>

                            <h3 className='mt-6 font-medium'>Lightning Fast</h3>
                        </CardHeader>

                        <CardContent>
                            <p className='text-sm'>
                                Get results in real-time. Run multiple tasks simultaneously and see contact information appear instantly as it's discovered.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='group shadow-zinc-950/5'>
                        <CardHeader className='pb-3'>
                            <CardDecorator>
                                <Search className='size-6' aria-hidden />
                            </CardDecorator>

                            <h3 className='mt-6 font-medium'>Comprehensive Crawling</h3>
                        </CardHeader>

                        <CardContent>
                            <p className='mt-3 text-sm'>
                                Extract emails, phone numbers, social media profiles, and Cal.com links. Control crawl depth with adjustable page limits for better accuracy.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='group shadow-zinc-950/5'>
                        <CardHeader className='pb-3'>
                            <CardDecorator>
                                <Gauge className='size-6' aria-hidden />
                            </CardDecorator>

                            <h3 className='mt-6 font-medium'>Pay As You Go</h3>
                        </CardHeader>

                        <CardContent>
                            <p className='mt-3 text-sm'>
                                No subscriptions, just credits. Buy 334 credits for $5 or 800 credits for $12. Only pay for what you use.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className='mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]'>
        <div
            aria-hidden
            className='absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50'
        />

        <div className='bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t'>
            {children}
        </div>
    </div>
);
