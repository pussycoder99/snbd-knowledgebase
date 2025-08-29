import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

export default async function ArticlePage({ params }: PageProps) {
  // Call your API endpoint
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${params.slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  const article = await res.json();

  return (
    <main className="max-w-4xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <article className="lg:col-span-9">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          {article.summary && (
            <p className="text-muted-foreground">{article.summary}</p>
          )}
          {article.tags?.length > 0 && (
            <div className="flex gap-2 mt-2">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.body_html }}
        />
      </article>

      <aside className="lg:col-span-3 space-y-8">
        <div className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Still need help?</h2>
          <a
            href="https://portal.snbdhost.com/submitticket.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit a Ticket
          </a>
        </div>
      </aside>
    </main>
  );
}
