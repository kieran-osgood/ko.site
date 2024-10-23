import type { APIRoute } from "astro";
import { z } from "astro/zod";

const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played";
const REFRESH_ENDPOINT = "https://accounts.spotify.com/api/token";

// NOTE: these schemas are intentionally sparse and missing properties
export const TrackSchema = z.object({
  artists: z.array(z.object({ name: z.string() })),
  external_urls: z.object({ spotify: z.string() }),
  name: z.string(),
});

export type Track = z.infer<typeof TrackSchema>;

const TokenSchema = z.object({
  access_token: z.z.string(),
});

const RecentlyPlayedSchema = z.object({
  items: z.array(z.object({ track: TrackSchema })),
});

const authOptions = new URLSearchParams({
  grant_type: "refresh_token",
  refresh_token: import.meta.env.REFRESH_TOKEN,
});

/** 
    Access tokens only last for 1hour so no use storing them in env
    Instead we just request new access_token when we need the spotify data
    as we don't want to store the tokens client side (allows users to view my data)
 */
export const GET: APIRoute = async (): Promise<Response> => {
  // TODO: cache this to avoid hitting rate limits
  const tokenResponse = await fetch(REFRESH_ENDPOINT, {
    method: "POST",
    body: authOptions.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: import.meta.env.SPOTIFY_AUTHORIZATION,
    },
  })
    .then((response) => response.json())
    .then((response) => TokenSchema.safeParse(response));

  if (!tokenResponse.success) {
    console.warn("Retrieve token failed: ", tokenResponse);
    return new Response(null, { status: 401 });
  }
  const url = new URL(RECENTLY_PLAYED_ENDPOINT);
  url.searchParams.set("limit", "1");

  // TODO: cache this to avoid hitting rate limits
  const recentlyPlayed = await fetch(url, {
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenResponse.data.access_token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => RecentlyPlayedSchema.safeParse(response));

  if (!recentlyPlayed.success) {
    console.warn(
      "Recently played has changed shape: ",
      recentlyPlayed.error.toString(),
    );
    return new Response(null, { status: 403 });
  }

  return new Response(JSON.stringify(recentlyPlayed.data.items?.[0]?.track));
};
