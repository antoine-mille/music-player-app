import { cn } from "@/lib/utils"
import Image from "next/image"

type MusicImageProps = {
  track: SpotifyApi.TrackObjectFull
  width?: number
  height?: number
  className?: string
}

const MusicImage = ({
  track,
  width = 128,
  height = 128,
  className,
}: MusicImageProps) => {
  return (
    <Image
      src={track.album.images[0].url}
      alt={`Cover of ${track.name} song`}
      width={width}
      height={height}
      className={cn("size-32 object-cover rounded-md", className)}
    />
  )
}

export { MusicImage }
