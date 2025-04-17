import { Briefcase } from "lucide-react"
import { experienceData } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
        </div>
        <div className="space-y-10">
          {experienceData.map((item, index) => (
            <div key={index} className="grid md:grid-cols-[1fr_3fr] gap-8">
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-primary font-medium">{item.company}</p>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">{item.description}</p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
