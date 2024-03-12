import { getCurrentPlaybackTime } from "@/lib/spotify"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const usePlaybackTime = () => {
  const { data: session } = useSession()

  const [playbackTime, setPlaybackTime] = useState(0)

  useEffect(() => {
    const fetchPlaybackTime = async () => {
      if (!session) {
        console.error("No session")
        return
      }
      const { accessToken, refreshToken } = session.token
      const currentTime = await getCurrentPlaybackTime(
        accessToken,
        refreshToken
      )
      setPlaybackTime(currentTime)
    }

    const interval = setInterval(fetchPlaybackTime, 1000)

    return () => clearInterval(interval)
  }, [session])

  return playbackTime
}

export { usePlaybackTime }
