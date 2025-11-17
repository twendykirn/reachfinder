import * as React from 'react';
import { SquareTerminal } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { api } from '@reachfinder/backend/convex/_generated/api';
import { useUser } from '@clerk/tanstack-react-start';
import { useQuery } from 'convex/react';
import { NavSecondary } from './nav-secondary';

const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Home',
            url: '/dashboard',
            icon: SquareTerminal,
            isActive: true,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const privateData = useQuery(api.users.get);
    const user = useUser();

    return (
        <Sidebar variant='inset' {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <a href='/'>
                                <img src='/reachfinder_logo.png' alt='ReachFinder logo' className='size-8' />
                                <div className='grid flex-1 text-left text-sm leading-tight'>
                                    <span className='truncate font-medium'>ReachFinder</span>
                                    <span className='truncate text-xs'>Find all contact info</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary
                    balance={privateData?.balance || 0}
                    externalId={privateData?.externalId || ''}
                    email={user.user?.primaryEmailAddress?.emailAddress || ''}
                    className='mt-auto'
                />
            </SidebarContent>
            <SidebarFooter>
                <NavUser
                    user={{
                        email: user.user?.primaryEmailAddress?.emailAddress || '',
                        avatar: user.user?.imageUrl || '',
                        externalId: privateData?.externalId || '',
                    }}
                />
            </SidebarFooter>
        </Sidebar>
    );
}
