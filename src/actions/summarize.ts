'use server';

import { summarizeArticle } from '@/ai/flows/article-summarization';

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, ' ');
}

export async function generateSummary(articleContent: string) {
  try {
    const plainTextContent = stripHtml(articleContent);
    if (plainTextContent.trim().length < 100) {
      return { error: 'Article content is too short to summarize.' };
    }
    
    const result = await summarizeArticle({ articleContent: plainTextContent });
    return { summary: result.summary };
  } catch (error) {
    console.error('AI summarization failed:', error);
    return { error: 'Unable to generate summary at this time.' };
  }
}
