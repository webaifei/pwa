## 使用web app manifest

> 使用manifest 将我们的应用添加到主屏幕

#### manifest.json

```
{
    "short_name": "AirHorner",
    "name": "Kinlan's AirHorner of Infamy",
    "icons": [
      {
        "src": "launcher-icon-1x.png",
        "type": "image/png",
        "sizes": "48x48"
      },
      {
        "src": "launcher-icon-2x.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "src": "launcher-icon-4x.png",
        "type": "image/png",
        "sizes": "192x192"
      }
    ],
    "start_url": "index.html?launcher=true"
  }

```

参考：  
1. [google 教程](https://developers.google.com/web/fundamentals/web-app-manifest
)

