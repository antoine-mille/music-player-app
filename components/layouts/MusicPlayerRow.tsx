"use client"

import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  ShuffleIcon,
} from "@/components"
import { useTrackStore } from "@/stores/track.store"

// MusicPlayerRow component is used in MainMusic layout component
const MusicPlayerRow = () => {
  const isPlaying = useTrackStore((state) => state.isPlaying)

  return (
    <div className="flex items-center justify-around">
      <div className="flex items-center gap-4">
        <ShuffleIcon />
        <PreviousIcon />
      </div>
      <button
        onClick={() => console.log("clicked")}
        className="flex size-16 items-center justify-center rounded-full bg-green-600"
      >
        {isPlaying && <PauseIcon />}
        {!isPlaying && <PlayIcon className="translate-x-[2px]" />}
      </button>
      <div className="flex items-center gap-4">
        <NextIcon />
        <RepeatIcon />
      </div>
    </div>
  )
}

export { MusicPlayerRow }
