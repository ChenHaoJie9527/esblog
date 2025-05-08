# 个人博客项目

基于Next.js 15和React 19构建的现代个人博客网站，采用App Router架构，使用shadcn/ui组件库和Tailwind CSS进行样式设计。

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 运行测试
pnpm test
```

## 项目目录结构

```
/next-blog/                      # 项目根目录
├── .next/                       # Next.js构建输出目录（自动生成）
├── app/                         # Next.js 应用目录（App Router）
│   ├── about/                   # 关于页面
│   ├── blog/                    # 博客页面
│   │   └── page.tsx             # 博客列表页面组件，包含搜索、分类、分页功能
│   ├── search/                  # 搜索页面
│   ├── layout.tsx               # 根布局组件，定义整体页面结构
│   ├── page.tsx                 # 首页组件
│   ├── page.md                  # 首页Markdown内容
│   ├── globals.css              # 全局CSS样式
│   └── providers.tsx            # 提供主题上下文的客户端组件
│
├── components/                  # 可复用组件
│   ├── about/                   # 关于页面相关组件
│   ├── blog/                    # 博客相关组件
│   │   ├── CategoryFilter.tsx   # 博客分类筛选组件
│   │   ├── Pagination.tsx       # 分页导航组件
│   │   ├── PostList.tsx         # 博客文章列表组件
│   │   └── SearchBar.tsx        # 搜索栏组件
│   ├── home/                    # 首页相关组件
│   ├── layout/                  # 布局相关组件
│   │   ├── Header.tsx           # 页面头部组件
│   │   └── Footer.tsx           # 页面底部组件
│   ├── theme/                   # 主题相关组件
│   │   └── theme-provider.tsx   # 主题提供者组件，处理暗/亮模式切换
│   └── ui/                      # 基础UI组件（基于shadcn/ui）
│       ├── button.tsx           # 按钮组件
│       ├── skeleton.tsx         # 骨架屏组件
│       ├── toaster.tsx          # 消息提示组件
│       └── ...                  # 其他UI组件
│
├── hooks/                       # 自定义React Hooks
│
├── lib/                         # 工具函数和数据
│   ├── authors.ts               # 作者数据
│   ├── categories.ts            # 分类数据
│   ├── posts.ts                 # 博客文章数据
│   ├── site.ts                  # 网站配置数据
│   ├── types.ts                 # TypeScript类型定义
│   └── utils.ts                 # 通用工具函数
│
├── public/                      # 静态资源文件夹
│   ├── images/                  # 图片资源
│   ├── fonts/                   # 字体资源
│   └── ...                      # 其他静态资源
│
├── .eslintrc.json               # ESLint配置
├── .gitignore                   # Git忽略文件
├── .npmrc                       # npm/pnpm配置
├── components.json              # shadcn/ui组件配置
├── jest.config.js               # Jest测试配置
├── jest.setup.js                # Jest测试环境设置
├── next.config.js               # Next.js配置文件
├── package.json                 # 项目依赖和脚本
├── postcss.config.js            # PostCSS配置
├── tailwind.config.ts           # Tailwind CSS配置
└── tsconfig.json                # TypeScript配置
```

## 主要技术栈

- **框架**: Next.js 15.3.2 (App Router)
- **UI库**: shadcn/ui (基于Radix UI和Tailwind CSS)
- **语言**: TypeScript, React 19.1.0
- **样式**: Tailwind CSS 3.3.3
- **数据**: 本地数据源 (lib目录下的TS文件)
- **测试**: Jest
- **状态管理**: React Hooks
- **表单处理**: react-hook-form、zod

## 关键功能模块

### 1. 博客系统
- 文章列表展示 (/blog)
- 分类筛选功能
- 搜索功能
- 分页功能

### 2. 主题系统
- 支持亮色/暗色模式
- 系统主题跟随功能

### 3. 布局系统
- 响应式设计
- 可复用的页头和页脚
- 嵌套布局结构

## 注意事项

### 关于 searchParams

在Next.js 15中，当使用`searchParams`时需要格外注意：

```typescript
// 错误的方式
const params = searchParams;
const page = typeof params.page === 'string' ? parseInt(params.page) : 1;

// 正确的方式
const params = await searchParams;
// 或者使用 dynamic = 'force-dynamic'
const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
```

最简单的解决方案是添加`export const dynamic = 'force-dynamic'`在页面文件中。

## 贡献

欢迎贡献代码或提出建议！请先fork本项目，然后提交pull request。

## 许可证

MIT 