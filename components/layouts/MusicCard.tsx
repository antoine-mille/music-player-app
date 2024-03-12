import { MusicImage } from "@/components"

type MusicCardProps = {
  track: SpotifyApi.TrackObjectFull
}

const MusicCard = ({ track }: MusicCardProps) => {
  const releaseYear = track.album.release_date.split("-")[0]

  return (
    <div className="max-w-32 cursor-pointer">
      <MusicImage track={track} />
      <div className="p-1">
        <p className="text-sm font-semibold text-gray-900">{track.name}</p>
        <p className="inline-flex flex-wrap gap-1 text-sm text-gray-800">
          <span>{track.artists[0].name},</span>
          <span className=" font-medium text-gray-500">{releaseYear}</span>
        </p>
      </div>
    </div>
  )
}

export { MusicCard }
