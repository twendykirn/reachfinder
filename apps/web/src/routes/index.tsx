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
                title: 'ReachFinder - Find & Connect with Influencers',
            },
            {
                name: 'description',
                content: 'Discover and connect with the right influencers for your brand. ReachFinder makes it easy to find creators, analyze their reach, and grow your business with influencer marketing.',
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                property: 'og:title',
                content: 'ReachFinder - Find & Connect with Influencers',
            },
            {
                property: 'og:description',
                content: 'Discover and connect with the right influencers for your brand. ReachFinder makes it easy to find creators, analyze their reach, and grow your business with influencer marketing.',
            },
            {
                property: 'og:url',
                content: 'https://reachfinder.dev',
            },
            {
                property: 'og:image',
                content: 'https://reachfinder.dev/og-image.png',
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
            {
                name: 'twitter:title',
                content: 'ReachFinder - Find & Connect with Influencers',
            },
            {
                name: 'twitter:description',
                content: 'Discover and connect with the right influencers for your brand. ReachFinder makes it easy to find creators, analyze their reach, and grow your business with influencer marketing.',
            },
            {
                name: 'twitter:image',
                content: 'https://reachfinder.dev/og-image.png',
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
