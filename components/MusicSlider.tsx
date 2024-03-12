import { millisecondsToMinutesSeconds } from "@/lib/utils"

type MusicSliderProps = {
  currentTime: number
  duration: number
  handleSliderChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MusicSlider = ({
  currentTime,
  duration,
  handleSliderChange,
}: MusicSliderProps) => {
  const value = (currentTime / duration) * 100

  const formattedCurrentTime = millisecondsToMinutesSeconds(currentTime)
  const formattedDuration = millisecondsToMinutesSeconds(duration)

  return (
    <>
      <div className="flex translate-y-1 justify-between">
        <p className="text-xs font-medium text-gray-500">
          {formattedCurrentTime}
        </p>
        <p className="text-xs font-medium text-gray-500">{formattedDuration}</p>
      </div>
      <input
        type="range"
        value={value}
        onChange={handleSliderChange}
        min="0"
        max="100"
        className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-[#27ae60]"
      />
    </>
  )
}

export { MusicSlider }
