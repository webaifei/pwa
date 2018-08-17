var cacheName = 'shell-content';
var filesToCache = [
  "assets/styles.css",
  "assets/images/078513e9-5751-a466-0937-7a6dc7589149.png",
  "assets/js/main.js"
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});