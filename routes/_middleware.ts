import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 541,
  site: "yuca",
  domains: ["yuca.deco.site"],
});