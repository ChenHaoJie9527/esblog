import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SocialLinks } from '@/components/about/SocialLinks';
import { getSiteData } from '@/lib/site';

/**
 * Footer Component
 * 
 * The site footer containing:
 * - Copyright information
 * - Navigation links
 * - Social media links
 * - Newsletter signup
 */
export default async function Footer() {
  const siteData = await getSiteData();
  
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Site Information */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              {siteData.title}
            </Link>
            <p className="text-muted-foreground">
              {siteData.description}
            </p>
            <SocialLinks links={siteData.socialLinks} />
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/blog">Blog</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="/about">About</Link>
                </Button>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">
              Categories
            </h3>
            <ul className="space-y-2">
              {siteData.categories.map((category) => (
                <li key={category.slug}>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/blog?category=${category.slug}`}>
                      {category.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteData.title}. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="link" className="p-0 h-auto text-sm" asChild>
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button variant="link" className="p-0 h-auto text-sm" asChild>
              <Link href="/terms">Terms of Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}