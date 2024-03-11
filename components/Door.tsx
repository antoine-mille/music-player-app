"use client"

import { DoorIcon } from "@/components"

type DoorProps = {
  handleClick?: () => void
}

const Door = ({ handleClick }: DoorProps) => {
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <DoorIcon />
    </div>
  )
}

export { Door }
