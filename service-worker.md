# Service Worker

> 被废弃的类似功能： appCache

1. js引擎是单线程的，service worker 是独立的一个线程， 并且无法访问DOM.

## 使用service worker的前置条件

1. 浏览器支持 service worker ， Promise， fetch，caches等

2. 你的网站支持https

## 如何实验

主要是https环境的问题，

1. 本地localhost 或者是 127.0.0.1 是不没有https限制的
2. 想要验证线上环境的话 可以使用github 的 gitpages

## service worker声明周期

### install 安装服务线程

> 在注册service woker成功之后 会启动 服务线程的安装

在注册了service worker脚本之后

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

**注意点：**

注册的service worker脚本 sw.js 所在路径决定了 service worker的控制范围（作用域）；

上面的示例代码中是根目录， 所以当前我们的service worker能够拦截到根域名下所有的请求：

/js/index.js , /assets/css/all.css , /assets/images/logo.png。

如果我们注册的是 /example/sw.js 那么我们只能拦截到 /example/开头的请求

**非本域名下的资源：**

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

![img](./screenshot/install.gif)






