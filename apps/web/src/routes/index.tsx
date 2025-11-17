import CallToAction from '@/components/call-to-action';
import FAQsTwo from '@/components/faqs-2';
import Features from '@/components/features-1';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: HomeComponent,
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
