"use client"

import { SessionProvider } from "next-auth/react"

type NextAuthProviderProps = {
  children: React.ReactNode
}

const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export { NextAuthProvider }
