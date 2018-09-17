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



