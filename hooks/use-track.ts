import { getAvailableDevice, pauseTrack, startTrack } from "@/lib/spotify"
import { useTrackStore } from "@/stores/track.store"
import { useSession } from "next-auth/react"

// Define the useTrack hook to play and stop tracks
const useTrack = () => {
  // Get the session from next-auth
  const { data: session } = useSession()

  // Get the setTrack function from the track store
  const setTrack = useTrackStore((state) => state.setTrack)

  /**
   * Play a track on the user's active Spotify device
   * @param track - The track to play
   * @returns void
   */
  const playTrack = async (track: SpotifyApi.TrackObjectFull) => {
    if (!session) {
      console.error("No session")
      return
    }
    try {
      const { accessToken, refreshToken } = session.token
      // Get the user's active device
      const deviceId = await getAvailableDevice(accessToken, refreshToken)
      if (!deviceId) {
        console.error("No device available")
        return
      }
      const response = await startTrack(
        accessToken,
        refreshToken,
        track.uri,
        deviceId
      )
      // If the response status code is not 204, log the error and return
      if (response.statusCode !== 204) {
        console.error("Error playing track", response)
        return
      }
      // Set the track in the track store
      setTrack(track)
    } catch (error) {
      console.error("Error playing track", error)
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
      setTrack(null)
    } catch (error) {
      console.error("Error pausing track", error)
    }
  }

  return { playTrack, stopTrack }
}

export { useTrack }
