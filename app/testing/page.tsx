import { Metadata } from 'next';
import { LocalizedMarkdownViewer } from '@/components/markdown/MarkdownViewer';
import { getLocalizedMarkdown } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Testing Bilingual Content',
  description: 'A test page demonstrating the bilingual content format',
};

export const dynamic = 'force-dynamic';

export default async function TestingPage({ 
  params,
  searchParams 
}: {
  params: { slug: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const content = await getLocalizedMarkdown('./app/testing', '/testing') || '# Testing\n\nNo content found.';
  
  return <LocalizedMarkdownViewer content={content} />;
} 