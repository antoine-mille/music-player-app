"use client"

import { millisecondsToMinutesSeconds } from "@/lib/utils"
import { MusicImage } from "../MusicImage"

type RowMusicCardProps = {
  track: SpotifyApi.TrackObjectFull
  handleClick: (track: SpotifyApi.TrackObjectFull) => void
}

const MusicCardRow = ({ track, handleClick }: RowMusicCardProps) => {
  const releaseYear = track.album.release_date.split("-")[0]
  const formattedDuration = millisecondsToMinutesSeconds(track.duration_ms)

  return (
    <div
      className="flex max-h-[42px] w-full cursor-pointer items-center"
      onClick={() => handleClick(track)}
    >
      <MusicImage
        track={track}
        width={42}
        height={42}
        className="size-[42px]"
      />
      <div className="pl-2">
        <p className="max-w-[10.5rem] truncate text-sm font-medium text-gray-900">
          {track.name}
        </p>
        <p className="max-w-[10.5rem] truncate text-sm text-gray-800">
          {track.artists[0].name}
        </p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-sm font-medium text-gray-900">{formattedDuration}</p>
        <p className="text-sm font-medium text-gray-500">{releaseYear}</p>
      </div>
    </div>
  )
}

export { MusicCardRow }
