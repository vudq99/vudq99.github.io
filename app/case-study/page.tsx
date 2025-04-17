import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="max-w-[1400px] mx-auto py-16 px-6">
      <div className="flex items-center gap-3 mb-12">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Git-Integrated Workflows Redesign</h1>
      </div>

      <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-12 max-w-4xl">
        <img
          src="/placeholder.svg?height=400&width=800"
          alt="Git Workflow Preview"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="prose max-w-4xl px-2">
        <h2>Overview</h2>
        <p>
          Holistics BI's git-integrated workflows were causing friction for data analysts. As the Technical Product
          Owner, I led a cross-functional team to completely redesign these workflows, resulting in a 70% reduction in
          user effort and significant improvements in analyst productivity.
        </p>

        <h2>The Challenge</h2>
        <p>
          Our data analyst users were finding it difficult to effectively use git-based version control within our
          platform. User research revealed several key issues:
        </p>
        <ul>
          <li>Complex git operations requiring technical knowledge many analysts didn't possess</li>
          <li>Confusing UI that didn't align with analysts' mental models</li>
          <li>Too many manual steps required for common operations</li>
          <li>Lack of visibility into the current state of changes</li>
        </ul>

        <h2>My Role</h2>
        <p>As the Technical Product Owner for this initiative, I:</p>
        <ul>
          <li>Led product discovery calls with data analysts to understand their workflows and pain points</li>
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
          <li>In-depth interviews with data analysts of varying technical backgrounds</li>
          <li>Analysis of usage data to identify drop-off points and friction</li>
          <li>Competitive analysis of git workflows in similar tools</li>
          <li>Surveys to gather quantitative feedback on pain points</li>
        </ul>

        <h3>2. Strategy & Planning</h3>
        <p>Based on research insights, I developed a comprehensive strategy that focused on:</p>
        <ul>
          <li>Simplifying the git workflow to match analysts' mental models</li>
          <li>Automating common operations to reduce manual steps</li>
          <li>Providing clear visibility into the state of changes</li>
          <li>Creating intuitive interfaces for complex git operations</li>
        </ul>

        <h3>3. Design & Prototyping</h3>
        <p>Working with our UX team, we:</p>
        <ul>
          <li>Created low-fidelity wireframes for rapid iteration</li>
          <li>Developed interactive prototypes for user testing</li>
          <li>Refined designs based on feedback from multiple rounds of usability testing</li>
          <li>Finalized a design system for consistent implementation</li>
        </ul>

        <h3>4. Implementation & Testing</h3>
        <p>I collaborated closely with engineering to:</p>
        <ul>
          <li>Break down the redesign into manageable sprints</li>
          <li>Prioritize features based on user impact and technical complexity</li>
          <li>Conduct beta testing with a subset of users</li>
          <li>Gather feedback and make iterative improvements</li>
        </ul>

        <h2>Results</h2>
        <p>The git workflow redesign delivered significant improvements:</p>
        <ul>
          <li>70% reduction in user effort for common git operations</li>
          <li>50% decrease in support tickets related to git workflows</li>
          <li>40% increase in adoption of version control among analysts</li>
          <li>Positive feedback from 90% of users in post-launch surveys</li>
          <li>Increased collaboration between analysts through better version control</li>
        </ul>

        <h2>Lessons Learned</h2>
        <p>This project reinforced several important product management principles:</p>
        <ul>
          <li>The importance of deeply understanding user workflows before making significant changes</li>
          <li>The value of simplifying complex technical concepts for non-technical users</li>
          <li>The effectiveness of automation in reducing friction and improving adoption</li>
          <li>The need for clear visibility and feedback in complex systems</li>
        </ul>

        <h2>Next Steps</h2>
        <p>Following the successful redesign, we're now focused on:</p>
        <ul>
          <li>Expanding automation capabilities for more advanced git workflows</li>
          <li>Improving collaboration features between team members</li>
          <li>Implementing advanced conflict resolution tools</li>
          <li>Creating educational resources to help users leverage the full power of git</li>
        </ul>
      </div>
    </div>
  )
}
