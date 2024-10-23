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
  // TODO: cache this to avoid hitting rate limits
  const stackOverflowResponse = await fetch(ROUTE, { cache: "force-cache" });

  if (!stackOverflowResponse.ok) {
    console.error("[GET] stackoverflow failed: ", stackOverflowResponse);
    return new Response(null, { status: stackOverflowResponse.status });
  }

  const result = StackOverflow.safeParse(stackOverflowResponse);
  if (!result.success) {
    console.error("[GET] stackoverflow data changed: ", result.error);
    return new Response(null, { status: 400 });
  }

  return new Response(JSON.stringify(result.data));
};

GET.Schema = StackOverflow;

export { GET };
