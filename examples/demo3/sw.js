self.addEventListener('install', event => {
    console.log('V1 installing…');

    // cache a cat SVG
    event.waitUntil(
        caches.open('static-v1').then(cache => cache.addAll(['./img/logo-48x48.png', './img/logo-192x192.png']))
    );
});
// 默认第一次激活sw之后 不会掌控客户端 即不会拦截客户端的请求 出发fetch事件
self.addEventListener('activate', event => {
    // 通过调用下面的方法 可以在sw激活之后 立即掌控客户端
    // 1. 渐进增强 及时没有sw 也应该正常工作
    // 2. 首次激活的时候 资源未必在cache中
    // clients.claim();
    console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // serve the cat SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
    console.log(url, 'url');
    if (url.origin == location.origin && url.pathname == '/img/logo-192x192.png') {
        event.respondWith(caches.match('/img/logo-96x96.png'));
    }
});