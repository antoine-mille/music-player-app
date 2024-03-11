import { IconProps } from "@/types/icon-props"
import React from "react"

type SelectedIconProps = {
  icon: ({ width, height, fill }: IconProps) => JSX.Element
}

const SelectedIcon = ({ icon: Icon }: SelectedIconProps) => {
  return (
    <div className="cursor-pointer rounded-[14px] bg-[#27AE60]">
      <Icon fill="#ffff" />
    </div>
  )
}

export { SelectedIcon }
