export interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Technical Product Manager",
    company: "Holistics BI",
    period: "Jan 2024 - Present",
    description: "Leading product discovery and development for a SaaS BI platform.",
    achievements: [
      "Rebuilt git-integrated workflows, reducing user effort by 70% through simplification and automation",
      "Introduced native advanced search with string-based syntax, enabling lineage tracking for 4,800+ active analysts",
      "Partnered with engineering on architecture discussions to ensure scalable, maintainable solutions",
    ],
  },
  {
    title: "Product Manager",
    company: "Holistics BI",
    period: "Feb 2022 - Dec 2023",
    description: "Focused on the Business User Experience for a self-service analytics platform.",
    achievements: [
      "Delivered dashboard interaction features adopted by 9,000+ users, with 32,000 instances created",
      "Led a team to migrate the visualization engine, resulting in 3–4x rendering speed improvement",
      "Conducted regular usability tests and implemented data-informed UX improvements",
    ],
  },
  {
    title: "Product Analyst",
    company: "FTECH CO., LTD",
    period: "Apr 2021 - Jan 2022",
    description: "Supported product development for a Gaming Livestream Platform.",
    achievements: [
      "Defined use cases and conducted competitive analysis to identify UX gaps",
      "Owned and delivered multiple modules including Notifications and Livestreaming history",
    ],
  },
  {
    title: "Operations Optimization Specialist",
    company: "Giao Hang Tiet Kiem (GHTK)",
    period: "May 2020 - Dec 2020",
    description: "Contributed to internal logistics app and delivery service projects.",
    achievements: [
      'Led user research for internal logistics app "iGHTK", identifying key pain points and actionable insights',
      'Co-designed the "XFast 2h" delivery service, leading logic/UX for features used by 1,000+ staff',
    ],
  },
]
