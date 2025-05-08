import { PostCard } from './PostCard';
import { PostType } from '@/lib/types';

interface PostListProps {
  posts: PostType[];
}

/**
 * PostList Component
 * 
 * Displays a grid of blog posts:
 * - Shows posts in a responsive grid layout
 * - Displays a message when no posts are available
 * 
 * @param posts - Array of post objects to display
 */
export function PostList({ posts }: PostListProps) {
  if (!posts.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No posts found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}