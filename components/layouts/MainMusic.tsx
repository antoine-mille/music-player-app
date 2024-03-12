"use client"

import { MusicImage, MusicLikeIcon, MusicSlider, PlusIcon } from "@/components"
import { usePlaybackTime } from "@/hooks/use-playback-time"
import { useTrack } from "@/hooks/use-track"
import { useTrackStore } from "@/stores/track.store"

const MainMusic = () => {
  const track = useTrackStore((state) => state.track)

  const { playTrack } = useTrack()

  const playbackTime = usePlaybackTime()

  if (!track) {
    // ToDo: Update this to a better UI
    return null
  }

  // Change the playback time of the track when the slider is moved
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value
    const newTime = (value / 100) * track.duration_ms
    playTrack(track, newTime)
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
        <MusicSlider
          currentTime={playbackTime}
          duration={track.duration_ms}
          handleSliderChange={handleSliderChange}
        />
      </div>
    </div>
  )
}

export { MainMusic }
