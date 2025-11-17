import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Doc } from '@reachfinder/backend/convex/_generated/dataModel';
import { EmptyDescription } from './ui/empty';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Eye } from 'lucide-react';
import { displayCorrectSocialMediaIcon } from './utils';
import { ScrollArea } from './ui/scroll-area';

interface Props {
    task: Doc<'tasks'>;
}

export function SelectTaskDialog({ task }: Props) {
    const getEmailButtonLabel = (emailLink: string) => {
        const email = emailLink.replace('mailto:', '');
        const handler = email.split('@')[0];
        const subject = email.split('subject=')[1];

        if (subject) {
            return subject.replaceAll('%20', ' ');
        }

        return handler || 'Email';
    };

    const getCalComButtonLabel = (emailLink: string) => {
        const address = emailLink.split('cal.com/')[1];
        const handlerWithoutParams = address.split('?')[0];
        const handlerWithoutTeam = handlerWithoutParams.replace('team/', '');
        const handler = handlerWithoutTeam.replaceAll('/', ' - ');

        return handler || 'Cal.com';
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' size='icon-sm'>
                    <Eye />
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Task</DialogTitle>
                    <DialogDescription>
                        Crawled data for url - <span className='font-semibold'>{task.url}</span>
                    </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue='emails' className='max-w-full'>
                    <TabsList>
                        <TabsTrigger value='emails'>Emails</TabsTrigger>
                        <TabsTrigger value='phones'>Phones</TabsTrigger>
                        <TabsTrigger value='calCom'>Cal.com</TabsTrigger>
                        <TabsTrigger value='socialMedia'>Social Media</TabsTrigger>
                    </TabsList>
                    <TabsContent value='emails'>
                        <ScrollArea className='max-h-[450px] overflow-y-auto'>
                            {task.emails?.length ? (
                                <div className='flex flex-wrap items-center gap-2'>
                                    {task.emails.map(email => (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <a key={email} target='_blank' href={email}>
                                                    <Button className='max-w-[240px] truncate'>
                                                        {getEmailButtonLabel(email)}
                                                    </Button>
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>{email}</TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            ) : (
                                <EmptyDescription>No emails found</EmptyDescription>
                            )}
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value='phones'>
                        <ScrollArea className='max-h-[450px] overflow-y-auto'>
                            {task.phoneNumbers?.length ? (
                                <div className='flex flex-wrap items-center gap-2'>
                                    {task.phoneNumbers.map(phoneNumber => (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <a key={phoneNumber} target='_blank' href={phoneNumber}>
                                                    <Button className='max-w-[240px] truncate'>
                                                        {phoneNumber.replace('tel:', '')}
                                                    </Button>
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>{phoneNumber}</TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            ) : (
                                <EmptyDescription>No phone numbers found</EmptyDescription>
                            )}
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value='calCom'>
                        <ScrollArea className='max-h-[450px] overflow-y-auto'>
                            {task.calCom?.length ? (
                                <div className='flex flex-wrap items-center gap-2'>
                                    {task.calCom.map(link => (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <a key={link} target='_blank' href={link}>
                                                    <Button className='max-w-[240px] truncate'>
                                                        {getCalComButtonLabel(link)}
                                                    </Button>
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>{link}</TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            ) : (
                                <EmptyDescription>No Cal.com links found</EmptyDescription>
                            )}
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value='socialMedia'>
                        <ScrollArea className='max-h-[450px] overflow-y-auto'>
                            {task.socialMedia?.length ? (
                                <div className='flex flex-wrap items-center gap-2'>
                                    {task.socialMedia.map(link => (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <a key={link} target='_blank' href={link}>
                                                    <Button>{displayCorrectSocialMediaIcon(link)}</Button>
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent>{link}</TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            ) : (
                                <EmptyDescription>No Social Media found</EmptyDescription>
                            )}
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline'>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
