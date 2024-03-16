import { IconProps } from "@/types/icon-props"

const ShuffleIcon = ({
  width = 24,
  height = 24,
  fill = "#828282",
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.9945 16.8041C13.4175 16.8041 11.9411 16.1866 10.8457 15.1387"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.14938 6.85616C4.78339 5.56428 2.951 4.8042 0.994629 4.8042"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6378 17.8481C22.2645 17.4564 22.2645 16.5438 21.6378 16.1521L16.5246 12.9563C15.8586 12.5401 14.9946 13.0189 14.9946 13.8043V20.1958C14.9946 20.9813 15.8586 21.4601 16.5246 21.0438L21.6378 17.8481Z"
        fill={fill}
      />
      <path
        d="M14.9946 4.8042V4.8042C12.5724 4.8042 10.3878 6.26063 9.45617 8.49651L7.91771 12.1888C6.75318 14.9837 4.02239 16.8042 0.994629 16.8042V16.8042"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6378 5.84808C21.2645 5.45642 21.2645 4.54375 20.6378 4.15209L15.5246 0.956334C14.8586 0.540054 13.9946 1.0189 13.9946 1.80433V8.19584C13.9946 8.98127 14.8586 9.46012 15.5246 9.04384L20.6378 5.84808Z"
        fill={fill}
      />
    </svg>
  )
}

export { ShuffleIcon }
