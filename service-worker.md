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


<svg class="lifecycle-diagram register" viewBox="0 0 96.9 73" style="opacity: 1;"><rect ry="15.8" y="10" x="65.4" height="63" width="31.6" class="controlled" style="opacity: 0;"></rect><use xlink:href="#diagram-static"></use><g class="cog cog-new" data-svg-origin="-1.942596197128296 -1.9203526973724365" style="opacity: 0; transform: matrix(1.1187, 0, 0, 1.1187, 1.078, 12.408);"><use height="10" width="10" xlink:href="#diagram-sw" data-svg-origin="11.997791767120361 12" style="transform: matrix3d(-0.990461, 0.13779, 0, 0, -0.13779, -0.990461, 0, 0, 0, 0, 1, 0, 25.5346, 22.2324, 0, 1); transform-origin: 0px 0px 0px;"></use></g><use transform="matrix(.09532 0 0 .09532 71.44 48.39)" xlink:href="#diagram-page" width="10" height="10" class="diagram-page" style="opacity: 1;"></use><path d="M78.6 47.7c-1-6-2-11.6-1.6-17" class="fetch" style="stroke-dashoffset: 8px;"></path><path d="M83 47.5c1.4-5.4 3.3-10.8 2.4-16.2" class="fetch" style="stroke-dashoffset: 8px;"></path><path d="M75.7 47c-2.3-6.3-3.2-12.5-2-18.2" class="fetch" style="stroke-dashoffset: 8px;"></path><path d="M89.5 29.5c.3 6-.4 12-4 18" class="fetch" style="stroke-dashoffset: 8px;"></path><path d="M75.4 30.3c0 4-1 6 2 17.2" class="fetch" style="stroke-dashoffset: 8px;"></path><path d="M86.6 31C88 37 86 42 84 47.4" class="fetch" style="stroke-dashoffset: 8px;"></path><g class="refresh-rotator" data-svg-origin="81.19999694824219 58.099998474121094" style="transform: matrix(1, 0, 0, 1, 0, 0);"><use xlink:href="#diagram-refresh" class="diagram-refresh" data-svg-origin="81.19999694824219 58.099998474121094" style="opacity: 0; transform: matrix(0, 0, 0, 0, 81.2, 58.1); transform-origin: 0px 0px 0px;"></use></g></svg>


