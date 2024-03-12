import { getSpotifyWebApi } from "@/lib/spotify"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const useSavedTracks = (limit: number) => {
  const { data: session } = useSession()
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectFull[]>([])

  useEffect(() => {
    async function fetchSavedTracks() {
      if (session) {
        const { accessToken, refreshToken } = session.token
        const spotifyApi = getSpotifyWebApi(accessToken, refreshToken)
        const response = await spotifyApi.getMySavedTracks({ limit })
        const tracks = response.body.items.map((item) => item.track)
        setTracks(tracks)
      }
    }

    fetchSavedTracks()
  }, [session, limit])

  return tracks
}

export { useSavedTracks }
