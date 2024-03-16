import { IconProps } from "@/types/icon-props"

const PauseIcon = ({
  width = 24,
  height = 24,
  fill = "white",
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 26.0988C15.5523 26.0988 16 25.6511 16 25.0988V1C16 0.447715 15.5523 0 15 0H10.5C9.94772 0 9.5 0.447715 9.5 1V25.0988C9.5 25.6511 9.94772 26.0988 10.5 26.0988H15Z"
        fill={fill}
      />
      <path
        d="M5.5 26.0988C6.05228 26.0988 6.5 25.6511 6.5 25.0988V1C6.5 0.447715 6.05228 0 5.5 0H1C0.447715 0 0 0.447715 0 1V25.0988C0 25.6511 0.447715 26.0988 1 26.0988H5.5Z"
        fill={fill}
      />
    </svg>
  )
}

export { PauseIcon }
