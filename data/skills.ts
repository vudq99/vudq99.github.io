export interface Skill {
  name: string
  level: "Beginner" | "Basic" | "Intermediate" | "Advanced" | "Expert"
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    title: "Product Management",
    skills: [
      { name: "Product Strategy & Roadmapping", level: "Expert" },
      { name: "User Research & Validation", level: "Expert" },
      { name: "Product Requirements", level: "Expert" },
      { name: "Agile Methodology", level: "Advanced" },
      { name: "System Thinking", level: "Advanced" },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "SQL & Data Analysis", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "PHP", level: "Basic" },
      { name: "Wireframing & Prototyping", level: "Advanced" },
      { name: "UX/UI Collaboration", level: "Advanced" },
    ],
  },
  {
    title: "Leadership & Soft Skills",
    skills: [
      { name: "Cross-functional Collaboration", level: "Expert" },
      { name: "Problem Solving", level: "Expert" },
      { name: "Team Leadership", level: "Advanced" },
      { name: "Strategic Thinking", level: "Advanced" },
      { name: "Communication", level: "Advanced" },
    ],
  },
]
