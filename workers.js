async function handleRequest(request) {
    const userAgent = request.headers.get('User-Agent') || '';
    if (!userAgent.includes('discord')) {
        return Response.redirect('https://blog.flky.dev', 301);
    } else {
    return fetch("https://discordredirect.flky.dev/demo.jpeg");
}}
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  