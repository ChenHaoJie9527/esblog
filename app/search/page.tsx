"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PostList } from '@/components/blog/PostList';
import { Pagination } from '@/components/blog/Pagination';
import { searchPosts } from '@/lib/posts';
import { PostType } from '@/lib/types';
import { Search as SearchIcon, Loader2 } from 'lucide-react';

/**
 * SearchPage Component
 * 
 * Provides search functionality for the blog:
 * - Search input with history
 * - Results display
 * - Filters for different content types
 * - No results handling
 */
export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState('all');
  
  // Current page for pagination
  const page = parseInt(searchParams.get('page') || '1', 10);
  const postsPerPage = 9;
  
  // Filter results based on selected tab
  const getFilteredResults = () => {
    if (tab === 'all') return searchResults;
    return searchResults.filter(post => post.categories.some(cat => 
      cat.toLowerCase() === tab.toLowerCase()
    ));
  };
  
  const filteredResults = getFilteredResults();
  
  // Paginate results
  const paginatedResults = filteredResults.slice(
    (page - 1) * postsPerPage, 
    page * postsPerPage
  );
  
  const totalPages = Math.ceil(filteredResults.length / postsPerPage);
  
  // Handle search when query parameter changes
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      
      const fetchSearchResults = async () => {
        try {
          const results = await searchPosts(query);
          setSearchResults(results);
        } catch (error) {
          console.error('Error searching posts:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  // Extract unique categories from search results
  const categories = Array.from(new Set(
    searchResults.flatMap(post => post.categories)
  )).sort();
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Search</h1>
        <p className="text-lg text-muted-foreground">
          Find articles, tutorials, and other content from the blog.
        </p>
      </div>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Search Articles</CardTitle>
          <CardDescription>
            Enter keywords to find relevant content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for articles, topics, or keywords..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </CardContent>
      </Card>
      
      {query && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              Search Results
              {!isLoading && (
                <span className="text-muted-foreground ml-2 text-lg font-normal">
                  ({filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'} for "{query}")
                </span>
              )}
            </h2>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <div className="space-y-6">
                  {categories.length > 1 && (
                    <Tabs value={tab} onValueChange={setTab} className="w-full">
                      <TabsList className="inline-flex w-auto h-auto flex-wrap gap-1 p-1">
                        <TabsTrigger 
                          value="all"
                          className="px-3 py-1.5 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          All ({searchResults.length})
                        </TabsTrigger>
                        {categories.map((category) => {
                          const count = searchResults.filter(post => 
                            post.categories.includes(category)
                          ).length;
                          
                          return (
                            <TabsTrigger 
                              key={category}
                              value={category.toLowerCase()}
                              className="px-3 py-1.5 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                              disabled={count === 0}
                            >
                              {category} ({count})
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>
                      
                      <TabsContent value={tab} className="mt-6">
                        <PostList posts={paginatedResults} />
                        
                        {totalPages > 1 && (
                          <div className="mt-8">
                            <Pagination
                              currentPage={page}
                              totalPages={totalPages}
                              baseUrl={`/search?q=${encodeURIComponent(query)}`}
                            />
                          </div>
                        )}
                      </TabsContent>
                    </Tabs>
                  )}
                  
                  {categories.length <= 1 && (
                    <>
                      <PostList posts={paginatedResults} />
                      
                      {totalPages > 1 && (
                        <div className="mt-8">
                          <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            baseUrl={`/search?q=${encodeURIComponent(query)}`}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <p className="text-xl font-medium mb-2">No results found</p>
                    <p className="text-muted-foreground">
                      Try using different keywords or check your spelling.
                    </p>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}