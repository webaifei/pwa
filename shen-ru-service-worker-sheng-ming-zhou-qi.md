# Service Worker生命周期

![](/screenshot/life-circle.gif)

install-&gt; wating-&gt;activate

#### 第一次

1. 针对每一个工作线程 install事件只执行一次。每一个工作线程是由浏览器当前tab管理的（现代浏览器中基本上每一个tab都是一个独立的进程）。
2. 一般在install中 添加我们的缓存
3. 缓存资源失败 会导致install失败 从而导致服务线程

#### 更新

**注意点：**

注册的service worker脚本 sw.js 所在路径决定了 service worker的控制范围（作用域）；

上面的示例代码中是根目录， 所以当前我们的service worker能够拦截到根域名下所有的请求：

/js/index.js , /assets/css/all.css , /assets/images/logo.png。

如果我们注册的是 /example/sw.js 那么我们只能拦截到 /example/开头的请求

**非本域名下的资源：**

