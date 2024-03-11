"use client"

import { useSavedTracks } from "@/hooks/use-saved-tracks"
import { useTrack } from "@/hooks/use-track"
import { useTrackStore } from "@/stores/track.store"

const Player = () => {
  // Fetch saved tracks from Spotify
  const tracks = useSavedTracks()
  // Get the playTrack function from the useTrack hook
  const { playTrack, stopTrack } = useTrack()
  // Get the current track from the track store
  const track = useTrackStore((state) => state.track)

  // Check if a track is currently playing
  const isPlaying = track !== null

  return (
    <div>
      {tracks.map((track) => (
        <div key={track.uri}>
          <p>{track.name}</p>
          <button onClick={() => playTrack(track)}>Play track</button>
        </div>
      ))}
      {isPlaying && <p>Now playing: {track?.name}</p>}
      {isPlaying && <button onClick={() => stopTrack()}>Stop track</button>}
    </div>
  )
}

export { Player }
