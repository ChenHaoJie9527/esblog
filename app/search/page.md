# Search Page Documentation

This page provides search functionality for the entire blog, allowing users to find content based on keywords.

## Features

- **Search Input**: Form for entering search terms
- **Results Display**: Shows matching blog posts
- **Category Filtering**: Tabs to filter results by content category
- **Pagination**: Navigation for browsing through large result sets
- **No Results Handling**: Clear messaging when no content matches the search

## Components

- **PostList**: Displays a grid of matching blog posts
- **Pagination**: Provides navigation between pages of search results
- **Tabs**: Allows filtering results by category

## URL Parameters

The page accepts several URL parameters:
- `q`: The search query (required)
- `page`: Current page number for pagination (default: 1)

## Data Handling

1. Retrieves the search query from URL parameters
2. Searches post content using the `searchPosts` function
3. Filters results based on selected category tab (if any)
4. Paginates the filtered results
5. Updates the URL when a new search is performed

## Search Algorithm

The search functionality looks for matches in:
- Post titles
- Post excerpts
- Post content (including body text)
- Post tags
- Post categories

Results are displayed in order of relevance, with title matches given higher priority.