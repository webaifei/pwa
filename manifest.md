## 使用web app manifest

> 使用manifest 将我们的应用添加到主屏幕

#### manifest.json

```
{
  "short_name": "51NB-SHORT",
  "name": "51NB",
  "icons": [
    {
      "src": "./images/logo-48x48.png",
      "type": "image/png",
      "sizes": "48x48"
    },
    {
      "src": "./images/logo-96x96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "./images/logo-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    }
  ],
  "display": "standalone",
  "start_url": "index.html?launcher=true"
}
```

注意点：

1. display 属性不能缺少 否则不能添加到主屏幕
2. icon的尺寸必须符合大小

参考：  
1. [google 教程](https://developers.google.com/web/fundamentals/web-app-manifest
)

