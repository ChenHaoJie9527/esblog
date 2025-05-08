import { render, screen, fireEvent } from '@testing-library/react';
import { useTheme } from 'next-themes';
import { ThemeToggle } from './theme-toggle';

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle Component', () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    // Default mock implementation
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });
  });

  it('renders the theme toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByLabelText('Toggle theme')).toBeInTheDocument();
  });

  it('opens the dropdown menu when clicked', () => {
    render(<ThemeToggle />);
    
    // Click the theme toggle button
    const toggleButton = screen.getByLabelText('Toggle theme');
    fireEvent.click(toggleButton);
    
    // Dropdown should be visible
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
  });

  it('sets theme to light when light option is clicked', () => {
    render(<ThemeToggle />);
    
    // Open dropdown
    const toggleButton = screen.getByLabelText('Toggle theme');
    fireEvent.click(toggleButton);
    
    // Click light option
    const lightOption = screen.getByText('Light');
    fireEvent.click(lightOption);
    
    // Should call setTheme with 'light'
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('sets theme to dark when dark option is clicked', () => {
    render(<ThemeToggle />);
    
    // Open dropdown
    const toggleButton = screen.getByLabelText('Toggle theme');
    fireEvent.click(toggleButton);
    
    // Click dark option
    const darkOption = screen.getByText('Dark');
    fireEvent.click(darkOption);
    
    // Should call setTheme with 'dark'
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('sets theme to system when system option is clicked', () => {
    render(<ThemeToggle />);
    
    // Open dropdown
    const toggleButton = screen.getByLabelText('Toggle theme');
    fireEvent.click(toggleButton);
    
    // Click system option
    const systemOption = screen.getByText('System');
    fireEvent.click(systemOption);
    
    // Should call setTheme with 'system'
    expect(mockSetTheme).toHaveBeenCalledWith('system');
  });

  it('displays the correct icon based on the current theme', () => {
    // Test with light theme
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });
    
    const { rerender } = render(<ThemeToggle />);
    
    // Sun icon should be visible, Moon icon should be hidden
    const sunIcon = screen.getByLabelText('Toggle theme').querySelector('.rotate-0');
    const moonIcon = screen.getByLabelText('Toggle theme').querySelector('.rotate-90');
    
    expect(sunIcon).toHaveClass('scale-100');
    expect(moonIcon).toHaveClass('scale-0');
    
    // Test with dark theme
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
    });
    
    rerender(<ThemeToggle />);
    
    // Moon icon should be visible, Sun icon should be hidden
    // Note: Since we're rerendering the component, we need to re-query the DOM
    const sunIconDark = screen.getByLabelText('Toggle theme').querySelector('.rotate-0');
    const moonIconDark = screen.getByLabelText('Toggle theme').querySelector('.rotate-90');
    
    expect(sunIconDark).toHaveClass('dark:scale-0');
    expect(moonIconDark).toHaveClass('dark:scale-100');
  });
});