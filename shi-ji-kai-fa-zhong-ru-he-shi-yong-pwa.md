# ![](/screenshot/coding.jpg)

# 实际产品如何应用PWA

> 虽然PWA 还存在这样或者那样的不足，但是并不妨碍我们拥抱这些牛逼闪闪的特性。



### 实际开发过程中使用PWA面临的问题

1. 稳定健壮的工作线程脚本，包含各个生命周期的事件处理，异常处理，兼容等等，

2. 免去手动填写缓存资源列表的重复性工作

### 使用WorkBox和基于WorkBox的插件

> WorkBox是google构建和维护的用语方便使用PWA 中service worker特性的插件工具

1. webpack 项目使用对应的插件 [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)
2. vue项目如果是使用vue-cli 3以上构建 可以使用内置的插件 当然也可以使用上面的插件



