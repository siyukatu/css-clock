export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (path === "/time.css") {
    return new Response(res, {
      status: 200,
      headers: {
        "Content-Type": "text/css",
        "Cache-Control": "no-store",
      },
    });
  }
  return await context.next();
}
