export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  const assetResponse = await context.env.ASSETS.fetch(context.request);
  const res = await assetResponse.text().replace("{{time}}", Date.now());
  return new Response(res, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
  });
}
