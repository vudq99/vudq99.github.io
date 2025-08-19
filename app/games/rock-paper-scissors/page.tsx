import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode"
import RockPaperScissors from "./rock-paper-scissors"

export default function RockPaperScissorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-[1400px] mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/games" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Games
          </Link>
          <ModeToggle />
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        <RockPaperScissors />
      </main>
    </div>
  )
}