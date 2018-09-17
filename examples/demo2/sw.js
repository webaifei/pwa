self.addEventListener('install', event => {
    console.log('V1 installing…');

    // cache a cat SVG
    event.waitUntil(
        caches.open('static-v1').then(cache => cache.add('./img/logo-48x48.png'))
    );
});

self.addEventListener('activate', event => {
    clients.claim();
    console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // serve the cat SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
    console.log(url, 'url');
    if (url.origin == location.origin && url.pathname == '/img/logo-192x192.png') {
        event.respondWith(caches.match('/img/logo-48x48.png'));
    }
});