import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  company: string
  description: string
  imageSrc: string
  imageAlt: string
  caseStudyUrl: string
}

export function ProjectCard({ title, company, description, imageSrc, imageAlt, caseStudyUrl }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="px-6 pt-6">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-6">
        <div className="aspect-video rounded-md overflow-hidden bg-muted">
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="object-cover w-full h-full" />
        </div>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={caseStudyUrl}>
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
