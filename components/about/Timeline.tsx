import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ExperienceType } from '@/lib/types';

interface TimelineProps {
  items: ExperienceType[];
}

/**
 * Timeline Component
 * 
 * Displays a chronological list of experiences:
 * - Visual timeline with connection lines
 * - Date range for each item
 * - Description and metadata for each entry
 * 
 * @param items - Array of timeline items (experiences)
 */
export function Timeline({ items }: TimelineProps) {
  if (!items || items.length === 0) {
    return null;
  }
  
  // Sort items by start date (newest first)
  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
  
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM yyyy');
    } catch (error) {
      return dateString;
    }
  };
  
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:left-6 before:h-full before:w-[1px] before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
      {sortedItems.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col gap-6 md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="flex md:w-1/2 md:flex-col md:items-center md:justify-center md:text-center">
            <div className="absolute left-0 top-6 h-12 w-12 rounded-full border bg-background flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
              <div className="h-3 w-3 rounded-full bg-primary" />
            </div>
            <div className="ml-16 md:ml-0">
              <h3 className="font-semibold">{item.position}</h3>
              <p className="text-muted-foreground">{item.company}</p>
              <p className="text-sm text-muted-foreground">
                {formatDate(item.startDate)} — {item.current ? 'Present' : formatDate(item.endDate || '')}
              </p>
            </div>
          </div>
          <Card className="relative md:w-1/2">
            <CardContent className="p-6">
              <p>{item.description}</p>
              {item.technologies && item.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}