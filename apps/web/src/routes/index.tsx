import CallToAction from '@/components/call-to-action';
import FAQsTwo from '@/components/faqs-2';
import Features from '@/components/features-1';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: HomeComponent,
    head: () => ({
        meta: [
            {
                title: 'ReachFinder - Find Contact Information from Any Website',
            },
            {
                name: 'description',
                content: 'ReachFinder helps you find emails, phone numbers, cal.com links, and social media profiles from any website. Simply paste a URL and discover all available contact information.',
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:title',
                content: 'ReachFinder - Find Contact Information from Any Website',
            },
            {
                property: 'og:description',
                content: 'ReachFinder helps you find emails, phone numbers, cal.com links, and social media profiles from any website. Simply paste a URL and discover all available contact information.',
            },
            {
                property: 'og:url',
                content: 'https://reachfinder.dev',
            },
            {
                property: 'og:image',
                content: 'https://reachfinder.dev/og.png',
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                name: 'twitter:title',
                content: 'ReachFinder - Find Contact Information from Any Website',
            },
            {
                name: 'twitter:description',
                content: 'ReachFinder helps you find emails, phone numbers, cal.com links, and social media profiles from any website. Simply paste a URL and discover all available contact information.',
            },
            {
                name: 'twitter:image',
                content: 'https://reachfinder.dev/og.png',
            },
        ],
        links: [
            {
                rel: 'canonical',
                href: 'https://reachfinder.dev',
            },
        ],
    }),
});

function HomeComponent() {
    return (
        <>
            <HeroSection />
            <Features />
            <FAQsTwo />
            <CallToAction />
            <FooterSection />
        </>
    );
}
