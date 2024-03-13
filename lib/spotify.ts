import SpotifyWebApi from "spotify-web-api-node"

/**
 * Get the Spotify Web API instance
 * @param accessToken User's access token
 * @param refreshToken User's refresh token
 * @returns The Spotify Web API instance
 */
export function getSpotifyWebApi(accessToken: string, refreshToken: string) {
  return new SpotifyWebApi({
    accessToken,
    refreshToken,
  })
}

/**
 * Start playing a track on the user's active device
 * @param accessToken User's access token
 * @param refreshToken User's refresh token
 * @param trackUri The URI of the track to play
 * @param deviceId The ID of the device to play the track on
 * @returns The response from the Spotify API
 */
export async function startTrack(
  accessToken: string,
  refreshToken: string,
  trackUri: string,
  deviceId: string,
  positionMs: number
) {
  const spotifyApi = getSpotifyWebApi(accessToken, refreshToken)
  return await spotifyApi.play({
    uris: [trackUri],
    device_id: deviceId,
    position_ms: positionMs,
  })
}

/**
 * Pause the currently playing track
 * @param accessToken User's access token
 * @param refreshToken User's refresh token
 * @returns The response from the Spotify API
 */
export async function pauseTrack(accessToken: string, refreshToken: string) {
  const spotifyApi = getSpotifyWebApi(accessToken, refreshToken)
  return await spotifyApi.pause()
}

/**
 * Get the user's available device to play music on
 * @param accessToken User's access token
 * @param refreshToken User's refresh token
 * @returns The device ID or null if no device is available
 */
export async function getAvailableDevice(
  accessToken: string,
  refreshToken: string
) {
  const spotifyApi = getSpotifyWebApi(accessToken, refreshToken)
  const devices = await spotifyApi
    .getMyDevices()
    .then((res) => res.body.devices)
  if (devices.length === 0) {
    return null
  }
  const currentDevice = devices.find((device) => device.is_active)
  if (currentDevice) {
    return currentDevice.id
  }
  return devices[0].id
}

/**
 * Check if the user is currently playing music
 * @param accessToken User's access token
 * @param refreshToken User's refresh token
 * @returns A boolean indicating if the user is playing music
 */
export async function checkIfIsCurrentlyPlaying(
  accessToken: string,
  refreshToken: string
) {
  const spotifyApi = getSpotifyWebApi(accessToken, refreshToken)
  const playback = await spotifyApi.getMyCurrentPlaybackState()
  if (playback.statusCode !== 200) {
    return false
  }
  return playback.body.is_playing
}
