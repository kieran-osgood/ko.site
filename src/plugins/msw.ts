function createHooks() {
  if (process.env.NODE_ENV !== "development") {
    return {};
  }

  const node = import("../mocks/node");

  return {
    "astro:server:setup": async () => {
      const { server } = await node;
      server.listen();
    },
    "astro:server:done": async () => {
      const { server } = await node;
      server.close();
    },
  };
}
export function msw() {
  return {
    name: "msw",
    hooks: createHooks(),
  };
}
