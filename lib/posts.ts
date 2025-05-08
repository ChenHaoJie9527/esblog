import { PostType } from './types';

/**
 * Mock posts data
 * In a real application, this would be fetched from an API or database
 */
const mockPosts: PostType[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js and TypeScript',
    slug: 'getting-started-with-nextjs-and-typescript',
    excerpt: 'Learn how to set up a new Next.js project with TypeScript and start building modern web applications.',
    content: '# Getting Started with Next.js and TypeScript\n\nNext.js is a popular React framework that enables functionality such as server-side rendering, static site generation, and more...',
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    publishedAt: '2023-10-25T09:00:00Z',
    featured: true,
    readingTime: 8,
    categories: ['Web Development', 'React'],
    tags: ['nextjs', 'typescript', 'react', 'tutorial'],
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS: Tips and Tricks',
    slug: 'mastering-tailwind-css-tips-and-tricks',
    excerpt: 'Dive deep into Tailwind CSS and discover advanced techniques to improve your styling workflow.',
    content: '# Mastering Tailwind CSS: Tips and Tricks\n\nTailwind CSS has revolutionized how developers style their applications by providing a utility-first approach...',
    coverImage: 'https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-macbook-laptop-on-desk-with-code-on-screen.jpeg',
    publishedAt: '2023-10-18T10:30:00Z',
    featured: false,
    readingTime: 6,
    categories: ['CSS', 'Web Development'],
    tags: ['tailwindcss', 'css', 'webdesign', 'frontend'],
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
  },
  {
    id: '3',
    title: 'Building a Blog with Next.js and Markdown',
    slug: 'building-a-blog-with-nextjs-and-markdown',
    excerpt: 'Create a modern blog using Next.js, Markdown, and static site generation for optimal performance.',
    content: '# Building a Blog with Next.js and Markdown\n\nCreating a blog with Next.js and Markdown is a powerful combination that allows for...',
    coverImage: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg',
    publishedAt: '2023-10-12T14:15:00Z',
    featured: true,
    readingTime: 10,
    categories: ['Web Development', 'Next.js'],
    tags: ['blog', 'markdown', 'nextjs', 'ssg'],
    author: {
      name: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
  },
  {
    id: '4',
    title: 'Understanding React Server Components',
    slug: 'understanding-react-server-components',
    excerpt: 'Explore the new React Server Components paradigm and how it changes application architecture.',
    content: '# Understanding React Server Components\n\nReact Server Components represent a new way to build React applications that...',
    coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    publishedAt: '2023-10-05T08:45:00Z',
    featured: false,
    readingTime: 12,
    categories: ['React', 'Web Development'],
    tags: ['react', 'servercomponents', 'javascript', 'frontend'],
    author: {
      name: 'Alex Turner',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
  },
  {
    id: '5',
    title: 'State Management in 2023: Beyond Redux',
    slug: 'state-management-in-2023-beyond-redux',
    excerpt: 'Discover modern state management solutions for React applications and when to use each approach.',
    content: '# State Management in 2023: Beyond Redux\n\nState management has evolved significantly in the React ecosystem, with many alternatives to Redux now available...',
    coverImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    publishedAt: '2023-09-28T11:20:00Z',
    featured: true,
    readingTime: 9,
    categories: ['React', 'JavaScript'],
    tags: ['statemanagement', 'redux', 'reacthooks', 'context'],
    author: {
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
  },
  {
    id: '6',
    title: 'Creating Accessible Web Applications',
    slug: 'creating-accessible-web-applications',
    excerpt: 'Learn the principles of web accessibility and how to implement them in your next project.',
    content: '# Creating Accessible Web Applications\n\nAccessibility is a critical aspect of web development that ensures all users, including those with disabilities...',
    coverImage: 'https://images.pexels.com/photos/7439147/pexels-photo-7439147.jpeg',
    publishedAt: '2023-09-20T09:10:00Z',
    featured: false,
    readingTime: 7,
    categories: ['Accessibility', 'Web Development'],
    tags: ['a11y', 'accessibility', 'inclusive', 'design'],
    author: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
  },
  {
    id: '7',
    title: 'TypeScript Tips for React Developers',
    slug: 'typescript-tips-for-react-developers',
    excerpt: 'Level up your React development with these TypeScript best practices and advanced techniques.',
    content: '# TypeScript Tips for React Developers\n\nUsing TypeScript with React can dramatically improve your development experience and code quality...',
    coverImage: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
    publishedAt: '2023-09-15T13:30:00Z',
    featured: false,
    readingTime: 8,
    categories: ['TypeScript', 'React'],
    tags: ['typescript', 'react', 'javascript', 'development'],
    author: {
      name: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
  },
  {
    id: '8',
    title: 'Building a Design System with Tailwind and React',
    slug: 'building-a-design-system-with-tailwind-and-react',
    excerpt: 'Create a scalable and consistent design system using Tailwind CSS and React components.',
    content: '# Building a Design System with Tailwind and React\n\nA well-structured design system can significantly improve development speed and consistency across your applications...',
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    publishedAt: '2023-09-08T10:45:00Z',
    featured: false,
    readingTime: 11,
    categories: ['Design Systems', 'React'],
    tags: ['designsystem', 'tailwindcss', 'react', 'components'],
    author: {
      name: 'Alex Turner',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
  },
];

/**
 * Get all blog posts
 * 
 * @returns Array of blog posts sorted by publication date (newest first)
 */
export async function getPosts(): Promise<PostType[]> {
  // In a real application, this would fetch from an API or database
  // Simulating async behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockPosts].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ));
    }, 300);
  });
}

