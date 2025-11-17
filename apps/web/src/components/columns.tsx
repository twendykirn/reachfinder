import type { Doc } from '@reachfinder/backend/convex/_generated/dataModel';
import type { ColumnDef } from '@tanstack/react-table';
import { Badge } from './ui/badge';
import { Spinner } from './ui/spinner';
import { DeleteTaskDialog } from './delete-task-dialog';
import { SelectTaskDialog } from './select-task-dialog';

export const columns: ColumnDef<Doc<'tasks'>>[] = [
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const task = row.original;
            const status = task.status;

            const badgeVariant = status === 'completed' ? 'success' : status === 'failed' ? 'destructive' : 'warning';

            return (
                <Badge variant={badgeVariant} appearance='light'>
                    {task.status}
                </Badge>
            );
        },
    },
    {
        accessorKey: 'url',
        header: 'Url',
    },
    {
        accessorKey: 'credits',
        header: 'Credits',
        cell: ({ row }) => {
            const task = row.original;
            const credits = task.credits;

            if (credits === undefined) {
                return <Spinner />;
            }

            return credits;
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const task = row.original;

            if (task.status === 'pending') {
                return null;
            }

            return (
                <div className='flex items-center gap-2'>
                    <SelectTaskDialog task={task} />
                    <DeleteTaskDialog taskId={task._id} />
                </div>
            );
        },
    },
];
