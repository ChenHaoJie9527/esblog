import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Timeline } from '@/components/about/Timeline';
import { SkillsList } from '@/components/about/SkillsList';
import { SocialLinks } from '@/components/about/SocialLinks';
import { getAuthorData } from '@/lib/authors';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about me, my skills, experience, and interests',
};

/**
 * AboutPage Component
 * 
 * Provides detailed information about the blog author:
 * - Personal bio and background
 * - Professional experience timeline
 * - Skills and expertise
 * - Social media links and contact information
 */
export default async function AboutPage() {
  const author = await getAuthorData();
  
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">{author.name}</h1>
          <p className="text-xl text-muted-foreground">{author.headline}</p>
          <div className="prose dark:prose-invert">{author.bio}</div>
          <SocialLinks links={author.socialLinks} />
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={`mailto:${author.email}`}>Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={author.resumeUrl} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image 
            src={author.profileImage || "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg"} 
            alt={author.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>
      
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experience" className="mt-6 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          <Timeline items={author.experience} />
        </TabsContent>
        
        <TabsContent value="skills" className="mt-6 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
          <SkillsList skills={author.skills} />
        </TabsContent>
        
        <TabsContent value="education" className="mt-6 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {author.education.map((edu, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.years}</p>
                {edu.description && <p>{edu.description}</p>}
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}