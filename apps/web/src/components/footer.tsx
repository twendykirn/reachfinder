import { Link } from '@tanstack/react-router';

const links = [
    {
        title: 'Features',
        to: '/',
        hash: 'features',
    },
    {
        title: 'FAQ',
        to: '/',
        hash: 'faq',
    },
    {
        title: 'Privacy Policy',
        to: '/privacy-policy',
    },
    {
        title: 'Terms of Service',
        to: '/terms-of-service',
    },
];

export default function FooterSection() {
    return (
        <footer className='py-16 md:py-32'>
            <div className='mx-auto max-w-5xl px-6'>
                <Link to='/' aria-label='go home' className='mx-auto block size-fit flex items-center gap-2'>
                    <img src='/reachfinder_logo.png' alt='ReachFinder logo' className='size-8' />
                    <span className='text-balance text-center text-lg'>ReachFinder</span>
                </Link>

                <div className='my-8 flex flex-wrap justify-center gap-6 text-sm'>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            hash={link.hash}
                            className='text-muted-foreground hover:text-primary block duration-150'>
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className='my-8 flex flex-wrap justify-center gap-6 text-sm'>
                    <a
                        href='https://x.com/twendykirn'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='X/Twitter'
                        className='text-muted-foreground hover:text-primary block'>
                        <svg
                            className='size-6'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em'
                            height='1em'
                            viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z'></path>
                        </svg>
                    </a>
                    <a
                        href='www.linkedin.com/in/igorkirnosov'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                        className='text-muted-foreground hover:text-primary block'>
                        <svg
                            className='size-6'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1em'
                            height='1em'
                            viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'></path>
                        </svg>
                    </a>
                    <a
                        href='https://github.com/twendykirn/reachfinder'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Github'
                        className='text-muted-foreground hover:text-primary block'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='icon icon-tabler icons-tabler-outline icon-tabler-brand-github'>
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
                        </svg>
                    </a>
                </div>
                <span className='text-muted-foreground block text-center text-sm'>
                    {' '}
                    © {new Date().getFullYear()} Igor Kirnosov s.p, All rights reserved
                </span>
            </div>
        </footer>
    );
}
