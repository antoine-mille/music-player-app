"use client"

import { Player } from "@/components"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  // Get the user's session
  const { data: session } = useSession()

  return (
    <main className="mx-auto w-3/4 space-y-4">
      <h1>Music Player App</h1>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()}>Sign Out</button>
          <Player />
        </>
      ) : (
        <>
          <p>Please sign in to use the app</p>
          <button onClick={() => signIn("spotify")}>Sign In</button>
        </>
      )}
    </main>
  )
}
