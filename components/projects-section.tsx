import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText } from "lucide-react"
import { featuredProjects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader className="px-6 pt-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-6">
                <div className="aspect-video rounded-md overflow-hidden bg-muted">
                  <img
                    src={project.imageSrc || "/placeholder.svg"}
                    alt={project.imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={project.caseStudyUrl}>
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
