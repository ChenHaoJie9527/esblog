# Blog Page Documentation

## Features

<!-- en -->
- **Search**: Users can search for posts by title or content
- **Category Filtering**: Users can filter posts by category
- **Pagination**: Posts are divided into pages for easier navigation
<!-- end -->

<!-- cn -->
- **搜索**：用户可以通过标题或内容搜索文章
- **分类筛选**：用户可以按类别筛选文章
- **分页**：文章被分成多个页面，便于导航
<!-- end -->

## Components

<!-- en -->
- **SearchBar**: Allows users to search for specific posts
- **PostList**: Displays a grid of post cards
- **CategoryFilter**: Displays a list of categories for filtering
- **Pagination**: Provides navigation between pages of posts
- **PostListSkeleton**: Displays a loading state while posts are being fetched
<!-- end -->

<!-- cn -->
- **SearchBar**：允许用户搜索特定文章
- **PostList**：显示文章卡片网格
- **CategoryFilter**：显示用于筛选的类别列表
- **Pagination**：提供文章页面之间的导航功能
- **PostListSkeleton**：在文章加载时显示加载状态
<!-- end -->

## URL Parameters

<!-- en -->
The page accepts several URL parameters:
- `page`: Current page number (default: 1)
- `category`: Filter posts by category
- `search`: Filter posts by search term
<!-- end -->

<!-- cn -->
该页面接受几个URL参数：
- `page`：当前页码（默认：1）
- `category`：按类别筛选文章
- `search`：按搜索词筛选文章
<!-- end -->

## Data Handling

<!-- en -->
1. Fetches all posts and categories using the respective utility functions
2. Filters posts based on search term and category
3. Paginates the filtered posts
4. Displays the appropriate posts for the current page
<!-- end -->

<!-- cn -->
1. 使用相应的实用函数获取所有文章和类别
2. 根据搜索词和类别筛选文章
3. 对筛选后的文章进行分页
4. 显示当前页面的相应文章
<!-- end -->

## Responsive Design

<!-- en -->
- On mobile: Full-width layout with stacked components
- On tablet/desktop: Two-column layout with posts on the left and filters on the right
- The category filter is sticky on desktop for easier navigation
<!-- end -->

<!-- cn -->
- 移动端：全宽布局，组件堆叠
- 平板/桌面端：两列布局，左侧为文章，右侧为筛选器
- 在桌面端，分类筛选器是粘性的，便于导航
<!-- end -->