import { create } from "zustand"

// Define the type for the track store
type TrackStore = {
  track: SpotifyApi.TrackObjectFull | null
  setTrack: (track: SpotifyApi.TrackObjectFull | null) => void
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  playbackTime: number
  setPlaybackTime: (playbackTime: number) => void
}

// Create a store for the current track
const useTrackStore = create<TrackStore>((set) => ({
  track: null,
  setTrack: (track: SpotifyApi.TrackObjectFull | null) => set({ track }),
  isPlaying: false,
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  playbackTime: 0,
  setPlaybackTime: (playbackTime: number) => set({ playbackTime }),
}))

export { useTrackStore }
