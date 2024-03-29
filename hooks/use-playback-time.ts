import {
  checkIfIsCurrentlyPlaying,
  getCurrentPlaybackTime,
} from "@/lib/spotify"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useTrackStore } from "@/stores/track.store"

const usePlaybackTime = () => {
  const { data: session } = useSession()

  const [playbackTime, setPlaybackTime, track, isPlaying, setIsPlaying] =
    useTrackStore((state) => [
      state.playbackTime,
      state.setPlaybackTime,
      state.track,
      state.isPlaying,
      state.setIsPlaying,
    ])

  // Resync the playback time on first mount
  useEffect(() => {
    if (!isPlaying || !session) return

    if (!track) {
      setIsPlaying(false)
      return
    }

    // Fetch the current playback time from the Spotify API and set it to the store
    const fetchCurrentPlaybackTime = async () => {
      const { accessToken, refreshToken } = session.token
      const playbackTime = await getCurrentPlaybackTime(
        accessToken,
        refreshToken
      )
      setPlaybackTime(playbackTime)
    }

    fetchCurrentPlaybackTime()
  }, [isPlaying, session, setIsPlaying, setPlaybackTime, track])

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
