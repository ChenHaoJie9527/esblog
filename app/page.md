# Home

<!-- en -->
This is the main landing page for the blog website. It serves as an entry point for visitors, showcasing the most important content.

## Components

- **HeroSection**: The welcome section at the top of the page introducing the blog and its purpose
- **FeaturedPosts**: A section showcasing pinned or important blog posts (max 3)
- **RecentPosts**: A section displaying the latest blog posts (max 6)
- **NewsletterSection**: A call-to-action area encouraging visitors to sign up for the blog newsletter
<!-- end -->

<!-- cn -->
这是博客网站的主要登陆页面。它作为访问者的入口点，展示了最重要的内容。

## 组件

- **HeroSection**：页面顶部的欢迎部分，介绍博客及其目的
- **FeaturedPosts**：展示置顶或重要博客文章的部分（最多3篇）
- **RecentPosts**：显示最新博客文章的部分（最多6篇）
- **NewsletterSection**：一个呼吁访问者注册博客通讯的行动号召区域
<!-- end -->

<!-- en -->
## Data Fetching

The page uses the `getPosts` function from the posts library to fetch article data. It then:
1. Filters the posts to find featured posts for the FeaturedPosts section
2. Gets the latest posts for the RecentPosts section
<!-- end -->

<!-- cn -->
## 数据获取

该页面使用posts库中的`getPosts`函数获取文章数据。然后：
1. 筛选文章以找到FeaturedPosts部分的精选文章
2. 获取RecentPosts部分的最新文章
<!-- end -->

<!-- en -->
## Design Considerations

- The page uses a clean, spacious layout with consistent vertical spacing
- Content is organized in a hierarchy with the most important elements (hero area and featured posts) at the top
- Each section has a clear heading for easy navigation
- Components are designed in a modular way, making them easy to rearrange or replace
<!-- end -->

<!-- cn -->
## 设计考虑

- 页面使用干净、宽敞的布局，保持一致的垂直间距
- 内容按层次结构组织，最重要的元素（英雄区域和精选文章）位于顶部
- 每个部分都有清晰的标题，便于导航
- 组件采用模块化设计，可以轻松重新排列或替换
<!-- end --> 