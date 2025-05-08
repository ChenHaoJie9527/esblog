import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'My Personal Blog',
    template: '%s | My Personal Blog',
  },
  description: 'A personal blog built with Next.js and Tailwind CSS',
  keywords: ['blog', 'nextjs', 'react', 'typescript', 'tailwindcss'],
  authors: [{ name: 'Your Name', url: 'https://yourdomain.com' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'My Personal Blog',
    description: 'A personal blog built with Next.js and Tailwind CSS',
    siteName: 'My Personal Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Personal Blog',
    description: 'A personal blog built with Next.js and Tailwind CSS',
    creator: '@yourusername',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}