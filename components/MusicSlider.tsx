"use client"

import { usePlaybackTime } from "@/hooks/use-playback-time"
import { useTrack } from "@/hooks/use-track"
import { millisecondsToMinutesSeconds } from "@/lib/utils"
import { useTrackStore } from "@/stores/track.store"
import { useState } from "react"

type RangeInputProps = {
  track: SpotifyApi.TrackObjectFull
  value: number
}

const RangeInput = ({ track, value }: RangeInputProps) => {
  const [isDown, setIsDown] = useState(false)
  const [wantedTime, setWantedTime] = useState(0)

  const { playTrack } = useTrack()
  const [setIsPlaying, setPlaybackTime] = useTrackStore((state) => [
    state.setIsPlaying,
    state.setPlaybackTime,
  ])

  // Change the playback time of the track when the slider is moved
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isDown) setWantedTime(+event.target.value)
  }

  // Change the playback time of the track when the slider is released
  const handleMouseUp = () => {
    setIsDown(false)
    const newTime = (wantedTime / 100) * track.duration_ms
    setPlaybackTime(newTime)
    playTrack(track, newTime).then((success) => {
      if (!success) {
        console.error("Error playing track")
        setIsPlaying(false) // Stop the track
      }
    })
  }

  return (
    <input
      type="range"
      value={!isDown ? value : wantedTime}
      onChange={handleSliderChange}
      onMouseDown={() => setIsDown(true)}
      onMouseUp={handleMouseUp}
      min="0"
      max="100"
      className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-[#27ae60]"
    />
  )
}

type MusicSliderProps = {
  track: SpotifyApi.TrackObjectFull
}

const MusicSlider = ({ track }: MusicSliderProps) => {
  const playbackTime = usePlaybackTime()

  const value = (playbackTime / track.duration_ms) * 100

  const formattedCurrentTime = millisecondsToMinutesSeconds(playbackTime)
  const formattedDuration = millisecondsToMinutesSeconds(track.duration_ms)

  return (
    <>
      <div className="flex translate-y-1 justify-between">
        <p className="text-xs font-medium text-gray-500">
          {formattedCurrentTime}
        </p>
        <p className="text-xs font-medium text-gray-500">{formattedDuration}</p>
      </div>
      <RangeInput track={track} value={value} />
    </>
  )
}

export { MusicSlider }
