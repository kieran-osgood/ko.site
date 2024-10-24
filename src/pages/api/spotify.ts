import type { APIRoute } from "astro";
import { z } from "astro/zod";

const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played";
const REFRESH_ENDPOINT = "https://accounts.spotify.com/api/token";

const authOptions = new URLSearchParams({
  grant_type: "refresh_token",
  refresh_token: import.meta.env.SPOTIFY_WEB_API_REFRESH_TOKEN,
});

// NOTE: these schemas are intentionally sparse and missing properties
export const Track = z.object({
  artists: z.array(z.object({ name: z.string() })),
  external_urls: z.object({ spotify: z.string() }),
  name: z.string(),
});

export type Track = z.infer<typeof Track>;

export const Tokens = z.object({
  access_token: z.z.string(),
});
type Tokens = z.infer<typeof Tokens>;

export const RecentlyPlayed = z.object({
  items: z.array(z.object({ track: Track })),
});
type RecentlyPlayed = z.infer<typeof RecentlyPlayed>;

type SuccessOrError<T> = [null, error: Response] | [result: T, null];

async function fetchToken(): Promise<SuccessOrError<Tokens>> {
  const tokenResponse = await fetch(REFRESH_ENDPOINT, {
    method: "POST",
    body: authOptions.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: import.meta.env.SPOTIFY_AUTHORIZATION,
    },
  });

  if (tokenResponse.ok === false) {
    console.error(`[${fetchToken.name}][FetchFail] !ok: `, tokenResponse);
    return [null, new Response(null, { status: tokenResponse.status })];
  }

  const result = Tokens.safeParse(await tokenResponse.json());

  if (result.success === false) {
    console.error(
      `[${fetchToken.name}][SchemaFail] !success: `,
      result.error.format(),
    );
    return [null, new Response(null, { status: 401 })];
  }

  return [result.data, null];
}

async function fetchRecentlyPlayed(
  tokens: Tokens,
): Promise<SuccessOrError<RecentlyPlayed>> {
  const url = new URL(RECENTLY_PLAYED_ENDPOINT);
  url.searchParams.set("limit", "1");

  const recentlyPlayedResponse = await fetch(url, {
    method: "get",
    headers: { Authorization: `Bearer ${tokens.access_token}` },
  });

  if (recentlyPlayedResponse.ok === false) {
    console.error(
      `[${fetchRecentlyPlayed.name}][FetchFail] !ok: `,
      recentlyPlayedResponse,
    );
    return [
      null,
      new Response(null, { status: recentlyPlayedResponse.status }),
    ];
  }

  const recentlyPlayedResult = RecentlyPlayed.safeParse(
    await recentlyPlayedResponse.json(),
  );

  if (recentlyPlayedResult.success === false) {
    console.error(
      `[${fetchRecentlyPlayed.name}][SchemaFail] !success: `,
      recentlyPlayedResult.error.format(),
    );
    return [null, new Response(null, { status: 403 })];
  }

  return [recentlyPlayedResult.data, null];
}

type GET = APIRoute & { Schema: typeof Track };
/** 
    Access tokens only last for 1hour so no use storing them in env
    Instead we just request new access_token when we need the spotify data
    as we don't want to store the tokens client side (allows users to view my data)
 */
const GET: GET = async () => {
  const [tokens, tokenError] = await fetchToken();
  if (tokenError) {
    return tokenError;
  }

  const [recentlyPlayed, recentlyPlayedError] =
    await fetchRecentlyPlayed(tokens);
  if (recentlyPlayedError) {
    return recentlyPlayedError;
  }

  return new Response(JSON.stringify(recentlyPlayed.items?.[0]?.track));
};

GET.Schema = Track;

export { GET };
