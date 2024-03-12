import { getAvailableDevice, pauseTrack, startTrack } from "@/lib/spotify"
import { useSession } from "next-auth/react"

// Define the useTrack hook to play and stop tracks
const useTrack = () => {
  // Get the session from next-auth
  const { data: session } = useSession()

  /**
   * Play a track on the user's active Spotify device
   * @param track - The track to play
   * @returns void
   */
  const playTrack = async (
    track: SpotifyApi.TrackObjectFull,
    positionMs: number = 0
  ) => {
    if (!session) {
      return false
    }
    try {
      const { accessToken, refreshToken } = session.token

      // Get the user's active device
      const deviceId = await getAvailableDevice(accessToken, refreshToken)
      if (!deviceId) {
        return false
      }

      const response = await startTrack(
        accessToken,
        refreshToken,
        track.uri,
        deviceId,
        positionMs
      )
      return response.statusCode === 204
    } catch (error) {
      return false
    }
  }

  /**
   * Stop the currently playing track
   * @returns void
   */
  const stopTrack = async () => {
    if (!session) {
      console.error("No session")
      return
    }
    try {
      const { accessToken, refreshToken } = session.token
      const response = await pauseTrack(accessToken, refreshToken)
      if (response.statusCode !== 204) {
        console.error("Error pausing track", response)
        return
      }
    } catch (error) {
      console.error("Error pausing track", error)
    }
  }

  return { playTrack, stopTrack }
}

export { useTrack }
