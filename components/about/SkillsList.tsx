import { Progress } from '@/components/ui/progress';
import { SkillType } from '@/lib/types';

interface SkillsListProps {
  skills: SkillType[];
}

/**
 * SkillsList Component
 * 
 * Displays a visual representation of skills and proficiency:
 * - Groups skills by category
 * - Shows skill level with progress bars
 * - Provides visual hierarchy of expertise
 * 
 * @param skills - Array of skill objects with name and level
 */
export function SkillsList({ skills }: SkillsListProps) {
  if (!skills || skills.length === 0) {
    return null;
  }
  
  // Group skills by category
  const skillsByCategory: Record<string, SkillType[]> = {};
  
  skills.forEach(skill => {
    const category = skill.category || 'Other';
    if (!skillsByCategory[category]) {
      skillsByCategory[category] = [];
    }
    skillsByCategory[category].push(skill);
  });
  
  // Convert skill level (1-5) to percentage
  const levelToPercentage = (level: number) => {
    // If level is already a percentage, return it
    if (level > 5) return level;
    // Convert 1-5 scale to percentage
    return (level / 5) * 100;
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="space-y-4">
            {categorySkills.map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">
                    {skill.level > 5 ? `${skill.level}%` : `${skill.level}/5`}
                  </span>
                </div>
                <Progress value={levelToPercentage(skill.level)} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}