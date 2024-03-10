import SpotifyWebApi from "spotify-web-api-node"

export function getSpotifyWebApi(accessToken: string, refreshToken: string) {
  return new SpotifyWebApi({
    accessToken,
    refreshToken,
  })
}
