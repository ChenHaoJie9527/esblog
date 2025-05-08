import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { PostType } from '@/lib/types';

interface PostCardProps {
  post: PostType;
  variant?: 'default' | 'featured';
  className?: string;
}

/**
 * PostCard Component
 * 
 * Displays a blog post in a card format:
 * - Image thumbnail
 * - Title
 * - Excerpt
 * - Author information
 * - Publication date
 * - Reading time
 * - Categories
 * 
 * @param post - The blog post data
 * @param variant - The card style variant (default or featured)
 * @param className - Additional CSS classes
 */
export function PostCard({ post, variant = 'default', className }: PostCardProps) {
  const isFeatured = variant === 'featured';
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-md",
        isFeatured && "border-primary/20",
        className
      )}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className={cn(
          "grid h-full",
          isFeatured ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
        )}>
          <div className="relative h-48 md:h-full">
            <Image
              src={post.coverImage || "https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {isFeatured && (
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  Featured
                </Badge>
              </div>
            )}
          </div>
          
          <div className="flex flex-col h-full">
            <CardHeader>
              <div className="space-y-1">
                {post.categories[0] && (
                  <Badge variant="outline" className="mb-2">
                    {post.categories[0]}
                  </Badge>
                )}
                <h3 className={cn(
                  "font-bold tracking-tight line-clamp-2",
                  isFeatured ? "text-2xl" : "text-xl"
                )}>
                  {post.title}
                </h3>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground line-clamp-3 mb-4">
                {post.excerpt}
              </p>
            </CardContent>
            
            <CardFooter className="mt-auto pt-4 border-t">
              <div className="flex justify-between w-full items-center">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{post.author.name}</span>
                </div>
                
                <div className="flex items-center text-xs text-muted-foreground space-x-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime} min</span>
                  </div>
                </div>
              </div>
            </CardFooter>
          </div>
        </div>
      </Link>
    </Card>
  );
}