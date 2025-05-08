"use client";

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { cn } from '@/lib/utils';

/**
 * MarkdownContent Component
 * 
 * Renders markdown content with proper formatting:
 * - Code syntax highlighting
 * - GitHub-flavored markdown support
 * - Responsive design
 * - Proper styling for all markdown elements
 * 
 * @param content - Markdown content as a string
 * @param className - Additional CSS classes
 */
export function MarkdownContent({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypePrism]}
        components={{
          // Override heading elements to add IDs for anchor links
          h1: ({ node, ...props }) => {
            const id = props.children
              ? props.children.toString().toLowerCase().replace(/\s+/g, '-')
              : '';
            return <h1 id={id} {...props} />;
          },
          h2: ({ node, ...props }) => {
            const id = props.children
              ? props.children.toString().toLowerCase().replace(/\s+/g, '-')
              : '';
            return <h2 id={id} {...props} />;
          },
          h3: ({ node, ...props }) => {
            const id = props.children
              ? props.children.toString().toLowerCase().replace(/\s+/g, '-')
              : '';
            return <h3 id={id} {...props} />;
          },
          h4: ({ node, ...props }) => {
            const id = props.children
              ? props.children.toString().toLowerCase().replace(/\s+/g, '-')
              : '';
            return <h4 id={id} {...props} />;
          },
          h5: ({ node, ...props }) => {
            const id = props.children
              ? props.children.toString().toLowerCase().replace(/\s+/g, '-')
              : '';
            return <h5 id={id} {...props} />;
          },
          h6: ({ node, ...props }) => {
            const id = props.children
              ? props.children.toString().toLowerCase().replace(/\s+/g, '-')
              : '';
            return <h6 id={id} {...props} />;
          },
          // Style code blocks
          pre: ({ node, ...props }) => (
            <pre className="rounded-lg overflow-hidden" {...props} />
          ),
          // Style inline code
          code: ({ node, inline, ...props }) => (
            inline ? 
              <code className="text-primary bg-muted px-1 py-0.5 rounded text-sm" {...props} /> : 
              <code {...props} />
          ),
          // Style links
          a: ({ node, ...props }) => (
            <a className="text-primary font-medium hover:underline" target="_blank" rel="noreferrer" {...props} />
          ),
          // Style tables
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto">
              <table className="border-collapse border border-border" {...props} />
            </div>
          ),
          // Style images
          img: ({ node, ...props }) => (
            <img className="rounded-lg" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}