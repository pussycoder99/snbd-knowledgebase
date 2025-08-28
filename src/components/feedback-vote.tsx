'use client';

import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

interface FeedbackVoteProps {
  articleSlug: string;
}

export function FeedbackVote({ articleSlug }: FeedbackVoteProps) {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleVote = async (vote: 'up' | 'down') => {
    if (submitted) return;
    setVoted(vote);

    try {
      const response = await fetch(`/api/articles/${articleSlug}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vote }),
      });
      if (response.ok) {
        setSubmitted(true);
        toast({
          title: 'Feedback Submitted',
          description: "Thanks for letting us know!",
        });
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Could not submit your feedback. Please try again later.',
        variant: 'destructive',
      });
      setVoted(null);
    }
  };

  if (submitted) {
    return (
      <div className="text-center text-sm text-green-500 p-4 border border-green-500/30 bg-green-500/10 rounded-md">
        Thanks for your feedback!
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant={voted === 'up' ? 'default' : 'outline'}
        onClick={() => handleVote('up')}
        className="flex-1"
        aria-label="This article was helpful"
      >
        <ThumbsUp className="mr-2 h-4 w-4" /> Yes
      </Button>
      <Button
        variant={voted === 'down' ? 'destructive' : 'outline'}
        onClick={() => handleVote('down')}
        className="flex-1"
        aria-label="This article was not helpful"
      >
        <ThumbsDown className="mr-2 h-4 w-4" /> No
      </Button>
    </div>
  );
}
