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
import { api } from '@reachfinder/backend/convex/_generated/api';
import type { Id } from '@reachfinder/backend/convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from './ui/spinner';

interface Props {
    taskId: Id<'tasks'>;
}

export function DeleteTaskDialog({ taskId }: Props) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const removeTask = useMutation(api.tasks.remove);

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            await removeTask({ taskId });
        } catch (error: any) {
            toast.error(`${error.message ? error.message : error}`);
        } finally {
            setIsLoading(false);
            setOpen(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='destructive' size='icon-sm'>
                    <Trash />
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Delete task</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this task? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                    <Button variant='destructive' disabled={isLoading} onClick={() => handleDelete()}>
                        {isLoading ? <Spinner /> : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
