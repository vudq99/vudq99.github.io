export interface Project {
  title: string
  company: string
  description: string
  imageSrc: string
  imageAlt: string
  caseStudyUrl: string
}

export const featuredProjects: Project[] = [
  {
    title: "Git-Integrated Workflows",
    company: "Holistics BI",
    description:
      "Rebuilt git-integrated workflows for data analysts, reducing user effort by 70% through simplification and automation.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    imageAlt: "Git Workflow Preview",
    caseStudyUrl: "/case-study/git-integrated-workflows",
  },
  {
    title: "Advanced Search Implementation",
    company: "Holistics BI",
    description:
      "Introduced native advanced search with string-based syntax, unblocking the workflow of 4,000+ active analysts.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    imageAlt: "Search Feature Preview",
    caseStudyUrl: "/case-study/advanced-search-implementation",
  },
  {
    title: "XFast 2h Delivery Service",
    company: "Giao Hang Tiet Kiem (GHTK)",
    description:
      "Co-designed GHTK's same-day delivery service, leading logic/UX for multiple features used by 1,000+ internal staff.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    imageAlt: "Delivery Service Preview",
    caseStudyUrl: "/case-study/xfast-2h-delivery-service",
  },
]

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    title: "Gaming Livestream Platform",
    company: "FTECH CO., LTD",
    description:
      "Defined use cases, conducted competitive analysis, and managed feature specs for a gaming livestream platform.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    imageAlt: "Livestream Platform Preview",
    caseStudyUrl: "/case-study/gaming-livestream-platform",
  },
  {
    title: "Internal Logistics App",
    company: "Giao Hang Tiet Kiem (GHTK)",
    description:
      "Led user research and proposed system/UI changes for an internal logistics app based on user feedback and business strategy.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    imageAlt: "Logistics App Preview",
    caseStudyUrl: "/case-study/internal-logistics-app",
  },
  {
    title: "Product UX Redesign",
    company: "Holistics BI",
    description:
      "Redesigned/deprecated key product concepts for better UX and dev velocity, improving the overall user experience.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    imageAlt: "UX Redesign Preview",
    caseStudyUrl: "/case-study/product-ux-redesign",
  },
]
