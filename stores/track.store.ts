import { create } from "zustand"

// Define the type for the track store
type TrackStore = {
  track: SpotifyApi.TrackObjectFull | null
  setTrack: (track: SpotifyApi.TrackObjectFull | null) => void
}

// Create a store for the current track
const useTrackStore = create<TrackStore>((set) => ({
  track: null,
  setTrack: (track: SpotifyApi.TrackObjectFull | null) => set({ track }),
}))

export { useTrackStore }
