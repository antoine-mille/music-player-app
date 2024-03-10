"use client"

import { useSavedTracks } from "@/hooks/use-saved-tracks"

const Player = () => {
  // Fetch saved tracks from Spotify
  const tracks = useSavedTracks()

  return (
    <div>
      {tracks.map((track) => (
        <div key={track.uri}>
          <p>{track.name}</p>
        </div>
      ))}
    </div>
  )
}

export { Player }
