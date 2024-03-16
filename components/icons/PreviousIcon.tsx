import { IconProps } from "@/types/icon-props"

const PreviousIcon = ({
  width = 24,
  height = 24,
  fill = "#27AE60",
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.5111 9.81929C9.94239 9.42119 9.94239 8.57893 10.5111 8.18082L20.9265 0.890026C21.5893 0.426082 22.5 0.900234 22.5 1.70926V16.2909C22.5 17.0999 21.5893 17.574 20.9265 17.1101L10.5111 9.81929Z"
        fill={fill}
      />
      <path
        d="M1.29968 9.81929C0.730968 9.42119 0.730968 8.57893 1.29968 8.18082L11.7151 0.890026C12.3779 0.426082 13.2886 0.900234 13.2886 1.70926V16.2909C13.2886 17.0999 12.3779 17.574 11.7151 17.1101L1.29968 9.81929Z"
        fill={fill}
      />
    </svg>
  )
}

export { PreviousIcon }
