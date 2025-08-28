import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { format } from 'date-fns';

import { Article, Category } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  categories: Category[];
}

function getCategoryName(categories: Category[], categoryId: number) {
  return categories.find((c) => c.id === categoryId)?.name || 'Uncategorized';
}

function stripHtml(html: string) {
  if (typeof window === 'undefined') {
    return html.replace(/<[^>]*>?/gm, ' ');
  }
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

export function ArticleCard({ article, categories }: ArticleCardProps) {
  const categoryName = getCategoryName(categories, article.category_id);
  const excerpt = stripHtml(article.body_html).substring(0, 100) + '...';

  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <Card className="flex flex-col h-full transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-soft dark:group-hover:shadow-primary/10">
        <CardHeader>
          <Badge variant="outline" className="w-fit mb-2">{categoryName}</Badge>
          <CardTitle className="text-lg font-bold font-headline leading-tight">{article.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(article.updated_on), 'MMM d, yyyy')}</span>
          </div>
          <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read more <ArrowRight className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
