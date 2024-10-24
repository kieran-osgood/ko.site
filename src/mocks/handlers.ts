import type { z } from "astro/zod";
import { http, HttpResponse } from "msw";
import type { TokenSchema, RecentlyPlayedSchema } from "src/pages/api/spotify";
import type { StackOverflow } from "src/pages/api/stackoverflow";

export const handlers = [
  http.get("https://api.stackexchange.com/2.2/users/*", () => {
    const result: z.infer<typeof StackOverflow> = {
      items: [
        {
          badge_counts: { bronze: 69, silver: 420, gold: 547 },
          account_id: 7095009,
          is_employee: false,
          last_modified_date: 1673043300,
          last_access_date: 1728734459,
          reputation_change_year: 40,
          reputation_change_quarter: 0,
          reputation_change_month: 0,
          reputation_change_week: 0,
          reputation_change_day: 0,
          reputation: 968,
          creation_date: 1444416602,
          user_type: "registered",
          user_id: 5428936,
          location: "Littlehampton, UK",
          website_url: "",
          link: "https://stackoverflow.com/users/5428936/kieran-osgood",
          profile_image: "https://i.sstatic.net/FjChe.png?s=256",
          display_name: "Kieran Osgood",
        },
      ],
    };
    return HttpResponse.json(result);
  }),

  http.post("https://accounts.spotify.com/api/token", () => {
    const result: z.infer<typeof TokenSchema> = {
      access_token: "token",
    };
    return HttpResponse.json(result);
  }),

  http.get("https://api.spotify.com/v1/me/player/recently-played", () => {
    const result: z.infer<typeof RecentlyPlayedSchema> = {
      items: [
        {
          track: {
            name: "the bad anthem",
            artists: [{ name: "senor badass" }],
            external_urls: { spotify: "spotify.com/track" },
          },
        },
      ],
    };
    return HttpResponse.json(result);
  }),
];
