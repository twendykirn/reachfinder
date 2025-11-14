import { createFileRoute } from '@tanstack/react-router';
import { useSession } from '@/lib/auth-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/dashboard/')({
    component: DashboardHome,
});

function DashboardHome() {
    const { data: session } = useSession();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Welcome back{session?.user?.name ? `, ${session.user.name}` : ''}!
                </h1>
                <p className="text-muted-foreground mt-2">
                    Here's what's happening with your account today.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                        <CardDescription>Start using ReachFinder</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Welcome to your dashboard! This is where you'll manage your account and access all features.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Your Account</CardTitle>
                        <CardDescription>Account information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-sm font-medium">Email</p>
                            <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
                        </div>
                        {session?.user?.name && (
                            <div>
                                <p className="text-sm font-medium">Name</p>
                                <p className="text-sm text-muted-foreground">{session.user.name}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common tasks</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            More features coming soon!
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
