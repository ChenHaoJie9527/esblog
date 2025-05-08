/**
 * Author data structure
 */
export interface AuthorType {
  name: string;
  avatar: string;
  bio?: string;
  headline?: string;
  email?: string;
  resumeUrl?: string;
  profileImage?: string;
  socialLinks?: SocialLinkType[];
  experience?: ExperienceType[];
  skills?: SkillType[];
  education?: EducationType[];
}

/**
 * Blog post data structure
 */
export interface PostType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  featured: boolean;
  readingTime: number;
  categories: string[];
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

/**
 * Category data structure
 */
export interface CategoryType {
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

/**
 * Social media link data structure
 */
export interface SocialLinkType {
  platform: string;
  url: string;
  icon?: string;
}

/**
 * Site data structure
 */
export interface SiteType {
  title: string;
  description: string;
  url: string;
  author: string;
  logo?: string;
  socialLinks: SocialLinkType[];
  categories: CategoryType[];
  navigation: {
    name: string;
    href: string;
  }[];
}

/**
 * Work experience data structure
 */
export interface ExperienceType {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  technologies?: string[];
}

/**
 * Skill data structure
 */
export interface SkillType {
  name: string;
  level: number; // 1-5 or percentage
  category?: string;
}

/**
 * Education data structure
 */
export interface EducationType {
  institution: string;
  degree: string;
  field?: string;
  years: string;
  description?: string;
}

/**
 * Comment data structure
 */
export interface CommentType {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
  parentId?: string;
  postSlug: string;
  replies?: CommentType[];
}