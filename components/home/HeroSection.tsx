"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * HeroSection Component
 * 
 * A visually appealing welcome section for the homepage:
 * - Displays a catchy headline and description
 * - Includes a call-to-action button
 * - Features subtle animations
 */
export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to mount to avoid hydration issues with animations
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Welcome to My Personal Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Thoughts, stories, and ideas on web development, technology, and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/blog">
                    Explore Blog
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/about">
                    About Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Welcome to My Personal Blog
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Thoughts, stories, and ideas on web development, technology, and design.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button asChild size="lg">
                <Link href="/blog" className="group">
                  Explore Blog
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/about">
                  About Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden border shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl font-bold text-primary/10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Blog
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}