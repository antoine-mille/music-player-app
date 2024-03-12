"use client"

import { MusicCard, MusicImage } from "@/components"
import { useSavedTracks } from "@/hooks/use-saved-tracks"

export default function Page() {
  // Fetch 4 saved tracks from the user
  const tracks = useSavedTracks(4)

  return (
    <main className="flex size-full">
      <div className="w-[300px] max-w-[300px] p-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover <br />
          New music
        </h1>

        <section className="mt-8">
          <h2 className="font-semibold text-gray-900">Your songs</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {tracks.map((track) => (
              <MusicCard key={track.id} track={track} />
            ))}
          </div>
        </section>
      </div>

      <div className="flex-1 border-x-2 border-[#fafafa]"></div>
    </main>
  )
}
