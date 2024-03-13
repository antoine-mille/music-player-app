import { checkIfIsCurrentlyPlaying } from "@/lib/spotify"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useTrackStore } from "@/stores/track.store"

const usePlaybackTime = () => {
  const { data: session } = useSession()

  // Get the playback time from the store
  const playbackTime = useTrackStore((state) => state.playbackTime)
  // Get the setPlaybackTime function from the store
  const setPlaybackTime = useTrackStore((state) => state.setPlaybackTime)

  // Get the current track from the store
  const track = useTrackStore((state) => state.track)

  // Get the isPlaying state from the store
  const isPlaying = useTrackStore((state) => state.isPlaying)
  // Get the setIsPlaying function from the store
  const setIsPlaying = useTrackStore((state) => state.setIsPlaying)

  // Resync the playback time on first mount
  useEffect(() => {
    console.log("usePlaybackTime")
  }, [])

  // Reset the playback time when it's done
  useEffect(() => {
    if (!isPlaying) return

    if (!track) {
      setIsPlaying(false)
      return
    }

    if (playbackTime >= track.duration_ms) setPlaybackTime(0)
  }, [isPlaying, playbackTime, setIsPlaying, setPlaybackTime, track])

  // Check if the track is still playing
  useEffect(() => {
    if (!isPlaying || !session) return
    const checkIfIsPlaying = async () => {
      if (!track) setIsPlaying(false)

      const { accessToken, refreshToken } = session.token
      const success = await checkIfIsCurrentlyPlaying(accessToken, refreshToken)
      if (!success) setIsPlaying(false)
    }

    const interval = setInterval(checkIfIsPlaying, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, session, setIsPlaying, track])

  // Update the playback time every second
  useEffect(() => {
    if (!isPlaying) {
      setPlaybackTime(0)
      return
    }

    const interval = setInterval(() => {
      setPlaybackTime(playbackTime + 1000)
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying, playbackTime, setPlaybackTime])

  return playbackTime
}

export { usePlaybackTime }
