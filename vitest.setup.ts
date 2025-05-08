import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  })),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(() => ({
    get: vi.fn(),
  })),
}));

// Mock next/link to use a regular anchor in tests
vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode; href: string }) => {
      return React.createElement('a', { href }, children);
    }
  };
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;
  
  constructor(
    private callback: IntersectionObserverCallback, 
    options?: IntersectionObserverInit
  ) {
    this.root = options?.root ?? null;
    this.rootMargin = options?.rootMargin ?? '0px';
    this.thresholds = Array.isArray(options?.threshold) 
      ? options.threshold 
      : [options?.threshold ?? 0];
  }
  
  observe(): void {
    // No implementation needed for mock
  }
  
  unobserve(): void {
    // No implementation needed for mock
  }
  
  disconnect(): void {
    // No implementation needed for mock
  }
  
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// @ts-ignore - add to window
window.IntersectionObserver = MockIntersectionObserver as any; 