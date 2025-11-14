import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Mail, Phone, Share2, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Textarea } from '@/components/ui/textarea';
import { FeatureCard } from '@/components/feature-card';
import { FaqsSection } from '@/components/faqs-section';
import { PricingSection } from '@/components/pricing-section';
import { Footer } from '@/components/footer';

const features = [
    {
        title: 'Faaast',
        icon: Mail,
        description: 'It supports an entire helping developers and innovate.',
    },
    {
        title: 'Powerful',
        icon: Phone,
        description: 'It supports an entire helping developers and businesses.',
    },
    {
        title: 'Security',
        icon: Share2,
        description: 'It supports an helping developers businesses.',
    },
];

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
    const [showSignIn, setShowSignIn] = useState(false);

    const [prompt, setPrompt] = useState('');

    const submitPrompt = () => {
        if (prompt.trim()) {
            console.log(prompt.trim());
            setPrompt('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (false) {
            submitPrompt();
            // Handle the URL submission for crawling
            console.log('Crawling URL:');
            // TODO: Implement actual crawling logic
        } else {
            setShowSignIn(true);
        }
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitPrompt();
        }
    };

    return (
        <div className='min-h-screen'>
            <Header />
            <section className='container mx-auto px-4 py-20 md:py-32'>
                <div className='max-w-4xl mx-auto text-center space-y-8'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        Find Contact Information
                        <br />
                        <span className='text-muted-foreground'>From Any Website</span>
                    </h1>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        Paste a URL and let AI crawl the website to extract emails, phone numbers, and social media
                        links instantly.
                    </p>

                    <div className='relative z-10 flex flex-col w-full mx-auto max-w-2xl content-center'>
                        <form
                            className='overflow-visible rounded-xl border p-2 transition-colors duration-200 focus-within:border-ring'
                            onSubmit={handleSubmit}>
                            <Textarea
                                className='max-h-50 min-h-12 resize-none rounded-none border-none bg-transparent! p-0 text-sm shadow-none focus-visible:border-transparent focus-visible:ring-0'
                                onChange={handleTextareaChange}
                                onKeyDown={handleKeyDown}
                                placeholder='Paste URL'
                                value={prompt}
                            />

                            <div className='flex items-center gap-1'>
                                <div className='ml-auto flex items-center gap-0.5 sm:gap-1'>
                                    <Button
                                        className='h-7 w-7 rounded-md'
                                        disabled={!prompt.trim()}
                                        size='icon'
                                        type='submit'
                                        variant='default'>
                                        <ArrowUp size={16} />
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section id='features' className='place-content-center mb-20 md:my-86'>
                <div className='mx-auto w-full max-w-5xl space-y-8 p-4'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h2 className='text-balance font-medium text-2xl md:text-4xl lg:text-5xl'>
                            Power. Speed. Control.
                        </h2>
                        <p className='mt-4 text-balance text-muted-foreground text-sm md:text-base'>
                            Everything you need to build fast, secure, scalable apps.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 divide-x divide-y border-t border-l sm:grid-cols-2 md:grid-cols-3'>
                        {features.map(feature => (
                            <FeatureCard
                                className='last:border-r last:border-b'
                                feature={feature}
                                key={feature.title}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id='faq' className='w-full mb-20 md:my-86'>
                <FaqsSection />
            </section>

            <div id='pricing' className='relative place-content-center mb-20 md:my-86'>
                <PricingSection />
            </div>

            <div className='w-full place-content-end pt-10'>
                <Footer />
            </div>
        </div>
    );
}
