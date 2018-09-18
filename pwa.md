# PWA 10分钟入门

### What is PWA?

> PWA\(progress web app\)  
> 1. 渐进增强  
> 2. 让你的web 应用 接近app的体验

### Why should you use PWA now?

> 以下是官方说法

1. Reliable
   * 使用manifest.json 将应用添加到主屏幕 增加用户粘性
   * 利用service worker 实现离线应用
2. Fast
   * 利用service worker 缓存关键资源 让你的应用打开更快 提升用户体验 拒绝loading
3. Engaging
   * 以上两点
   * push api 消息推送

---

### web永远绕不开的宿命：兼容性。

1. manifest  
   ![](/screenshot/web-app-manifets.png)

2. service worker  
   ![](/screenshot/service-worker.png)

3. push api  
   ![](/screenshot/push-api.png)

### 现实不理想，但是不能阻止我们探索^^。

### How to use?

定义你自己的manifest

```

```

### 

### Tips

1. fetch 默认不包含cookie等凭据
   ```
   fetch(url, {
   credentials: 'include'
   })
   ```
2. 非 CORS 默认失败
   ```
   默认情况下，从不支持 CORS 的第三方网址中获取资源将会失败。 您可以向请求中添加 no-CORS 选项来克服此问题，不过这可能会导致“不透明”的响应，这意味着您无法辨别响应是否成功
   ```
3. 添加缓存的资源列表，如果其中一个添加失败会导致整个缓存添加失败。



