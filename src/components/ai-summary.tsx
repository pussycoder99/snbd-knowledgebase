'use client';

import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { generateSummary } from '@/actions/summarize';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function AiSummary({ articleContent }: { articleContent: string }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError(null);
    const result = await generateSummary(articleContent);
    if (result.summary) {
      setSummary(result.summary);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <div className="not-prose">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base font-semibold hover:no-underline">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>AI Article Summary</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            {summary && <p className="text-muted-foreground">{summary}</p>}
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {!summary && !error && (
              <div className="text-center p-4 border-2 border-dashed rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">Get a quick summary of this article using AI.</p>
                <Button onClick={handleGenerateSummary} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Generate Summary'
                  )}
                </Button>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
