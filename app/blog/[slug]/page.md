# Blog Post Page Documentation

## Features

<!-- en -->
- **Rich Content Display**: Renders markdown content with proper formatting
- **Table of Contents**: Automatically generated from headings in the content
- **Author Information**: Shows author details and post metadata
- **Social Sharing**: Allows readers to share the post on social media
- **Related Posts**: Suggests similar posts based on categories and tags
- **Comments Section**: Enables readers to engage with the content
<!-- end -->

<!-- cn -->
- **丰富内容显示**：以适当的格式呈现markdown内容
- **目录**：从内容中的标题自动生成
- **作者信息**：显示作者详细信息和文章元数据
- **社交分享**：允许读者在社交媒体上分享文章
- **相关文章**：根据分类和标签推荐类似文章
- **评论区**：使读者能够与内容互动
<!-- end -->

## Components

<!-- en -->
- **MarkdownContent**: Renders the post content with proper formatting
- **TableOfContents**: Shows a navigation sidebar for the post
- **ShareButtons**: Provides social media sharing options
- **RelatedPosts**: Displays a list of related blog posts
- **CommentSection**: Shows and handles comments on the post
<!-- end -->

<!-- cn -->
- **MarkdownContent**：以适当的格式呈现文章内容
- **TableOfContents**：显示文章的导航侧边栏
- **ShareButtons**：提供社交媒体分享选项
- **RelatedPosts**：显示相关博客文章列表
- **CommentSection**：显示并处理文章评论
<!-- end -->

## Data Fetching

<!-- en -->
- Retrieves post data using the `getPostBySlug` function
- Fetches related posts using the `getRelatedPosts` function
- Generates metadata for SEO based on the post content
<!-- end -->

<!-- cn -->
- 使用`getPostBySlug`函数检索文章数据
- 使用`getRelatedPosts`函数获取相关文章
- 基于文章内容生成SEO元数据
<!-- end -->

## URL Parameters

<!-- en -->
- `slug`: The unique identifier for the blog post
<!-- end -->

<!-- cn -->
- `slug`：博客文章的唯一标识符
<!-- end -->

## SEO Optimization

<!-- en -->
The page implements comprehensive SEO metadata including:
- Title and description from the post
- Open Graph tags for social media sharing
- Twitter card data
- Author and publication date information
<!-- end -->

<!-- cn -->
页面实现了全面的SEO元数据，包括：
- 来自文章的标题和描述
- 用于社交媒体共享的Open Graph标签
- Twitter卡片数据
- 作者和发布日期信息
<!-- end -->

## Error Handling

<!-- en -->
If a post with the requested slug doesn't exist, the page will redirect to a 404 Not Found page.
<!-- end -->

<!-- cn -->
如果请求的slug对应的文章不存在，页面将重定向到404未找到页面。
<!-- end -->