"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

/**
 * Pagination Component
 * 
 * Provides navigation between pages of content:
 * - Previous/next page buttons
 * - Numbered page buttons
 * - Current page indicator
 * - Ellipsis for large page ranges
 * 
 * @param currentPage - The current active page
 * @param totalPages - Total number of pages
 * @param baseUrl - Optional base URL for building pagination links
 */
export function Pagination({ currentPage, totalPages, baseUrl = '' }: PaginationProps) {
  const router = useRouter();
  
  // Build the URL for a specific page
  const getPageUrl = (page: number) => {
    const url = new URL(baseUrl || window.location.href, window.location.origin);
    url.searchParams.set('page', page.toString());
    return url.pathname + url.search;
  };
  
  // Handle page navigation
  const navigateToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(getPageUrl(page));
  };
  
  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages <= 7) {
      // Show all pages if there are 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      if (currentPage > 3) {
        // Show ellipsis if current page is far from start
        pageNumbers.push(-1); // -1 represents ellipsis
      }
      
      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        // Show ellipsis if current page is far from end
        pageNumbers.push(-2); // -2 represents second ellipsis
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  return (
    <nav className="flex justify-center">
      <ul className="flex items-center gap-1">
        <li>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </li>
        
        {getPageNumbers().map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === -1 || pageNumber === -2 ? (
              <Button variant="ghost" size="icon" disabled>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant={currentPage === pageNumber ? "default" : "outline"}
                onClick={() => navigateToPage(pageNumber)}
                aria-current={currentPage === pageNumber ? "page" : undefined}
                aria-label={`Page ${pageNumber}`}
              >
                {pageNumber}
              </Button>
            )}
          </li>
        ))}
        
        <li>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}