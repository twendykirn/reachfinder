import { createFileRoute } from '@tanstack/react-router';
import { Authenticated, AuthLoading, useQuery } from 'convex/react';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Spinner } from '@/components/ui/spinner';
import AiTextarea from '@/components/ai-textarea';
import { api } from '@reachfinder/backend/convex/_generated/api';
import { DataTable } from '@/components/data-table';
import { columns } from '@/components/columns';

export const Route = createFileRoute('/_auth/dashboard/')({
    component: RouteComponent,
});

function RouteComponent() {
    const tasks = useQuery(api.tasks.getAll, {});

    return (
        <>
            <Authenticated>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className='flex h-16 shrink-0 items-center gap-2'>
                            <div className='flex items-center gap-2 px-4'>
                                <SidebarTrigger className='-ml-1' />
                            </div>
                        </header>
                        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
                            <AiTextarea />
                            <div>
                                {tasks ? (
                                    <div className='container mx-auto py-10'>
                                        <DataTable columns={columns} data={tasks} />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </Authenticated>
            <AuthLoading>
                <Spinner />
            </AuthLoading>
        </>
    );
}
