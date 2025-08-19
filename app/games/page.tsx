import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Gamepad2 } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode"
import RockPaperScissors from "./rock-paper-scissors/rock-paper-scissors"

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-[1400px] mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              <span className="font-semibold">Mini Games</span>
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Take a Break & Play</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sometimes we all need a quick mental break. Enjoy these mini-games I've built to showcase my coding skills 
            while having some fun!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✊</span>
                Rock Paper Scissors
              </CardTitle>
              <CardDescription>
                The classic game of strategy and luck. Can you outsmart the computer?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/games/rock-paper-scissors">
                <Button className="w-full">Play Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow opacity-60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Memory Match
              </CardTitle>
              <CardDescription>
                Test your memory by matching pairs of cards. How fast can you clear the board?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" disabled>Coming Soon</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow opacity-60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🧩</span>
                Word Puzzle
              </CardTitle>
              <CardDescription>
                Guess the word in 6 tries. A fun twist on the popular word game.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" disabled>Coming Soon</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Try Rock Paper Scissors</h2>
          <RockPaperScissors />
        </div>
      </main>
    </div>
  )
}