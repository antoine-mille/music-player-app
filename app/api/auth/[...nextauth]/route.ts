import { AuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import SpotifyProvider from "next-auth/providers/spotify"

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-library-read,user-read-playback-state,user-read-currently-playing",
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        token: {
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
      }
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token as string
        token.refreshToken = account.refreshToken as string
      }
      return token
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: undefined,
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
