import { createFileRoute } from '@tanstack/react-router';
import FooterSection from '@/components/footer';
import { HeroHeader } from '@/components/header';

export const Route = createFileRoute('/terms-of-service')({
    component: TermsOfServiceComponent,
});

function TermsOfServiceComponent() {
    return (
        <>
            <HeroHeader />
            <main className='overflow-hidden'>
                <div className='mx-auto max-w-4xl px-6 py-16 md:py-24'>
                    <h1 className='text-4xl font-bold md:text-5xl'>Terms of Service</h1>
                    <p className='text-muted-foreground mt-4'>Last updated: November 17, 2025</p>

                    <div className='prose dark:prose-invert mt-8 max-w-none space-y-6'>
                        <section>
                            <h2 className='text-2xl font-semibold'>1. Agreement to Terms</h2>
                            <p>
                                By accessing and using Reachfinder, you accept and agree to be bound by the terms and
                                provision of this agreement. If you do not agree to these Terms of Service, please do not
                                use our service.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>2. Description of Service</h2>
                            <p>
                                Reachfinder is a web crawling platform that extracts contact information from websites,
                                including:
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>Email addresses</li>
                                <li>Phone numbers</li>
                                <li>Social media profile links</li>
                                <li>Cal.com booking links</li>
                            </ul>
                            <p>
                                Users submit URLs, and our service crawls the specified websites to find and extract this
                                information. Results are displayed in real-time through our user interface.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>3. Account Registration</h2>
                            <p>
                                To use Reachfinder, you must create an account using one of our supported authentication
                                methods:
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>Email OTP (One-Time Password)</li>
                                <li>Google OAuth (Gmail)</li>
                            </ul>
                            <p>You are responsible for:</p>
                            <ul className='list-disc pl-6'>
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>4. Credit System and Pricing</h2>
                            <h3 className='text-xl font-semibold'>Credit Packages</h3>
                            <p>Reachfinder operates on a pay-as-you-go credit system with no subscriptions:</p>
                            <ul className='list-disc pl-6'>
                                <li>334 credits for $5</li>
                                <li>800 credits for $12</li>
                            </ul>

                            <h3 className='text-xl font-semibold'>Credit Usage</h3>
                            <ul className='list-disc pl-6'>
                                <li>Credits are consumed based on the number of pages crawled</li>
                                <li>You can set page limits for each crawl to control costs</li>
                                <li>Higher page limits provide more comprehensive results but cost more credits</li>
                                <li>Credits do not expire as long as your account remains active</li>
                            </ul>

                            <h3 className='text-xl font-semibold'>Refunds</h3>
                            <p>
                                Credit purchases are generally non-refundable. However, we may provide refunds at our
                                discretion in cases of service malfunction or billing errors. Contact us to request a
                                refund.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>5. Acceptable Use Policy</h2>
                            <p>You agree to use Reachfinder only for lawful purposes. You must not:</p>
                            <ul className='list-disc pl-6'>
                                <li>
                                    Crawl websites that explicitly prohibit automated access in their robots.txt or terms
                                    of service
                                </li>
                                <li>Use the service for spamming, harassment, or any illegal activities</li>
                                <li>Attempt to overwhelm or harm our infrastructure or third-party services</li>
                                <li>Violate any applicable data protection laws, including GDPR and CCPA</li>
                                <li>Use the extracted contact information for unauthorized marketing purposes</li>
                                <li>Resell or redistribute the data extracted through our service without permission</li>
                                <li>Attempt to reverse engineer or copy our service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>6. Multiple Concurrent Tasks</h2>
                            <p>
                                Reachfinder allows you to run multiple crawling tasks simultaneously. While we do not
                                impose strict limits on concurrent tasks, we reserve the right to throttle or limit usage
                                that we determine to be excessive or abusive.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>7. Data and Results</h2>
                            <h3 className='text-xl font-semibold'>Data Storage</h3>
                            <p>
                                We store only the contact information extracted from crawls (emails, phone numbers, social
                                media links, and Cal.com links). We do not store the complete content of crawled websites.
                            </p>

                            <h3 className='text-xl font-semibold'>Data Accuracy</h3>
                            <p>
                                While we strive to provide accurate results, we do not guarantee the accuracy,
                                completeness, or reliability of the extracted contact information. Results depend on the
                                structure and content of the websites being crawled.
                            </p>

                            <h3 className='text-xl font-semibold'>Data Ownership</h3>
                            <p>
                                You retain ownership of the URLs you submit and the results generated from your crawls.
                                However, you must ensure you have the legal right to crawl the websites you submit.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>8. Third-Party Services</h2>
                            <p>Reachfinder relies on third-party services:</p>
                            <ul className='list-disc pl-6'>
                                <li>
                                    <strong>Convex:</strong> Backend database and real-time functionality
                                </li>
                                <li>
                                    <strong>Clerk:</strong> Authentication and user management
                                </li>
                                <li>
                                    <strong>Firecrawl:</strong> Website crawling engine
                                </li>
                            </ul>
                            <p>
                                Service availability and performance may be affected by these third-party providers. We
                                are not liable for any disruptions caused by third-party service failures.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>9. Service Availability</h2>
                            <p>
                                We strive to maintain high availability but do not guarantee uninterrupted service. We may
                                temporarily suspend service for maintenance, updates, or due to circumstances beyond our
                                control. We will provide reasonable notice when possible.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>10. Intellectual Property</h2>
                            <p>
                                Reachfinder, including its design, features, and functionality, is owned by Igor Kirnosov
                                s.p. and protected by international copyright, trademark, and other intellectual property
                                laws. You may not copy, modify, or distribute any part of our service without explicit
                                permission.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>11. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Reachfinder and its operators shall not be liable
                                for any indirect, incidental, special, consequential, or punitive damages, including but
                                not limited to:
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>Loss of profits or data</li>
                                <li>Loss of goodwill or business interruption</li>
                                <li>Personal or property damage</li>
                                <li>
                                    Any damages resulting from your use or inability to use the service, even if we have
                                    been advised of the possibility of such damages
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>12. Indemnification</h2>
                            <p>
                                You agree to indemnify and hold harmless Reachfinder, its operators, and affiliates from
                                any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>Your use of the service</li>
                                <li>Your violation of these Terms of Service</li>
                                <li>Your violation of any rights of another party</li>
                                <li>Your use of extracted contact information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>13. Termination</h2>
                            <p>We reserve the right to:</p>
                            <ul className='list-disc pl-6'>
                                <li>Suspend or terminate your account at any time for violation of these terms</li>
                                <li>Refuse service to anyone for any reason</li>
                                <li>Discontinue the service at any time with reasonable notice</li>
                            </ul>
                            <p>
                                You may delete your account at any time through your account settings. Upon termination,
                                your right to use the service will immediately cease.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>14. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms of Service at any time. We will notify users of
                                any material changes by posting the new terms on this page and updating the "Last updated"
                                date. Your continued use of the service after such modifications constitutes acceptance of
                                the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>15. Governing Law</h2>
                            <p>
                                These Terms of Service shall be governed by and construed in accordance with the laws of
                                the jurisdiction in which Igor Kirnosov s.p. operates, without regard to its conflict of law
                                provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>16. Dispute Resolution</h2>
                            <p>
                                Any disputes arising from these terms or your use of Reachfinder shall be resolved through
                                good faith negotiation. If negotiation fails, disputes may be submitted to binding
                                arbitration or the courts of the applicable jurisdiction.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>17. Contact Information</h2>
                            <p>For questions about these Terms of Service, please contact us at:</p>
                            <p>
                                Email: <a href='mailto:support@reachfinder.com'>support@reachfinder.com</a>
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>18. Severability</h2>
                            <p>
                                If any provision of these Terms of Service is found to be unenforceable or invalid, that
                                provision shall be limited or eliminated to the minimum extent necessary so that the
                                remaining terms remain in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-2xl font-semibold'>19. Entire Agreement</h2>
                            <p>
                                These Terms of Service, together with our Privacy Policy, constitute the entire agreement
                                between you and Reachfinder regarding your use of the service and supersede all prior
                                agreements and understandings.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <FooterSection />
        </>
    );
}
