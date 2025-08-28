import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { vote } = await request.json();
  const { slug } = params;

  // In a real application, you would store this feedback in a database.
  // We'll log it to the console for demonstration purposes.
  console.log(`Feedback received for article "${slug}": ${vote}`);

  if (vote === 'up' || vote === 'down') {
    return NextResponse.json({ ok: true, message: 'Thanks for the feedback!' });
  } else {
    return NextResponse.json({ ok: false, message: 'Invalid vote.' }, { status: 400 });
  }
}
