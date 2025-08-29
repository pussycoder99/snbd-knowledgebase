// src/app/search/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
};

// Optional: keep route dynamic by default if your data changes often
// export const revalidate = 0;
// or: export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function SearchPage({ searchParams }: PageProps) {
  const qParam = searchParams?.q;
  const q = Array.isArray(qParam) ? qParam[0] : qParam ?? "";

  // TODO: call your backend to fetch results using `q`
  // const results = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?q=${encodeURIComponent(q)}`).then(r => r.json());

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Search</h1>
      <p className="mt-2 text-sm text-gray-500">Query: {q || "(empty)"}</p>

      {/* render results here */}
      {/* <ResultsList results={results} /> */}
    </main>
  );
}

