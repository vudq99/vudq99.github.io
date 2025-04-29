import { toolsData } from "@/data/tools"
import * as LucideIcons from "lucide-react"

export function ToolsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Tools & Methodologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {toolsData.map((tool, index) => {
            // @ts-ignore - Dynamically access Lucide icons
            const IconComponent = LucideIcons[tool.icon]
            return (
              <div key={index} className="space-y-4 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium">{tool.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
