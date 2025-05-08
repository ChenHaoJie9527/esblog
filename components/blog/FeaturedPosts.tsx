import { PostCard } from './PostCard';
import { PostType } from '@/lib/types';

interface FeaturedPostsProps {
  posts: PostType[];
}

/**
 * FeaturedPosts Component
 * 
 * Displays important or pinned blog posts in a prominent way:
 * - Shows posts in a grid layout
 * - Uses the featured variant of PostCard
 * - Handles different post quantities gracefully
 * 
 * @param posts - Array of featured post objects
 */
export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (!posts.length) {
    return null;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} variant="featured" />
      ))}
    </div>
  );
}