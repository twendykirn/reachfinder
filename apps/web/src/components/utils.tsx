export const displayCorrectSocialMediaIcon = (link: string) => {
    const url = new URL(link);

    if (url.hostname.endsWith('linkedin.com')) {
        return (
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M8 11v5' />
                <path d='M8 8v.01' />
                <path d='M12 16v-5' />
                <path d='M16 16v-3a2 2 0 1 0 -4 0' />
                <path d='M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z' />
            </svg>
        );
    }

    if (url.hostname.endsWith('github.com')) {
        return (
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
        );
    }

    if (url.hostname.endsWith('facebook.com')) {
        return (
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
            </svg>
        );
    }

    if (url.hostname.endsWith('youtube.com')) {
        return (
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z' />
                <path d='M10 9l5 3l-5 3z' />
            </svg>
        );
    }

    if (url.hostname.endsWith('instagram.com')) {
        return (
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
                <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
                <path d='M16.5 7.5v.01' />
            </svg>
        );
    }

    if (url.hostname.endsWith('discord.com')) {
        return (
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
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-discord'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0' />
                <path d='M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0' />
                <path d='M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3' />
                <path d='M7 16.5c3.5 1 6.5 1 10 0' />
            </svg>
        );
    }

    if (url.hostname.endsWith('twitter.com') || url.hostname.endsWith('x.com') || url.hostname.endsWith('t.co')) {
        return (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-twitter-x'
                viewBox='0 0 16 16'>
                <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z'></path>
            </svg>
        );
    }
};
