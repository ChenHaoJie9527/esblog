import { render, screen } from '@testing-library/react';
import { format } from 'date-fns';
import { PostCard } from './PostCard';
import { PostType } from '@/lib/types';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock next/image
jest.mock('next/image', () => {
  return ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    return <img src={src} alt={alt} className={className} />;
  };
});

// Sample post data for testing
const mockPost: PostType = {
  id: '1',
  title: 'Test Post Title',
  slug: 'test-post',
  excerpt: 'This is a test post excerpt that gives a brief overview of the content.',
  content: 'Full content here',
  coverImage: 'https://example.com/image.jpg',
  publishedAt: '2023-04-01T12:00:00Z',
  featured: false,
  readingTime: 5,
  categories: ['Technology', 'Programming'],
  tags: ['React', 'JavaScript'],
  author: {
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
  }
};

describe('PostCard Component', () => {
  it('renders post title and excerpt', () => {
    render(<PostCard post={mockPost} />);
    
    expect(screen.getByText('Test Post Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test post excerpt that gives a brief overview of the content.')).toBeInTheDocument();
  });

  it('renders post image with correct alt text', () => {
    render(<PostCard post={mockPost} />);
    
    const image = screen.getByAltText('Test Post Title');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('links to the correct blog post URL', () => {
    render(<PostCard post={mockPost} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/test-post');
  });

  it('displays the post category', () => {
    render(<PostCard post={mockPost} />);
    
    expect(screen.getByText('Technology')).toBeInTheDocument();
  });

  it('shows author information', () => {
    render(<PostCard post={mockPost} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    const avatar = screen.getByAltText('John Doe');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('formats and displays the publication date correctly', () => {
    render(<PostCard post={mockPost} />);
    
    const formattedDate = format(new Date('2023-04-01T12:00:00Z'), 'MMM d, yyyy');
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('displays reading time', () => {
    render(<PostCard post={mockPost} />);
    
    expect(screen.getByText('5 min')).toBeInTheDocument();
  });

  it('adds a featured badge when variant is featured', () => {
    render(<PostCard post={mockPost} variant="featured" />);
    
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('uses a different layout for featured posts', () => {
    const { rerender } = render(<PostCard post={mockPost} />);
    
    // Default variant should not have the featured layout class
    const defaultCard = screen.getByRole('link').firstChild;
    expect(defaultCard).not.toHaveClass('md:grid-cols-2');
    
    // Featured variant should have the featured layout class
    rerender(<PostCard post={mockPost} variant="featured" />);
    const featuredCard = screen.getByRole('link').firstChild;
    expect(featuredCard).toHaveClass('md:grid-cols-2');
  });

  it('applies additional class names when provided', () => {
    render(<PostCard post={mockPost} className="test-class" />);
    
    const card = screen.getByRole('article');
    expect(card).toHaveClass('test-class');
  });
});