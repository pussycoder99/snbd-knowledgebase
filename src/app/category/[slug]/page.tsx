import { getArticles, getCategories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';
import { Breadcrumbs } from '@/components/breadcrumbs';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) {
    return { title: 'Category Not Found' };
  }
  return { title: `${category.name} | SNBD Host KB` };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const articles = await getArticles({ category: params.slug });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/' },
    { label: category.name },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-4xl font-bold tracking-tight mb-8 font-headline">
        Category: {category.name}
      </h1>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} categories={categories} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No articles found in this category.</p>
      )}
    </div>
  );
}
