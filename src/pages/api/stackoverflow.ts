import type { APIRoute } from "astro";
import { z } from "astro/zod";

const ROUTE =
  "https://api.stackexchange.com/2.2/users/5428936?site=stackoverflow";

export type StackOverflowStats = {
  badge_counts: Record<"bronze" | "silver" | "gold", number>;
  // account_id: number;
  // is_employee: boolean;
  // last_modified_date: number;
  // last_access_date: number;
  // reputation_change_year: number;
  // reputation_change_quarter: number;
  // reputation_change_month: number;
  // reputation_change_week: number;
  // reputation_change_day: number;
  reputation: number;
  // creation_date: number;
  // user_type: "registered";
  // user_id: number;
  // location: string;
  // website_url: string;
  link: string;
  // profile_image: string;
  // display_name: string;
};

// NOTE: schema are intentionally sparse and missing properties
export const StackOverflow = z.object({
  items: z.array(z.any()),
});

export type StackOverflow = z.infer<typeof StackOverflow>;

const GET: APIRoute & {
  Schema: typeof StackOverflow;
} = async (): Promise<Response> => {
  const response = await fetch(ROUTE, { cache: "force-cache" });

  if (!response.ok) {
    console.error("[GET] stackoverflow failed: ", response);
    return new Response(null, { status: response.status });
  }

  const stackoverflow = StackOverflow.safeParse(await response.json());

  if (!stackoverflow.success) {
    console.error("[GET] stackoverflow data changed: ", stackoverflow.error);
    return new Response(null, { status: 400 });
  }
  return new Response(JSON.stringify(stackoverflow.data));
};

GET.Schema = StackOverflow;

export { GET };
