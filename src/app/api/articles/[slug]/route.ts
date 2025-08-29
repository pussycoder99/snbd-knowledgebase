import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { marked } from "marked";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    ...article,
    body_html: marked.parse(article.body), // ✅ convert Markdown → HTML
    tags: article.summary
      ? article.summary.split(/\s+/) // ✅ basic tag logic (split summary words)
      : [],
  });
}
