import { Badge } from "@/components/ui/badge"
import { MapPin, User } from "lucide-react"
import { aboutData } from "@/data/about"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <User className="h-5 w-5 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg">{aboutData.intro}</p>
            {aboutData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{aboutData.location}</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Education</h3>
              <div className="space-y-2">
                <p>{aboutData.education}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, index) => (
                  <Badge key={index} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
