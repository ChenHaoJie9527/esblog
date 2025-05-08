import { FeaturedPosts } from '@/components/blog/FeaturedPosts';
import { RecentPosts } from '@/components/blog/RecentPosts';
import { HeroSection } from '@/components/home/HeroSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { getPosts } from '@/lib/posts';

/**
 * Home Page Component
 * 
 * The main landing page of the blog, featuring:
 * - Hero section with a welcome message
 * - Featured posts section showing pinned/important posts
 * - Recent posts section showing the latest posts
 * - Newsletter signup section
 */
export default async function Home() {
  const posts = await getPosts();
  
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);
  const recentPosts = posts.slice(0, 6);
  
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <HeroSection />
      
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Featured Posts</h2>
        <FeaturedPosts posts={featuredPosts} />
      </section>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
        <RecentPosts posts={recentPosts} />
      </section>
      
      <NewsletterSection />
    </div>
  );
}