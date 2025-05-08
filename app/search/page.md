# Search Page Documentation

## Features

<!-- en -->
- **Search Input**: Form for entering search terms
- **Results Display**: Shows matching blog posts
- **Category Filtering**: Tabs to filter results by content category
- **Pagination**: Navigation for browsing through large result sets
- **No Results Handling**: Clear messaging when no content matches the search
<!-- end -->

<!-- cn -->
- **搜索输入**：用于输入搜索词的表单
- **结果显示**：显示匹配的博客文章
- **分类筛选**：通过标签过滤结果
- **分页**：浏览大量结果集的导航
- **无结果处理**：当没有内容匹配搜索时提供清晰的信息
<!-- end -->

## Components

<!-- en -->
- **PostList**: Displays a grid of matching blog posts
- **Pagination**: Provides navigation between pages of search results
- **Tabs**: Allows filtering results by category
<!-- end -->

<!-- cn -->
- **PostList**：显示匹配的博客文章网格
- **Pagination**：提供搜索结果页面之间的导航
- **Tabs**：允许按类别过滤结果
<!-- end -->

## URL Parameters

<!-- en -->
The page accepts several URL parameters:
- `q`: The search query (required)
- `page`: Current page number for pagination (default: 1)
<!-- end -->

<!-- cn -->
页面接受几个URL参数：
- `q`：搜索查询（必填）
- `page`：分页的当前页码（默认：1）
<!-- end -->

## Data Handling

<!-- en -->
1. Retrieves the search query from URL parameters
2. Searches post content using the `searchPosts` function
3. Filters results based on selected category tab (if any)
4. Paginates the filtered results
5. Updates the URL when a new search is performed
<!-- end -->

<!-- cn -->
1. 从URL参数中获取搜索查询
2. 使用`searchPosts`函数搜索文章内容
3. 基于选定的类别标签筛选结果（如果有）
4. 对筛选后的结果进行分页
5. 执行新搜索时更新URL
<!-- end -->

## Search Algorithm

<!-- en -->
The search functionality looks for matches in:
- Post titles
- Post excerpts
- Post content (including body text)
- Post tags
- Post categories

Results are displayed in order of relevance, with title matches given higher priority.
<!-- end -->

<!-- cn -->
搜索功能查找以下匹配项：
- 文章标题
- 文章摘要
- 文章内容（包括正文）
- 文章标签
- 文章类别

结果按相关性顺序显示，标题匹配项被赋予更高优先级。
<!-- end -->