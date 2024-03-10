"use client"

import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main>
      <h1>Music Player App</h1>
      {session ? (
        <p>Welcome, {session.user?.name}!</p>
      ) : (
        <p>Please sign in to use the app</p>
      )}
    </main>
  )
}
