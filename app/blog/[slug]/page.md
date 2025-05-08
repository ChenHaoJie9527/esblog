# Blog Post Page Documentation

This page displays a single blog post with full content and additional features for reader engagement.

## Features

- **Rich Content Display**: Renders markdown content with proper formatting
- **Table of Contents**: Automatically generated from headings in the content
- **Author Information**: Shows author details and post metadata
- **Social Sharing**: Allows readers to share the post on social media
- **Related Posts**: Suggests similar posts based on categories and tags
- **Comments Section**: Enables readers to engage with the content

## Components

- **MarkdownContent**: Renders the post content with proper formatting
- **TableOfContents**: Shows a navigation sidebar for the post
- **ShareButtons**: Provides social media sharing options
- **RelatedPosts**: Displays a list of related blog posts
- **CommentSection**: Shows and handles comments on the post

## Data Fetching

- Retrieves post data using the `getPostBySlug` function
- Fetches related posts using the `getRelatedPosts` function
- Generates metadata for SEO based on the post content

## URL Parameters

- `slug`: The unique identifier for the blog post

## SEO Optimization

The page implements comprehensive SEO metadata including:
- Title and description from the post
- Open Graph tags for social media sharing
- Twitter card data
- Author and publication date information

## Error Handling

If a post with the requested slug doesn't exist, the page will redirect to a 404 Not Found page.