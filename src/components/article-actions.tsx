'use client';

import { Link as LinkIcon, Printer } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ArticleActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Article Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <Button
          variant="outline"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <LinkIcon className="mr-2 h-4 w-4" /> Copy Link
        </Button>
        <Button
          variant="outline"
          onClick={() => window.print()}
        >
          <Printer className="mr-2 h-4 w-4" /> Print Article
        </Button>
      </CardContent>
    </Card>
  );
}
