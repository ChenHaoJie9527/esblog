"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  initialValue?: string;
  placeholder?: string;
}

/**
 * SearchBar Component
 * 
 * Provides search functionality for blog posts:
 * - Input field for search terms
 * - Clear button to reset search
 * - Submit button to initiate search
 * 
 * @param initialValue - Initial search term
 * @param placeholder - Placeholder text for the input
 */
export function SearchBar({ initialValue = '', placeholder = 'Search posts...' }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentUrl = new URL(window.location.href);
    
    if (searchTerm.trim()) {
      currentUrl.searchParams.set('search', searchTerm.trim());
    } else {
      currentUrl.searchParams.delete('search');
    }
    
    // Reset to page 1 when searching
    currentUrl.searchParams.delete('page');
    
    router.push(currentUrl.pathname + currentUrl.search);
  };
  
  const handleClear = () => {
    setSearchTerm('');
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('search');
    router.push(currentUrl.pathname + currentUrl.search);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          className="pl-10 pr-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}