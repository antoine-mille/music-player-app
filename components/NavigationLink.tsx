"use client"

import { usePathname } from "next/navigation"
import { SelectedIcon } from "@/components"
import { IconProps } from "@/types/icon-props"
import Link from "next/link"

type LinkProps = {
  href: string
  icon: ({ width, height, fill }: IconProps) => JSX.Element
}

const NavigationLink = ({ href, icon: Icon }: LinkProps) => {
  const pathname = usePathname()

  const isSamePath = (href: string) => pathname === href

  return (
    <>
      {isSamePath(href) && <SelectedIcon icon={Icon} />}
      {!isSamePath(href) && (
        <Link href={href} key={href}>
          <Icon />
        </Link>
      )}
    </>
  )
}

export { NavigationLink }
