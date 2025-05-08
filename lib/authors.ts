import { AuthorType } from './types';

/**
 * Mock author data
 * In a real application, this would be fetched from an API or database
 */
const mockAuthor: AuthorType = {
  name: 'John Doe',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  bio: 'Full-stack web developer with a passion for creating elegant, user-friendly applications. I specialize in React, TypeScript, and modern web technologies.',
  headline: 'Full-Stack Developer & Technical Writer',
  email: 'john.doe@example.com',
  resumeUrl: '/john-doe-resume.pdf',
  profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/johndoe',
      icon: 'Github',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/johndoe',
      icon: 'Twitter',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/johndoe',
      icon: 'Linkedin',
    },
  ],
  experience: [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Frontend Developer',
      startDate: '2021-01',
      current: true,
      description: 'Lead development of the company\'s flagship SaaS product, improving performance by 40% and implementing modern architecture.',
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      startDate: '2018-03',
      endDate: '2020-12',
      description: 'Developed and maintained various client projects from small websites to complex web applications.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      company: 'Startup Hub',
      position: 'Junior Developer',
      startDate: '2016-06',
      endDate: '2018-02',
      description: 'Worked on frontend development and UI/UX improvements for multiple startup projects.',
      technologies: ['JavaScript', 'HTML/CSS', 'jQuery'],
    },
  ],
  skills: [
    { name: 'React', level: 5, category: 'Frontend' },
    { name: 'TypeScript', level: 4, category: 'Language' },
    { name: 'Next.js', level: 5, category: 'Framework' },
    { name: 'Node.js', level: 4, category: 'Backend' },
    { name: 'GraphQL', level: 3, category: 'API' },
    { name: 'CSS/Tailwind', level: 4, category: 'Frontend' },
    { name: 'MongoDB', level: 3, category: 'Database' },
    { name: 'PostgreSQL', level: 3, category: 'Database' },
    { name: 'Docker', level: 2, category: 'DevOps' },
    { name: 'AWS', level: 2, category: 'Cloud' },
  ],
  education: [
    {
      institution: 'University of Technology',
      degree: 'Master of Science',
      field: 'Computer Science',
      years: '2014-2016',
      description: 'Specialized in Human-Computer Interaction and Web Technologies.',
    },
    {
      institution: 'State University',
      degree: 'Bachelor of Science',
      field: 'Information Technology',
      years: '2010-2014',
      description: 'Graduated with honors. Senior project on web accessibility.',
    },
  ],
};

/**
 * Get author data
 * 
 * @returns Author information
 */
export async function getAuthorData(): Promise<AuthorType> {
  // In a real application, this would fetch from an API or database
  // Simulating async behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAuthor);
    }, 300);
  });
}