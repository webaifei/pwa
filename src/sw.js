const VERSION = 6;
var cacheName = 'shell-content'+VERSION;
// 如果要添加到缓存中的资源列表中的一个 添加失败了的话 
// 会导致整个缓存添加失败
var filesToCache = [
    "assets/style.css",
    "assets/images/078513e9-5751-a466-0937-7a6dc7589149.png",
    "assets/js/main.js",
    "https://cdn.bootcss.com/jquery/3.3.1/jquery.js",
    // "http://gturnquist-quoters.cfapps.io/api/random" //
];
// install 的时候 添加依赖到缓存
self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    // 
    self.skipWaiting();
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            console.log('cache: ', cache);
            return cache.addAll(filesToCache);
        })
    );
});
// 删除缓存
// 如果是更新sw的话 需要上一个sw控制的tab全部关闭
self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['shell-content'+VERSION];
    console.log('activate');
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            console.log(cacheName, 'cachename');
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

self.addEventListener("fetch", function (event) {
    console.log("fetch");
    console.log(event.request, 'request')
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            console.log(response, 'response')
            // Cache hit - return response
            if (response) {
                return response;
            }

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest, {
                // credentials: 'include'
            }).then(
                function (response) {
                    // Check if we received a valid response
                    // response.type 
                    // baisc => 网站自身发起的请求
                    // cors => 请求第三方的资源
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();
                    // 添加到缓存
                    // caches.open(cacheName)
                    //     .then(function (cache) {
                    //         cache.put(event.request, responseToCache);
                    //     });

                    return response;
                }
            );
        })
    );
})