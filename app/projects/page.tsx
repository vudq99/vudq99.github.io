import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ArrowLeft } from "lucide-react"
import { allProjects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="max-w-[1400px] mx-auto py-16 px-6">
      <div className="flex items-center gap-3 mb-12">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">All Projects</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
