"use client"

import {
  Door,
  ExplorerIcon,
  LikeIcon,
  Logo,
  MusicIcon,
  NavigationLink,
  UserIcon,
} from "@/components"
import { signIn, signOut, useSession } from "next-auth/react"

// LeftSidebar component
const LeftSidebar = () => {
  const { data: session } = useSession()

  const handleClick = () => {
    // If the user is signed in, sign them out. If they are not signed in, sign them in.
    if (session) signOut()
    else signIn("spotify")
  }

  // Navigation links
  const links = [
    { href: "/explore", icon: ExplorerIcon },
    { href: "/musics", icon: MusicIcon },
    { href: "/favorites", icon: LikeIcon },
  ]

  return (
    <div className="flex h-full flex-col items-center justify-between gap-6 py-6">
      <div className="flex flex-col items-center">
        <div className="space-y-4 border-b pb-6">
          <Logo width={32} height={32} />
          {session && (
            <UserIcon src={session.user?.image} username={session.user?.name} />
          )}
        </div>
        <div className="flex flex-col items-center gap-2 py-6">
          {links.map((link) => (
            <NavigationLink key={link.href} href={link.href} icon={link.icon} />
          ))}
        </div>
      </div>
      <Door handleClick={handleClick} />
    </div>
  )
}

export { LeftSidebar }
