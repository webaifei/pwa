# Service Worker生命周期





**注意点：**

注册的service worker脚本 sw.js 所在路径决定了 service worker的控制范围（作用域）；

上面的示例代码中是根目录， 所以当前我们的service worker能够拦截到根域名下所有的请求：

/js/index.js , /assets/css/all.css , /assets/images/logo.png。

如果我们注册的是 /example/sw.js 那么我们只能拦截到 /example/开头的请求

**非本域名下的资源：**
