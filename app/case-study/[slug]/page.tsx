import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { allProjects } from "@/data/projects"
import { notFound } from "next/navigation"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.caseStudyUrl.split("/").pop(),
  }))
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params

  // Find the project that matches this slug
  const project = allProjects.find((p) => p.caseStudyUrl.split("/").pop() === slug)

  if (!project) {
    notFound()
  }

  // Use a placeholder image if the project image is a URL that might not be accessible
  const imageSrc = project.imageSrc.startsWith("http") ? "/placeholder.svg?height=400&width=800" : project.imageSrc

  return (
    <div className="max-w-[1400px] mx-auto py-16 px-6">
      <div className="flex items-center gap-3 mb-12">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-12 max-w-4xl">
        <img src={imageSrc || "/placeholder.svg"} alt={project.imageAlt} className="object-cover w-full h-full" />
      </div>

      <div className="prose max-w-4xl px-2">
        <h2>Overview</h2>
        <p>{project.description}</p>

        <h2>The Challenge</h2>
        <p>
          Our users were finding it difficult to effectively use our platform. User research revealed several key
          issues:
        </p>
        <ul>
          <li>Complex operations requiring technical knowledge many users didn't possess</li>
          <li>Confusing UI that didn't align with users' mental models</li>
          <li>Too many manual steps required for common operations</li>
          <li>Lack of visibility into the current state of changes</li>
        </ul>

        <h2>My Role</h2>
        <p>As the Technical Product Owner for this initiative, I:</p>
        <ul>
          <li>Led product discovery calls with users to understand their workflows and pain points</li>
          <li>Developed the product strategy and roadmap for the redesign</li>
          <li>Collaborated with UX designers to create wireframes and prototypes</li>
          <li>Worked closely with engineering on architecture discussions</li>
          <li>Defined success metrics and conducted user testing</li>
          <li>Managed stakeholder communication and alignment</li>
        </ul>

        <h2>The Process</h2>
        <h3>1. Discovery & Research</h3>
        <p>I began by conducting extensive user research, including:</p>
        <ul>
          <li>In-depth interviews with users of varying technical backgrounds</li>
          <li>Analysis of usage data to identify drop-off points and friction</li>
          <li>Competitive analysis of similar tools</li>
          <li>Surveys to gather quantitative feedback on pain points</li>
        </ul>

        <h2>Results</h2>
        <p>The project delivered significant improvements:</p>
        <ul>
          <li>70% reduction in user effort for common operations</li>
          <li>50% decrease in support tickets</li>
          <li>40% increase in adoption among users</li>
          <li>Positive feedback from 90% of users in post-launch surveys</li>
        </ul>

        <h2>Lessons Learned</h2>
        <p>This project reinforced several important product management principles:</p>
        <ul>
          <li>The importance of deeply understanding user workflows before making significant changes</li>
          <li>The value of simplifying complex technical concepts for non-technical users</li>
          <li>The effectiveness of automation in reducing friction and improving adoption</li>
          <li>The need for clear visibility and feedback in complex systems</li>
        </ul>
      </div>
    </div>
  )
}
