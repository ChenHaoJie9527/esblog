import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect, vi } from 'vitest';

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  }
}));

// Mock the site data function
vi.mock('@/lib/site', () => ({
  getSiteData: vi.fn(() => ({
    title: 'My Blog',
    description: 'A personal blog about technology and programming',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/username' },
      { platform: 'github', url: 'https://github.com/username' }
    ],
    categories: [
      { name: 'Technology', slug: 'technology' },
      { name: 'Programming', slug: 'programming' }
    ]
  }))
}));

// Mock the SocialLinks component
vi.mock('@/components/about/SocialLinks', () => ({
  SocialLinks: () => <div data-testid="social-links" />
}));

describe('Footer Component', () => {
  it('renders the site title and description', async () => {
    render(await Footer());
    expect(screen.getByText('My Blog')).toBeInTheDocument();
    expect(screen.getByText('A personal blog about technology and programming')).toBeInTheDocument();
  });

  it('displays navigation links', async () => {
    render(await Footer());
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('displays category links', async () => {
    render(await Footer());
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Technology' })).toHaveAttribute('href', '/blog?category=technology');
    expect(screen.getByRole('link', { name: 'Programming' })).toHaveAttribute('href', '/blog?category=programming');
  });

  it('includes social links component', async () => {
    render(await Footer());
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });

  it('displays copyright information with current year', async () => {
    const currentYear = new Date().getFullYear();
    render(await Footer());
    expect(screen.getByText(`© ${currentYear} My Blog. All rights reserved.`)).toBeInTheDocument();
  });

  it('includes links to privacy policy and terms of service', async () => {
    render(await Footer());
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute('href', '/terms');
  });
});