"use client"

import { MusicImage, MusicLikeIcon, MusicSlider, PlusIcon } from "@/components"
import { useTrackStore } from "@/stores/track.store"

const MainMusic = () => {
  const track = useTrackStore((state) => state.track)

  if (!track) {
    // ToDo: Update this to a better UI
    return null
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <MusicImage
        track={track}
        width={300}
        height={300}
        className="size-[300px]"
      />

      <div className="flex w-[300px] items-center justify-between">
        <PlusIcon />
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-gray-900">{track.name}</p>
          <p className="text-lg text-gray-800">{track.artists[0].name}</p>
        </div>
        <MusicLikeIcon />
      </div>

      <div className="w-full max-w-[24rem]">
        <MusicSlider track={track} />
      </div>
    </div>
  )
}

export { MainMusic }
