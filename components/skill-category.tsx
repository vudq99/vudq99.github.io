import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-6 p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <Badge variant="outline" className="rounded-full">
              {skill.level}
            </Badge>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
