import { ArrowRight, Book, HelpCircle, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { getArticles, getCategories } from '@/lib/data';
import { Article, Category } from '@/lib/types';
import { ArticleCard } from '@/components/article-card';
import { SearchBar } from '@/components/search-bar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

export default async function Home() {
  const categories = await getCategories();
  const allArticles = await getArticles({});
  const popularArticles = allArticles.filter((a) => a.popular).slice(0, 5);
  const recentArticles = allArticles.slice(0, 9);
  const quickTags = [...new Set(allArticles.flatMap((a) => a.tags))].slice(0, 7);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-headline">
          Find quick answers for <Highlight>BDIX Hosting</Highlight>, Domains, and <Highlight>n8n Automation</Highlight>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Welcome to the SNBD HOST knowledgebase. Your one-stop resource for guides, tutorials, and troubleshooting.
        </p>
        <div className="max-w-2xl mx-auto mb-4">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button size="lg" asChild>
            <a href="https://portal.snbdhost.com/submitticket.php" target="_blank" rel="noopener noreferrer">
              <Sparkles className="mr-2" /> Ask Support
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Popular topics:</span>
          {quickTags.map((tag) => (
            <Badge key={tag} variant="secondary" asChild>
              <Link href={`/search?q=${encodeURIComponent(tag)}`}>{tag}</Link>
            </Badge>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-9">
          <section id="recent-articles">
            <h2 className="text-2xl font-bold mb-6 font-headline flex items-center">
              <Book className="mr-3 text-primary" />
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} categories={categories} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="mr-3 text-primary" />
                Popular Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {popularArticles.map((article) => (
                  <li key={article.id}>
                    <Link href={`/article/${article.slug}`} className="group flex items-start gap-2 text-sm hover:text-primary transition-colors">
                      <ArrowRight className="h-4 w-4 shrink-0 mt-1 text-muted-foreground group-hover:text-primary" />
                      <span>{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-3 text-primary" />
                Need more help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Can't find what you're looking for? Our support team is here to help.
              </p>
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