/**
 * Get a specific blog post by its slug
 * 
 * @param slug - The unique slug identifier for the post
 * @returns The post object if found, undefined otherwise
 */
export async function getPostBySlug(slug: string): Promise<PostType | undefined> {
  // In a real application, this would fetch from an API or database
  // Simulating async behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPosts.find(post => post.slug === slug));
    }, 300);
  });
}

/**
 * Get related posts based on categories and tags
 * 
 * @param post - The current post to find related content for
 * @param limit - Maximum number of related posts to return
 * @returns Array of related posts
 */
export async function getRelatedPosts(post: PostType, limit: number = 3): Promise<PostType[]> {
  const allPosts = await getPosts();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(p => p.id !== post.id);
  
  // Calculate relevance score based on shared categories and tags
  const postsWithScore = otherPosts.map(p => {
    const sharedCategories = p.categories.filter(cat => post.categories.includes(cat)).length;
    const sharedTags = p.tags.filter(tag => post.tags.includes(tag)).length;
    const score = (sharedCategories * 2) + sharedTags; // Categories weighted more heavily
    return { ...p, score };
  });
  
  // Sort by relevance score and then by date if scores are equal
  postsWithScore.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
  
  // Return the most relevant posts up to the limit
  return postsWithScore.slice(0, limit);
}

/**
 * Get featured posts
 * 
 * @param limit - Maximum number of featured posts to return
 * @returns Array of featured posts
 */
export async function getFeaturedPosts(limit: number = 3): Promise<PostType[]> {
  const allPosts = await getPosts();
  return allPosts.filter(post => post.featured).slice(0, limit);
}

/**
 * Search posts by query
 * 
 * @param query - The search term to look for in post titles and content
 * @returns Array of matching posts
 */
export async function searchPosts(query: string): Promise<PostType[]> {
  const allPosts = await getPosts();
  
  if (!query || query.trim() === '') {
    return allPosts;
  }
  
  const lowerCaseQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowerCaseQuery) ||
    post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
    post.content.toLowerCase().includes(lowerCaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
    post.categories.some(category => category.toLowerCase().includes(lowerCaseQuery))
  );
}