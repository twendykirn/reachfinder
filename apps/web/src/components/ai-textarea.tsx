import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { api } from '@reachfinder/backend/convex/_generated/api';
import { useMutation } from 'convex/react';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { Spinner } from './ui/spinner';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const LIMITS = [
    {
        value: '10',
        name: '10 pages',
        description: 'Maximum 10 pages to crawl',
        max: true,
    },
    {
        value: '15',
        name: '15 pages',
        description: 'Maximum 15 pages to crawl',
    },
    {
        value: '20',
        name: '20 pages',
        description: 'Maximum 20 pages to crawl',
    },
    {
        value: '30',
        name: '30 pages',
        description: 'Maximum 30 pages to crawl',
    },
    {
        value: '40',
        name: '40 pages',
        description: 'Maximum 30 pages to crawl',
    },
    {
        value: '50',
        name: '50 pages',
        description: 'Maximum 30 pages to crawl',
    },
    {
        value: '60',
        name: '60 pages',
        description: 'Maximum 60 pages to crawl',
    },
];

export default function AiTextarea() {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLimit, setSelectedLimit] = useState(LIMITS[0]);

    const createTask = useMutation(api.tasks.create);

    const submitPrompt = async () => {
        if (prompt.trim()) {
            setIsLoading(true);
            try {
                await createTask({ url: prompt.trim(), limit: parseFloat(selectedLimit.value) });
            } catch (error: any) {
                const errorString = `${error.message ? error.message : error}`;

                if (errorString.includes('Not authenticated')) {
                    toast.error('Not authenticated');
                    return;
                }

                if (errorString.includes('Low balance')) {
                    toast.error('Low balance');
                    return;
                }

                if (errorString.includes('Task not found')) {
                    toast.error('Task not found');
                    return;
                }

                toast.error(errorString);
            } finally {
                setPrompt('');
                setIsLoading(false);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitPrompt();
    };

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.target.value;

        if (value !== '') {
            if (value.startsWith('http://') || value.startsWith('https://')) {
                value = value.replace('http://', '').replace('https://', '');
            }

            value = `https://${value}`;
        }

        setPrompt(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitPrompt();
        }
    };

    const handleModelChange = (value: string) => {
        const limit = LIMITS.find(l => l.value === value);
        if (limit) {
            setSelectedLimit(limit);
        }
    };

    return (
        <div className='mx-auto flex w-full flex-col gap-4'>
            <h1 className='text-pretty text-center font-heading font-semibold text-[29px] text-foreground tracking-tighter sm:text-[32px] md:text-[46px]'>
                Paste. Crawl. Contact.
            </h1>
            <h2 className='-my-5 pb-4 text-center text-xl text-muted-foreground'>
                Find all contact information simply by pasting website URL.
            </h2>

            <div className='relative z-10 flex flex-col w-full mx-auto max-w-2xl content-center'>
                <form
                    className='overflow-visible rounded-xl border p-2 transition-colors duration-200 focus-within:border-ring'
                    onSubmit={handleSubmit}>
                    <Textarea
                        className='max-h-50 min-h-12 resize-none rounded-none border-none bg-transparent! p-0 text-sm shadow-none focus-visible:border-transparent focus-visible:ring-0'
                        onChange={handleTextareaChange}
                        onKeyDown={handleKeyDown}
                        placeholder='Paste URL...'
                        value={prompt}
                        disabled={isLoading}
                    />

                    <div className='flex items-center gap-1'>
                        <div className='relative flex items-center'>
                            <Select value={selectedLimit.value} onValueChange={handleModelChange}>
                                <SelectTrigger className='w-fit border-none bg-transparent! p-0 text-sm text-muted-foreground hover:text-foreground focus:ring-0 shadow-none'>
                                    <SelectValue>
                                        <span>{selectedLimit.name}</span>
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {LIMITS.map(limit => (
                                        <SelectItem key={limit.value} value={limit.value}>
                                            <span>{limit.name}</span>
                                            <span className='text-muted-foreground block text-xs'>
                                                {limit.description}
                                            </span>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='ml-auto flex items-center gap-0.5 sm:gap-1'>
                            <Button
                                className='h-7 w-7 rounded-md'
                                disabled={!prompt.trim() || isLoading}
                                size='icon'
                                type='submit'
                                variant='default'>
                                {isLoading ? <Spinner /> : <ArrowUp size={16} />}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
