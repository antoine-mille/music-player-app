import Image from "next/image"

type UserIconProps = {
  src?: string | null
  username?: string | null
}

const UserIcon = ({ src, username }: UserIconProps) => {
  // Change rendering to use a placeholder image
  if (!src || !username) return null

  return (
    <Image
      src={src}
      alt={`${username} icon`}
      width={32}
      height={32}
      className="cursor-pointer rounded-full"
    />
  )
}

export { UserIcon }
