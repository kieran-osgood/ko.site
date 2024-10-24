import type { APIRoute } from "astro";
import { z } from "astro/zod";

const ROUTE =
  "https://api.stackexchange.com/2.2/users/5428936?site=stackoverflow";

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
