import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FaqsSection() {
    return (
        <div className='mx-auto w-full max-w-5xl lg:border-x'>
            <div className='mx-4 grid grid-cols-1 border-x md:mx-0 md:grid-cols-2 md:border-x-0'>
                <div className='space-y-4 px-4 pt-12 pb-4 md:border-r'>
                    <h2 className='font-black text-3xl md:text-4xl'>FAQs</h2>
                    <p className='text-muted-foreground'>
                        Here are some common questions and answers that you might encounter when using Efferd.
                    </p>
                </div>
                <div className='place-content-center'>
                    <Accordion collapsible defaultValue='item-1' type='single'>
                        {questions.map(item => (
                            <AccordionItem
                                className='first:border-t last:border-b data-[state=open]:bg-card'
                                key={item.id}
                                value={item.id}>
                                <AccordionTrigger className='px-4 py-4 text-[15px] leading-6 hover:no-underline'>
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className='px-4 pb-4 text-muted-foreground'>
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className='flex h-14 items-center justify-center border-t'>
                <p className='text-muted-foreground'>
                    Can't find what you're looking for?{' '}
                    <a className='text-primary hover:underline' href='#'>
                        Contact Us
                    </a>
                </p>
            </div>
        </div>
    );
}

const questions = [
    {
        id: 'item-1',
        title: 'How does the website crawling work?',
        content:
            'Our AI-powered crawler visits the website you provide and intelligently scans all accessible pages to find contact information including email addresses, phone numbers, and social media links. The process typically takes just a few seconds.',
    },
    {
        id: 'item-2',
        title: 'Do credits expire?',
        content:
            'No, credits never expire. Once you purchase a package, you can use your credits whenever you need them without any time limits.',
    },
    {
        id: 'item-3',
        title: 'What information can I extract?',
        content:
            'You can extract email addresses, phone numbers in various formats, and social media profile links from platforms like Github, X, LinkedIn, YouTube, and more.',
    },
];
