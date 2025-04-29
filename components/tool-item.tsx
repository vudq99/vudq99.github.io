interface ToolItemProps {
  name: string
  iconSrc: string
}

export function ToolItem({ name, iconSrc }: ToolItemProps) {
  return (
    <div className="space-y-4 text-center">
      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
        <img src={iconSrc || "/placeholder.svg"} alt={name} className="w-10 h-10" />
      </div>
      <h3 className="font-medium">{name}</h3>
    </div>
  )
}
