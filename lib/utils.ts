import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert milliseconds to minutes and seconds (mm:ss)
export function millisecondsToMinutesSeconds(milliseconds: number) {
  // Convert milliseconds to seconds
  const totalSeconds = Math.floor(milliseconds / 1000)

  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}
