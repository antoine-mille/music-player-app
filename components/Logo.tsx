import Image from "next/image"

type LogoProps = {
  width: number
  height: number
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <Image src="./next.svg" alt="Next logo" width={width} height={height} />
  )
}

export { Logo }
