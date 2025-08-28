import { getArticles } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || undefined;
  const category = searchParams.get('category') || undefined;
  const tag = searchParams.get('tag') || undefined;

  const articles = await getArticles({ query, category, tag });
  return NextResponse.json(articles);
}
