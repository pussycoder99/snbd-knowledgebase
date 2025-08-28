import { getArticleBySlug } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const article = await getArticleBySlug(params.slug);
  if (article) {
    return NextResponse.json(article);
  } else {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }
}
