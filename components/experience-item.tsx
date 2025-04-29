interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export function ExperienceItem({ title, company, period, description, achievements }: ExperienceItemProps) {
  return (
    <div className="grid md:grid-cols-[1fr_3fr] gap-8">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-primary font-medium">{company}</p>
        <p className="text-sm text-muted-foreground">{period}</p>
      </div>
      <div className="space-y-6">
        <p>{description}</p>
        <ul className="list-disc pl-5 space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
