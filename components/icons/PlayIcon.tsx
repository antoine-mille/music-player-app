import { IconProps } from "@/types/icon-props"

const PlayIcon = ({
  width = 24,
  height = 24,
  fill = "white",
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.0223 13.8481C20.6489 13.4564 20.6489 12.5438 20.0223 12.1521L2.03 0.906928C1.36395 0.490648 0.5 0.969491 0.5 1.75493V24.2452C0.5 25.0307 1.36395 25.5095 2.03 25.0932L20.0223 13.8481Z"
        fill={fill}
      />
    </svg>
  )
}

export { PlayIcon }
