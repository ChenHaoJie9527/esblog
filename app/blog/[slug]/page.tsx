import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
// import { ShareButtons } from '@/components/blog/ShareButtons';
// import { TableOfContents } from '@/components/blog/TableOfContents';
import { MarkdownContent } from '@/components/blog/MarkdownContent';
// import { RelatedPosts } from '@/components/blog/RelatedPosts';
// import { CommentSection } from '@/components/blog/CommentSection';
import { getPostBySlug, getRelatedPosts, getPosts } from '@/lib/posts';
import Link from 'next/link';

/**
 * Generate metadata for the blog post page
 * 
 * @param params - Route parameters including the post slug
 * @returns Metadata object with title, description, and other SEO properties
 */
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    keywords: [...post.categories, ...post.tags],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [post.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

/**
 * BlogPostPage Component
 * 
 * Displays a single blog post with:
 * - Cover image
 * - Title and metadata (author, date, etc.)
 * - Table of contents
 * - Markdown content
 * - Sharing options
 * - Related posts
 * - Comments section
 * 
 * @param params - Route parameters including the post slug
 */
export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = await getRelatedPosts(post, 3);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog" className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            <span>Back to all posts</span>
          </Link>
        </Button>
      </div>
      
      <article className="max-w-4xl mx-auto">
        {post.coverImage && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full object-cover"
              priority
            />
          </div>
        )}
        
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map(category => (
              <Badge key={category} variant="secondary">
                <Link href={`/blog?category=${category}`}>{category}</Link>
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
          
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
          
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')} • 
                {post.readingTime} min read
              </div>
            </div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <MarkdownContent content={post.content} />
            
            <div className="mt-8 border-t pt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              
              {/* <ShareButtons post={post} /> */}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="sticky top-8 space-y-8">
              {/* <TableOfContents content={post.content} /> */}
            </div>
          </div>
        </div>
      </article>
      
      <div className="max-w-4xl mx-auto mt-16">
        {/* <RelatedPosts posts={relatedPosts} /> */}
      </div>
      
      <div className="max-w-4xl mx-auto mt-16">
        {/* <CommentSection postSlug={params.slug} /> */}
      </div>
    </div>
  );
}

// 1. 导出 generateStaticParams
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}