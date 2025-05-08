import { SiteType } from './types';

/**
 * Mock site data
 * In a real application, this would be stored in a database or CMS
 */
const mockSiteData: SiteType = {
  title: 'My Personal Blog',
  description: 'A blog about web development, programming, and technology.',
  url: 'https://myblog.example.com',
  author: 'John Doe',
  logo: '/logo.svg',
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/johndoe',
      icon: 'Github',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/johndoe',
      icon: 'Twitter',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/johndoe',
      icon: 'Linkedin',
    },
  ],
  categories: [
    {
      name: 'Web Development',
      slug: 'web-development',
      description: 'Articles about frontend and backend web development',
    },
    {
      name: 'React',
      slug: 'react',
      description: 'Tutorials and tips for React development',
    },
    {
      name: 'JavaScript',
      slug: 'javascript',
      description: 'Everything related to JavaScript language and ecosystem',
    },
    {
      name: 'CSS',
      slug: 'css',
      description: 'Styling, animations, and design using CSS',
    },
    {
      name: 'TypeScript',
      slug: 'typescript',
      description: 'Type-safe JavaScript development',
    },
  ],
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Search', href: '/search' },
  ],
};

/**
 * Get site metadata and configuration
 * 
 * @returns Site information including title, description, and navigation
 */
export async function getSiteData(): Promise<SiteType> {
  // In a real application, this would fetch from a CMS or config file
  // Simulating async behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSiteData);
    }, 300);
  });
}