import { PostCard } from './PostCard';
import { PostType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RecentPostsProps {
  posts: PostType[];
}

/**
 * RecentPosts Component
 * 
 * Displays a grid of the most recent blog posts:
 * - Shows posts in a responsive grid layout
 * - Includes a link to view all posts
 * 
 * @param posts - Array of recent post objects
 */
export function RecentPosts({ posts }: RecentPostsProps) {
  if (!posts.length) {
    return null;
  }
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" asChild>
          <Link href="/blog" className="group">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}