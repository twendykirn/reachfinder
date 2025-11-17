import * as React from 'react';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Coins } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export function NavSecondary({
    balance,
    externalId,
    email,
    ...props
}: {
    balance: number;
    externalId: string;
    email: string;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    const navigate = useNavigate();

    const navigateToCheckout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const result = await fetch(
            `/api/checkout?customerExternalId=${externalId}&customerEmail=${email}&products=${
                (import.meta as any).env.VITE_POLAR_STARTER_CREDITS_PRODUCT_ID
            }&products=${(import.meta as any).env.VITE_POLAR_HOBBY_CREDITS_PRODUCT_ID}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = await result.json();

        if (data.redirectUrl) {
            navigate({
                href: data.redirectUrl,
                reloadDocument: true,
            });
        }
    };

    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {email && externalId ? (
                        <SidebarMenuItem key='credits'>
                            <SidebarMenuButton asChild size='sm'>
                                <a href='/' onClick={navigateToCheckout}>
                                    <Coins />
                                    <span>{balance} credits left</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ) : null}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
