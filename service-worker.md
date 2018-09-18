# Service Worker

> 被废弃的类似功能： appCache

1. js引擎是单线程的，service worker 是独立的一个线程， 并且无法访问DOM.
2. 注册安装成功之后，可以拦截请求，从而决定是否使用本地缓存进行相应，具有代理的功能。

## 使用service worker的前置条件

1. 浏览器支持 service worker ， Promise， fetch，caches等

2. 你的网站支持https

## 如何实验

主要是https环境的问题，

1. 本地localhost 或者是 127.0.0.1 是不没有https限制的
2. 想要验证线上环境的话 可以使用github 的 gitpages

## service worker使用

#### 1. 注册服务线程

> 在注册service woker成功之后 会启动 服务线程的安装

```
if ('serviceWorker' in navigator) {
  // 在load事件之后开始注册 防止首次加载 影响首屏时间
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
```



```
// 缓存版本
var CACHE_NAME = 'my-site-cache-v1';
// 缓存的资源
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];
//监听启动安装事件
self.addEventListener('install', function(event) {
  // install 成功 缓存资源
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
```

### Activate 准备控制客户端

```
// 监听激活事件
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];
  // clients.claim() 
  // 清除缓存
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

1. 默认情况下 首次注册service worker并安装成功之后到达activate状态 并不会控制当前的页面
2. 如果你想改变这个默认行为，在激活后使用：clients.claim\(\) 

## 拦截请求使用本地缓存

```
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
```



