import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ToolsSection } from "@/components/tools-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-[1400px] mx-auto flex h-16 items-center justify-between px-6">
          <div className="font-semibold text-lg">Duong Quang Vu</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-muted/50">
          <div className="max-w-[1400px] mx-auto px-6 grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Product Manager with a passion for intuitive solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                Turning complex workflows into intuitive, scalable solutions with 5+ years of experience in SaaS and internal platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/resume.pdf">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden">
              <img src="/images/profile.png" alt="Duong Quang Vu" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ToolsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
