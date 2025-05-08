"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { CategoryType } from '@/lib/types';

interface CategoryFilterProps {
  categories: CategoryType[];
  activeCategory?: string;
}

/**
 * CategoryFilter Component
 * 
 * Allows filtering blog posts by category:
 * - Displays a list of available categories
 * - Shows post count for each category
 * - Highlights the active category
 * - Includes a search filter for categories
 * 
 * @param categories - Array of category objects
 * @param activeCategory - Currently selected category slug
 */
export function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleCategoryClick = (categorySlug: string) => {
    // If already active, clear the filter
    if (categorySlug === activeCategory) {
      router.push(pathname);
    } else {
      router.push(`${pathname}?category=${categorySlug}`);
    }
  };
  
  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search categories..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="space-y-1">
        <Button
          variant={!activeCategory ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => router.push(pathname)}
        >
          All Posts
          <span className="ml-auto text-muted-foreground text-sm">
            {categories.reduce((acc, cat) => acc + (cat.count || 0), 0)}
          </span>
        </Button>
        
        {filteredCategories.map((category) => (
          <Button
            key={category.slug}
            variant={activeCategory === category.slug ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category.name}
            <span className="ml-auto text-muted-foreground text-sm">
              {category.count}
            </span>
          </Button>
        ))}
        
        {filteredCategories.length === 0 && (
          <p className="text-sm text-muted-foreground py-2 px-3">
            No categories match your search.
          </p>
        )}
      </div>
    </div>
  );
}