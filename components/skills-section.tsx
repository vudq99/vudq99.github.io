import { Badge } from "@/components/ui/badge"
import { skillsData } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="space-y-6 p-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full">
                      {skill.level}
                    </Badge>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
