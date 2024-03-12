"use client"

import { MusicCard, RowMusicCard } from "@/components"
import { useSavedTracks } from "@/hooks/use-saved-tracks"

export default function Page() {
  // Fetch 4 saved tracks from the user
  const tracks = useSavedTracks(6)

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
              <MusicCard key={track.id} track={track} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold text-gray-900">You may like</h2>
          <div className="mt-6 flex flex-col gap-3">
            {tracks.map((track) => (
              <RowMusicCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      </div>

      <div className="flex-1 border-x-2 border-[#fafafa]"></div>
    </main>
  )
}
