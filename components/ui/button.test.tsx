import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Button className="test-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass('test-class');
  });

  it('applies variant and size correctly', () => {
    render(
      <Button variant="outline" size="lg">
        Styled Button
      </Button>
    );
    const button = screen.getByRole('button', { name: /styled button/i });
    expect(button).toHaveClass('border', 'border-input');
    expect(button).toHaveClass('h-11', 'px-8');
  });
}); 