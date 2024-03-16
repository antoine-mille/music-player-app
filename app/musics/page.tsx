"use client"

import { MainMusic, MusicCard, MusicCardRow } from "@/components"
import { useSavedTracks } from "@/hooks/use-saved-tracks"
import { useTrack } from "@/hooks/use-track"
import { useTrackStore } from "@/stores/track.store"

export default function Page() {
  // Fetch 10 saved tracks from the user
  const tracks = useSavedTracks(10)

  // Get the playTrack function from the useTrack hook
  const { playTrack } = useTrack()

  const [setTrack, setIsPlaying] = useTrackStore((state) => [
    state.setTrack,
    state.setIsPlaying,
  ])

  const handleClick = (track: SpotifyApi.TrackObjectFull) => {
    // Stop the current track
    setIsPlaying(false)
    playTrack(track).then((success) => {
      if (!success) {
        console.error("Error playing track")
        return
      }
      // Set the track to the store
      setTrack(track)
      // Set the isPlaying to true
      setIsPlaying(true)
    })
  }

  return (
    <main className="flex h-screen">
      <div className="hide-scrollbar w-[300px] max-w-[300px] overflow-y-scroll p-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover <br />
          New music
        </h1>

        <section className="mt-8">
          <h2 className="font-semibold text-gray-900">Your songs</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {tracks.slice(0, 4).map((track) => (
              <MusicCard
                key={track.id}
                track={track}
                handleClick={handleClick}
              />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold text-gray-900">You may like</h2>
          <div className="mt-6 flex flex-col gap-3">
            {tracks.map((track) => (
              <MusicCardRow
                key={track.id}
                track={track}
                handleClick={handleClick}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="flex-1 border-x bg-[#fafafa] p-4">
        <h3 className="text-center text-xl font-semibold text-gray-900">
          Now playing
        </h3>
        <MainMusic />
      </div>
    </main>
  )
}
