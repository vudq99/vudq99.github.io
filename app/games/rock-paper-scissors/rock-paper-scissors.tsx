"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type Choice = "rock" | "paper" | "scissors" | null
type Result = "win" | "lose" | "draw" | null

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice>(null)
  const [computerChoice, setComputerChoice] = useState<Choice>(null)
  const [result, setResult] = useState<Result>(null)
  const [score, setScore] = useState({ player: 0, computer: 0 })
  const [animationChoice, setAnimationChoice] = useState<Choice>("rock")

  const choices: Choice[] = ["rock", "paper", "scissors"]

  const choiceEmojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  }

  useEffect(() => {
    let animationInterval: NodeJS.Timeout

    if (!playerChoice) {
      animationInterval = setInterval(() => {
        setAnimationChoice((prevChoice) => {
          const currentIndex = choices.indexOf(prevChoice as Choice)
          return choices[(currentIndex + 1) % choices.length]
        })
      }, 150)
    }

    return () => {
      if (animationInterval) clearInterval(animationInterval)
    }
  }, [playerChoice])

  const getComputerChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
  }

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return "draw"

    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "win"
    }

    return "lose"
  }

  const handleChoice = (choice: Choice) => {
    setPlayerChoice(choice)
    const computer = getComputerChoice()
    setComputerChoice(computer)
    const gameResult = determineWinner(choice, computer)
    setResult(gameResult)

    if (gameResult === "win") {
      setScore((prev) => ({ ...prev, player: prev.player + 1 }))
    } else if (gameResult === "lose") {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }))
    }
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult(null)
  }

  const resultMessages = {
    win: "You win! 🎉",
    lose: "Computer wins! 😢",
    draw: "It's a draw! 🤝",
  }

  return (
    <div className="flex items-center justify-center min-h-[500px] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Rock Paper Scissors</CardTitle>
          <CardDescription>Make your choice and see if you can beat the computer!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center gap-4">
            {choices.map((choice) => (
              <Button
                key={choice}
                variant={playerChoice === choice ? "default" : "outline"}
                size="lg"
                className="flex flex-col items-center gap-2 h-auto py-4"
                onClick={() => handleChoice(choice)}
                disabled={playerChoice !== null}
              >
                <span className="text-4xl">{choice ? choiceEmojis[choice] : ""}</span>
                <span className="capitalize">{choice}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-2">
                <h3 className="font-medium">Your Choice</h3>
                <div className="flex justify-center h-24 items-center">
                  <span className="text-6xl">{playerChoice ? choiceEmojis[playerChoice] : "❓"}</span>
                </div>
                <p className="capitalize">{playerChoice || "Choose..."}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Computer's Choice</h3>
                <div className="flex justify-center items-center h-24">
                  {!playerChoice ? (
                    <span className="text-6xl animate-pulse">{animationChoice ? choiceEmojis[animationChoice] : "❓"}</span>
                  ) : (
                    <span className="text-6xl">{computerChoice ? choiceEmojis[computerChoice] : "❓"}</span>
                  )}
                </div>
                <p className="capitalize">{!playerChoice ? "Waiting for you..." : computerChoice || "Thinking..."}</p>
              </div>
            </div>

            {result && (
              <div className="text-center p-4 rounded-md bg-muted">
                <h3 className="text-xl font-bold">{resultMessages[result]}</h3>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm">
            Score: You {score.player} - {score.computer} Computer
          </div>
          {result && <Button onClick={resetGame}>Play Again</Button>}
        </CardFooter>
      </Card>
    </div>
  )
}