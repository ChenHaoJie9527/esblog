"use client";

import { Button } from '@/components/ui/button';
import { SocialLinkType } from '@/lib/types';
import { Github, Twitter, Linkedin, Instagram, Youtube, Facebook, Mail, Link2 } from 'lucide-react';

interface SocialLinksProps {
  links: SocialLinkType[];
}

/**
 * SocialLinks Component
 * 
 * Displays a collection of social media links:
 * - Icon representation for each platform
 * - Hover effects
 * - Accessibility features
 * 
 * @param links - Array of social media platform links
 */
export function SocialLinks({ links }: SocialLinksProps) {
  if (!links || links.length === 0) {
    return null;
  }
  
  // Map platform names to icons
  const getIconForPlatform = (platform: string) => {
    const iconSize = { size: 18 };
    
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github {...iconSize} />;
      case 'twitter':
      case 'x':
        return <Twitter {...iconSize} />;
      case 'linkedin':
        return <Linkedin {...iconSize} />;
      case 'instagram':
        return <Instagram {...iconSize} />;
      case 'youtube':
        return <Youtube {...iconSize} />;
      case 'facebook':
        return <Facebook {...iconSize} />;
      case 'email':
      case 'mail':
        return <Mail {...iconSize} />;
      default:
        return <Link2 {...iconSize} />;
    }
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <Button
          key={index}
          variant="outline"
          size="icon"
          asChild
          className="h-9 w-9 rounded-full transition-colors hover:text-primary"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.platform} profile`}
          >
            {getIconForPlatform(link.platform)}
          </a>
        </Button>
      ))}
    </div>
  );
}