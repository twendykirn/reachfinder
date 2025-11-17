'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What information does Reachfinder extract?',
            answer: 'Reachfinder crawls websites and extracts emails, phone numbers, Cal.com links, and social media profile links. We only store the contact information found, not the entire website content.',
        },
        {
            id: 'item-2',
            question: 'How does the credit system work?',
            answer: 'We use a pay-as-you-go credit system with no subscriptions. You can purchase 334 credits for $5 or 800 credits for $12. Credits are deducted based on the number of pages crawled.',
        },
        {
            id: 'item-3',
            question: 'Can I run multiple searches at once?',
            answer: 'Yes! Reachfinder allows you to run multiple crawling tasks simultaneously. All results appear in real-time in a clean, organized interface.',
        },
        {
            id: 'item-4',
            question: 'How do page limits affect results?',
            answer: 'You can adjust the page limit for each crawl. Higher page limits provide more comprehensive results but consume more credits. This gives you control over depth vs. cost.',
        },
        {
            id: 'item-5',
            question: 'Is my data secure?',
            answer: 'Your privacy is our priority. Authentication is handled by Clerk using email OTP or Gmail. Only Clerk stores email addresses - we do not store them in our Convex database. We only retain the contact information extracted from your crawls.',
        },
    ];

    return (
        <section id='faq' className='py-16 md:py-24'>
            <div className='mx-auto max-w-5xl px-4 md:px-6'>
                <div className='mx-auto max-w-xl text-center'>
                    <h2 className='text-balance text-3xl font-bold md:text-4xl lg:text-5xl'>
                        Frequently Asked Questions
                    </h2>
                    <p className='text-muted-foreground mt-4 text-balance'>
                        Discover quick and comprehensive answers to common questions about our platform, services, and
                        features.
                    </p>
                </div>

                <div className='mx-auto mt-12 max-w-xl'>
                    <Accordion
                        type='single'
                        collapsible
                        className='bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0'>
                        {faqItems.map(item => (
                            <AccordionItem key={item.id} value={item.id} className='border-dashed'>
                                <AccordionTrigger className='cursor-pointer text-base hover:no-underline'>
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className='text-base'>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
