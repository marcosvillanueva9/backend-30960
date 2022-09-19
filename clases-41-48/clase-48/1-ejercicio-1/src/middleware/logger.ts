import type { Context } from "../../deps.ts";

export const logger = async (ctx: Context, next: () => any) => {
  await next();
  const body = await ctx.request.body().value;
  const params = body ? `with params ${JSON.stringify(body)}` : "";
  console.log(`${ctx.request.method} request to ${ctx.request.url} ${params}`);
};
