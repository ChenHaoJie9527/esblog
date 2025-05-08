import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Header from './Header';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Mock next/link to use a regular anchor in tests
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Header Component', () => {
  beforeEach(() => {
    // Mock the pathname to be the homepage by default
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('renders the site title', () => {
    render(<Header />);
    expect(screen.getByText('My Blog')).toBeInTheDocument();
  });

  it('displays all navigation items', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('shows mobile menu when menu button is clicked', () => {
    render(<Header />);
    
    // Mobile menu should be hidden initially
    expect(screen.getByText('Home')).toBeInTheDocument();
    
    // Click the menu button
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    
    // Menu should now be visible
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('highlights the current page in the navigation', () => {
    // Mock the pathname to be the blog page
    (usePathname as jest.Mock).mockReturnValue('/blog');
    
    render(<Header />);
    
    // Get all navigation buttons
    const navItems = screen.getAllByRole('link', { name: /Home|Blog|About/i });
    
    // The Blog link should have the active class
    const blogLink = navItems.find(item => item.textContent === 'Blog');
    expect(blogLink?.closest('a')).toHaveClass('bg-accent');
  });

  it('closes the mobile menu when a navigation item is clicked', () => {
    render(<Header />);
    
    // Open the mobile menu
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    
    // Click a navigation item
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    
    // Menu should be closed
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
  });
});