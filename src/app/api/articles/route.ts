// src/app/api/articles/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";

const ArticleCreate = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().optional(),
  body: z.string().min(1),
  published: z.boolean().optional(),
  categorySlugs: z.array(z.string()).optional(),
});

export async function GET() {
  const items = await prisma.article.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  // simple auth
  if ((process.env.ADMIN_TOKEN ?? "") !== req.headers.get("x-admin-token")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = ArticleCreate.parse(await req.json());
    const created = await prisma.article.create({
      data: {
        slug: data.slug,
        title: data.title,
        summary: data.summary,
        body: data.body,
        published: data.published ?? false,
      },
    });
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}

