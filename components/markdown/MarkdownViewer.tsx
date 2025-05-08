'use client';

import { usePathname } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { parseMarkdown } from '@/lib/markdown';

interface MarkdownViewerProps {
  content: string;
}

export function MarkdownViewer({ content }: MarkdownViewerProps) {
  const { title, sections } = parseMarkdown(content);

  return (
    <div className="prose prose-lg dark:prose-invert mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{title}</h1>
      
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypePrism]}
            className="markdown"
          >
            {section.content}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

export function LocalizedMarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <MarkdownViewer content={content} />
    </div>
  );
} 