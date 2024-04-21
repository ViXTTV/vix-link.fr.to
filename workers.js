async function handleRequest(request) {
    const userAgent = request.headers.get('User-Agent') || '';
    if (!userAgent.includes('discord')) {
        return Response.redirect('https://vix.fr.to', 301);
    } else {
    return fetch("https://vix-link.fr.to/iwantyoutojointhediscordservervix.jpg");
}}
  
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
