import { IconProps } from "@/types/icon-props"

const PlusIcon = ({ width = 24, height = 24, fill = "#9BD8B5" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.875 8.375H12.125V1.625C12.125 1.32663 12.0065 1.04048 11.7955 0.829505C11.5845 0.618527 11.2984 0.5 11 0.5C10.7016 0.5 10.4155 0.618527 10.2045 0.829505C9.99353 1.04048 9.875 1.32663 9.875 1.625V8.375H3.125C2.82663 8.375 2.54048 8.49353 2.32951 8.7045C2.11853 8.91548 2 9.20163 2 9.5C2 9.79837 2.11853 10.0845 2.32951 10.2955C2.54048 10.5065 2.82663 10.625 3.125 10.625H9.875V17.375C9.875 17.6734 9.99353 17.9595 10.2045 18.1705C10.4155 18.3815 10.7016 18.5 11 18.5C11.2984 18.5 11.5845 18.3815 11.7955 18.1705C12.0065 17.9595 12.125 17.6734 12.125 17.375V10.625H18.875C19.1734 10.625 19.4595 10.5065 19.6705 10.2955C19.8815 10.0845 20 9.79837 20 9.5C20 9.20163 19.8815 8.91548 19.6705 8.7045C19.4595 8.49353 19.1734 8.375 18.875 8.375Z"
        fill={fill}
      />
    </svg>
  )
}

export { PlusIcon }