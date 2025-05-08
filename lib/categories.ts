import { CategoryType } from './types';
import { getPosts } from './posts';

/**
 * Get all blog categories with post counts
 * 
 * @returns Array of categories with post counts
 */
export async function getCategories(): Promise<CategoryType[]> {
  const posts = await getPosts();
  
  // Extract all unique categories from posts
  const categoryCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    post.categories.forEach(category => {
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    });
  });
  
  // Convert to array of category objects
  const categories: CategoryType[] = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count,
  }));
  
  // Sort by post count (descending)
  return categories.sort((a, b) => (b.count || 0) - (a.count || 0));
}

/**
 * Get posts by category
 * 
 * @param categorySlug - The slug of the category to filter by
 * @returns Array of posts in the specified category
 */
export async function getPostsByCategory(categorySlug: string): Promise<any[]> {
  const posts = await getPosts();
  const categories = await getCategories();
  
  // Find the category name from the slug
  const category = categories.find(cat => cat.slug === categorySlug);
  
  if (!category) {
    return [];
  }
  
  // Filter posts by category name
  return posts.filter(post => post.categories.includes(category.name));
}