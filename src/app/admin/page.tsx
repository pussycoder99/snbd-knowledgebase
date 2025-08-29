"use client";

import { useState } from "react";

export default function AdminPage() {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [published, setPublished] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": process.env.NEXT_PUBLIC_ADMIN_TOKEN || "",
        },
        body: JSON.stringify({
          slug,
          title,
          summary,
          body,
          published,
          categorySlugs: [],
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create article");
      }

      const data = await res.json();
      setMessage(`✅ Article "${data.title}" created successfully!`);
      setSlug("");
      setTitle("");
      setSummary("");
      setBody("");
      setPublished(false);
    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin – Create Article</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Body (Markdown supported)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 border rounded h-40"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          Published
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}

