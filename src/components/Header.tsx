import React from 'react';
import { createPortal } from 'react-dom';
import { Logo } from '@/components/logo';
import { MenuToggleIcon } from '@/components/menu-toggle-icon';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSession, signOut } from '@/lib/auth-client';
import { useNavigate } from '@tanstack/react-router';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const { data: session } = useSession();
    const navigate = useNavigate();

    const links = [
        {
            label: 'Features',
            href: '#',
        },
        {
            label: 'Pricing',
            href: '#',
        },
        {
            label: 'About',
            href: '#',
        },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const handleSignOut = async () => {
        await signOut();
        navigate({ to: '/sign-in' });
    };

    const handleSignIn = () => {
        navigate({ to: '/sign-in' });
    };

    const handleGetStarted = () => {
        if (session) {
            navigate({ to: '/dashboard' });
        } else {
            navigate({ to: '/sign-up' });
        }
    };

    return (
        <header className='sticky top-0 z-50 w-full border-transparent border-b border-border bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50'>
            <nav className='mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4'>
                <div className='rounded-md p-2 hover:bg-accent'>
                    <Logo className='h-4' />
                </div>
                <div className='hidden items-center gap-2 md:flex'>
                    {links.map((link, i) => (
                        <a className={buttonVariants({ variant: 'ghost' })} href={link.href} key={i}>
                            {link.label}
                        </a>
                    ))}
                    {session ? (
                        <>
                            <Button variant='outline' onClick={() => navigate({ to: '/dashboard' })}>
                                Dashboard
                            </Button>
                            <Button variant='outline' onClick={handleSignOut}>
                                Sign Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant='outline' onClick={handleSignIn}>Sign In</Button>
                            <Button onClick={handleGetStarted}>Get Started</Button>
                        </>
                    )}
                </div>
                <Button
                    aria-controls='mobile-menu'
                    aria-expanded={open}
                    aria-label='Toggle menu'
                    className='md:hidden'
                    onClick={() => setOpen(!open)}
                    size='icon'
                    variant='outline'>
                    <MenuToggleIcon className='size-5' duration={300} open={open} />
                </Button>
            </nav>
            <MobileMenu className='flex flex-col justify-between gap-2' open={open}>
                <div className='grid gap-y-2'>
                    {links.map(link => (
                        <a
                            className={buttonVariants({
                                variant: 'ghost',
                                className: 'justify-start',
                            })}
                            href={link.href}
                            key={link.label}>
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className='flex flex-col gap-2'>
                    {session ? (
                        <>
                            <Button className='w-full bg-transparent' variant='outline' onClick={() => navigate({ to: '/dashboard' })}>
                                Dashboard
                            </Button>
                            <Button className='w-full' variant='outline' onClick={handleSignOut}>
                                Sign Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button className='w-full bg-transparent' variant='outline' onClick={handleSignIn}>
                                Sign In
                            </Button>
                            <Button className='w-full' onClick={handleGetStarted}>Get Started</Button>
                        </>
                    )}
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') {
        return null;
    }

    return createPortal(
        <div
            className={cn(
                'bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50',
                'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden'
            )}
            id='mobile-menu'>
            <div
                className={cn(
                    'data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in',
                    'size-full p-4',
                    className
                )}
                data-slot={open ? 'open' : 'closed'}
                {...props}>
                {children}
            </div>
        </div>,
        document.body
    );
}
