import { IconProps } from "@/types/icon-props"

const RepeatIcon = ({
  width = 24,
  height = 24,
  fill = "#828282",
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.5353 5.34808C21.162 4.95642 21.162 4.04375 20.5353 3.65209L15.4221 0.456334C14.756 0.0400544 13.8921 0.518898 13.8921 1.30433V7.69584C13.8921 8.48127 14.756 8.96012 15.4221 8.54384L20.5353 5.34808Z"
        fill={fill}
      />
      <path
        d="M1.36217 18.3481C0.735499 17.9564 0.7355 17.0438 1.36217 16.6521L6.47537 13.4563C7.14142 13.0401 8.00537 13.5189 8.00537 14.3043V20.6958C8.00537 21.4813 7.14142 21.9601 6.47537 21.5438L1.36217 18.3481Z"
        fill={fill}
      />
      <path
        d="M2.89209 10.3042V10.3042C2.89209 6.99049 5.57838 4.3042 8.89209 4.3042V4.3042H13.8921"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8921 11.3042V11.3042C17.8921 14.6179 15.2058 17.3042 11.8921 17.3042V17.3042H6.89209"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { RepeatIcon }
