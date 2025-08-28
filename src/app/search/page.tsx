'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Article, Category } from '@/lib/types';
import { ArticleCard } from '@/components/article-card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SearchBar } from '@/components/search-bar';
import { Skeleton } from '@/components/ui/skeleton';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [articlesRes, categoriesRes] = await Promise.all([
          fetch(`/api/articles?query=${encodeURIComponent(query)}`),
          fetch(`/api/categories`),
        ]);
        const [articlesData, categoriesData] = await Promise.all([
          articlesRes.json(),
          categoriesRes.json(),
        ]);
        setArticles(articlesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Search' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="max-w-2xl mx-auto mb-12">
        <SearchBar />
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-8 font-headline">
        {loading ? 'Searching...' : `${articles.length} results found for "${query}"`}
      </h1>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          ))}
        </div>
      ) : articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} categories={categories} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold">No articles found</h3>
            <p className="text-muted-foreground mt-2">
                We couldn't find any articles matching your search. Try using different keywords.
            </p>
        </div>
      )}
    </div>
  );
}
