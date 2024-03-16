import { IconProps } from "@/types/icon-props"

const NextIcon = ({
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
        d="M12.4889 9.81929C13.0576 9.42119 13.0576 8.57893 12.4889 8.18082L2.07346 0.890026C1.41069 0.426082 0.5 0.900234 0.5 1.70926V16.2909C0.5 17.0999 1.41068 17.574 2.07346 17.1101L12.4889 9.81929Z"
        fill={fill}
      />
      <path
        d="M21.7003 9.81929C22.269 9.42119 22.269 8.57893 21.7003 8.18082L11.2849 0.890026C10.6221 0.426082 9.71143 0.900234 9.71143 1.70926V16.2909C9.71143 17.0999 10.6221 17.574 11.2849 17.1101L21.7003 9.81929Z"
        fill={fill}
      />
    </svg>
  )
}

export { NextIcon }
