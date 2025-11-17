import { createFileRoute } from '@tanstack/react-router';
import FooterSection from '@/components/footer';
import { HeroHeader } from '@/components/header';

export const Route = createFileRoute('/privacy-policy')({
    component: PrivacyPolicyComponent,
});

function PrivacyPolicyComponent() {
    return (
        <>
            <HeroHeader />
            <main className='overflow-hidden'>
                <div className='mx-auto max-w-4xl px-6 py-16 md:py-24'>
                    <h1 className='text-4xl font-bold md:text-5xl'>Privacy Policy</h1>
                    <p className='text-muted-foreground mt-4'>Last updated: November 17, 2025</p>

                    <div className='prose dark:prose-invert mt-8 max-w-none space-y-6'>
                        <section>
                            <h2 className='text-2xl font-semibold'>Introduction</h2>
                            <p>
                                Welcome to Reachfinder. We are committed to protecting your privacy and ensuring the
                                security of your personal information. This Privacy Policy explains how we collect, use,
                                and safeguard your data when you use our website crawling and contact extraction
                                service.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Information We Collect</h2>
                            <h3 className='text-xl font-semibold'>Authentication Information</h3>
                            <p>
                                We use Clerk for authentication services. When you sign up or log in, Clerk collects and
                                stores your email address. We support two authentication methods:
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>Email OTP (One-Time Password)</li>
                                <li>Google OAuth (Gmail)</li>
                            </ul>
                            <p>
                                Important: We do not store your email address in our Convex database. All email
                                information is stored and managed exclusively by Clerk.
                            </p>

                            <h3 className='text-xl font-semibold'>Crawling Results</h3>
                            <p>When you use Reachfinder to crawl websites, we store only the following information:</p>
                            <ul className='list-disc pl-6'>
                                <li>Email addresses found on crawled websites</li>
                                <li>Phone numbers found on crawled websites</li>
                                <li>Social media profile links found on crawled websites</li>
                                <li>Cal.com links found on crawled websites</li>
                            </ul>
                            <p>
                                We do not store the complete content of crawled websites, only the specific contact
                                information extracted.
                            </p>

                            <h3 className='text-xl font-semibold'>Usage Information</h3>
                            <ul className='list-disc pl-6'>
                                <li>Credit balance and transaction history</li>
                                <li>URLs submitted for crawling</li>
                                <li>Page limits set for each crawl</li>
                                <li>Task creation and completion timestamps</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>How We Use Your Information</h2>
                            <p>We use the collected information to:</p>
                            <ul className='list-disc pl-6'>
                                <li>Provide and maintain the Reachfinder service</li>
                                <li>Process your crawling requests</li>
                                <li>Manage your credit balance and purchases</li>
                                <li>Display your crawling results in the user interface</li>
                                <li>Improve our service and user experience</li>
                                <li>Communicate with you about your account and service updates</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Data Storage and Security</h2>
                            <h3 className='text-xl font-semibold'>Backend Infrastructure</h3>
                            <p>We use the following services to power Reachfinder:</p>
                            <ul className='list-disc pl-6'>
                                <li>
                                    <strong>Convex:</strong> Stores your crawling results and usage data
                                </li>
                                <li>
                                    <strong>Clerk:</strong> Manages authentication and stores your email address
                                </li>
                                <li>
                                    <strong>Firecrawl:</strong> Powers our website crawling functionality
                                </li>
                            </ul>
                            <p>
                                All data is encrypted in transit and at rest. We implement industry-standard security
                                measures to protect your information from unauthorized access, disclosure, alteration,
                                or destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Third-Party Services</h2>
                            <p>Reachfinder integrates with the following third-party services:</p>
                            <ul className='list-disc pl-6'>
                                <li>
                                    <strong>Clerk:</strong> For authentication services (see Clerk's privacy policy)
                                </li>
                                <li>
                                    <strong>Firecrawl:</strong> For website crawling (see Firecrawl's privacy policy)
                                </li>
                                <li>
                                    <strong>Polar:</strong> For handling credit purchases (your payment information is
                                    processed securely and not stored on our servers)
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className='list-disc pl-6'>
                                <li>Access your personal data stored in our system</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your account and associated data</li>
                                <li>Opt out of marketing communications</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us through the contact information
                                provided below.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Data Retention</h2>
                            <p>
                                We retain your crawling results and usage data for as long as your account is active. If
                                you delete your account, we will remove your data from our systems within 30 days,
                                except where we are required to retain it for legal or regulatory purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Cookies and Tracking</h2>
                            <p>
                                We use essential cookies to maintain your session and provide core functionality. We do
                                not use advertising or tracking cookies. Your authentication state is managed by Clerk's
                                session management.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any material
                                changes by posting the new Privacy Policy on this page and updating the "Last updated"
                                date at the top.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <p>
                                Email: <a href='mailto:support@reachfinder.dev'>support@reachfinder.dev</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    );
}
