# 使用PWA注意点

1. **注意注册工作线程脚本的地址 会影响工作线程的作用范围。**

   注册的service worker脚本 sw.js 所在路径决定了 service worker的控制范围（作用域）；

   上面的示例代码中是根目录， 所以当前我们的service worker能够拦截到根域名下所有的请求：

   /js/index.js , /assets/css/all.css , /assets/images/logo.png。

   如果我们注册的是 /example/sw.js 那么我们只能拦截到 /example/开头的请求

   > 尤其是你的项目是在同一域名下的不同路径下，尤其注意相互之间影响

   _可将我们的工作线程脚本放到对应的项目部署目录的目录下。_

2. **不要给工作线程脚本设置缓存**  
   虽然大多数的浏览器都会忽略工作线程脚本的缓存设置，但是以防不测，还是不要设置缓存

3. **为了首次加载的性能，请将工作线程的注册 放到load事件中**

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

4. **如果没有把握 请不要使用self.skipWaiting**  
   使用skipWaiting 会使新的工作线程立即激活接管页面。试想：  
   如果用户之前打开的页面中进行了一些操作，然后激活的新工作线程可能会加载新的脚本资源来处理老的数据，这可能会导致异常，尤其是单页应用中，我们的数据都放到了客户端内存中。

5. **在安装过程中你要添加的任意一个资源请求事变 都会导致线程安装失败**

   ```
   //install
   // if ./img/logo-192x192.png not existed installing will fail
    event.waitUntil(
        caches.open(cacheVersion).then(cache => cache.addAll(['./img/logo-48x48.png', './img/logo-192x192.png']))
    );
   ```

6. **fetch 默认不包含cookie等凭据**  
    你可以通过添加 credentials: 'include'来修改这一个默认行为

   ```
        fetch(url, {
            credentials: 'include'
        })
   ```

7. **非 CORS 默认失败**

   默认情况下，从不支持 CORS 的第三方网址中获取资源将会失败。 您可以向请求中添加 no-CORS 选项来克服此问题，不过这可能会导致“不透明”的响应，这意味着你无法确认是否真的请求成功

   ```
    cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
        return new Request(urlToPrefetch, { mode: 'no-cors' });
    })).then(function() {
        console.log('All resources have been fetched and cached.');
    });
   ```

   关于CORS TIPS:

   * [CORS 阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)
   * [MDN 规范](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)



