import { Suspense } from 'react';
import { Metadata } from 'next';
import { PostList } from '@/components/blog/PostList';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { Pagination } from '@/components/blog/Pagination';
import { SearchBar } from '@/components/blog/SearchBar';
import { Skeleton } from '@/components/ui/skeleton';
import { getPosts } from '@/lib/posts';
import { getCategories } from '@/lib/categories';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore all blog posts on various topics',
};

// 如果页面需要是动态渲染的，可以取消注释以下行
// export const dynamic = 'force-dynamic';

/**
 * BlogPage Component
 * 
 * Lists all blog posts with filtering and pagination capabilities:
 * - Search functionality to find specific posts
 * - Category filtering to view posts by topic
 * - Pagination to navigate through all posts
 * 
 * @param searchParams - URL search parameters for filtering and pagination
 */
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // 在Next.js 15中，需要await searchParams
  const params =  searchParams;
  
  const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
  const category = typeof params.category === 'string' ? params.category : undefined;
  const search = typeof params.search === 'string' ? params.search : undefined;
  
  const posts = await getPosts();
  const categories = await getCategories();
  
  // Filter posts based on search and category
  let filteredPosts = posts;
  
  if (search) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (category) {
    filteredPosts = filteredPosts.filter(post => 
      post.categories.includes(category)
    );
  }
  
  // Pagination
  const postsPerPage = 9;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);
  
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Explore all my posts on various topics including technology, programming, and design.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/4 space-y-8">
          <SearchBar initialValue={search} />
          
          <Suspense fallback={<PostListSkeleton />}>
            <PostList posts={paginatedPosts} />
            
            {totalPages > 1 && (
              <Pagination currentPage={page} totalPages={totalPages} />
            )}
          </Suspense>
        </div>
        
        <div className="w-full md:w-1/4">
          <div className="sticky top-8 space-y-6">
            <CategoryFilter 
              categories={categories} 
              activeCategory={category} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PostListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-40 w-full rounded-md" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}