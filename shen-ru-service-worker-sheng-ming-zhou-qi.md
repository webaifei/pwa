# Service Worker生命周期

![](/screenshot/life-circle.gif)

install-&gt; wating-&gt;activate

#### 第一次

安装完成

1. 针对每一个工作线程 install事件只执行一次。每一个工作线程是由浏览器当前tab管理的（现代浏览器中基本上每一个tab都是一个独立的进程）。
2. 一般在install中 添加我们的缓存
3. 缓存资源失败 会导致install失败 从而导致服务线程

进入激活

1. 收到activate事件，并不意味着马上可义控制当前的页面。默认情况下首次接收到activate事件，不会控制页面，也就是你并不能拦截到页面中的请求。
2. 可以调用clients.claim 来控制客户端。但是强烈不建议这样做。原因有两个：
   1. 考虑到首次加载性能，一般要把注册工作线程放到 onload事件中。这样，基本上所有的资源都已经被加载完成了（除了通过用户交互异步出发的请求）
   2. PWA 本身强调渐进增强，及时没有本地缓存，你的应用也应该能正常使用。



#### 更新

当出现以下情况时候 会触发线程的更新机制

1. 刷新页面
2. 导航到其他的页面，并且触发了 navigation request（前端路由 h5 history模式并不会发起请求）
3. 更新push或者sync事件
4. 调用register 注册的线程脚本地址发生了改变


**注意点：**

注册的service worker脚本 sw.js 所在路径决定了 service worker的控制范围（作用域）；

上面的示例代码中是根目录， 所以当前我们的service worker能够拦截到根域名下所有的请求：

/js/index.js , /assets/css/all.css , /assets/images/logo.png。

如果我们注册的是 /example/sw.js 那么我们只能拦截到 /example/开头的请求

**非本域名下的资源：**

