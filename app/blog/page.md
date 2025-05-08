# Blog Page Documentation

This page displays a comprehensive list of all blog posts with search, filtering, and pagination functionality.

## Features

- **Search**: Users can search for posts by title or content
- **Category Filtering**: Users can filter posts by category
- **Pagination**: Posts are divided into pages for easier navigation

## Components

- **SearchBar**: Allows users to search for specific posts
- **PostList**: Displays a grid of post cards
- **CategoryFilter**: Displays a list of categories for filtering
- **Pagination**: Provides navigation between pages of posts
- **PostListSkeleton**: Displays a loading state while posts are being fetched

## URL Parameters

The page accepts several URL parameters:
- `page`: Current page number (default: 1)
- `category`: Filter posts by category
- `search`: Filter posts by search term

## Data Handling

1. Fetches all posts and categories using the respective utility functions
2. Filters posts based on search term and category
3. Paginates the filtered posts
4. Displays the appropriate posts for the current page

## Responsive Design

- On mobile: Full-width layout with stacked components
- On tablet/desktop: Two-column layout with posts on the left and filters on the right
- The category filter is sticky on desktop for easier navigation