import { getArticleBySlug, getCategories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Calendar, Tag, Printer, Link as LinkIcon, ThumbsUp, ThumbsDown } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FeedbackVote } from '@/components/feedback-vote';
import { AiSummary } from '@/components/ai-summary';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Not Found' };
  }
  return { title: `${article.title} | SNBD Host KB` };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  const categories = await getCategories();

  if (!article) {
    notFound();
  }

  const category = categories.find((c) => c.id === article.category_id);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: category?.name || 'Articles', href: category ? `/category/${category.slug}` : '/' },
    { label: article.title },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <article className="lg:col-span-9">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-headline">{article.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last updated on {format(new Date(article.updated_on), 'MMMM d, yyyy')}</span>
              </div>
              {category && (
                <div className="flex items-center gap-2">
                  <span>|</span>
                  <Link href={`/category/${category.slug}`} className="hover:text-primary">{category.name}</Link>
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" asChild>
                  <Link href={`/search?q=${encodeURIComponent(tag)}`}>{tag}</Link>
                </Badge>
              ))}
            </div>
          </header>

          <AiSummary articleContent={article.body_html} />

          <Separator className="my-8" />
          
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          />
        </article>

        <aside className="lg:col-span-3 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Article Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-2">
                    <Button variant="outline" onClick={() => {
                        if (typeof window !== 'undefined') {
                            navigator.clipboard.writeText(window.location.href);
                        }
                    }}>
                        <LinkIcon className="mr-2 h-4 w-4" /> Copy Link
                    </Button>
                     <Button variant="outline" onClick={() => typeof window !== 'undefined' && window.print()}>
                        <Printer className="mr-2 h-4 w-4" /> Print Article
                    </Button>
                </CardContent>
            </Card>

          <Card>
            <CardHeader>
              <CardTitle>Was this helpful?</CardTitle>
              <CardDescription>Let us know how we did.</CardDescription>
            </CardHeader>
            <CardContent>
                <FeedbackVote articleSlug={article.slug} />
            </CardContent>
          </Card>
          
          <Card className="bg-primary/10 border-primary">
            <CardHeader>
              <CardTitle>Still need help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Our support team is just a click away. We're happy to assist with any questions you may have.</p>
              <Button className="w-full" asChild>
                <a href="https://portal.snbdhost.com/submitticket.php" target="_blank" rel="noopener noreferrer">
                  Submit a Ticket
                </a>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
