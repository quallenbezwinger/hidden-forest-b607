addEventListener("fetch", event => {
  event.respondWith(doRedirects(event.request))
})

const newLocationHost = "developers.cloudflare.com/workers/about/";

async function doRedirects(request) {
  let reqUA = request.headers.get('user-agent')
  console.log(`Request US from city: ${reqUA}`);
    if (reqUA.match('curl')!=null) {
      let newLocation = "https://"+newLocationHost
      return Response.redirect(newLocation, 302)
    }
  return fetch(request);
}