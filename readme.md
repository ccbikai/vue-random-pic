# Vue 随机图片插件
Vue 的随机图片插件， 图片来自 [https://unsplash.it](https://unsplash.it)

## 使用方法:
JS:

```js
var vueRandomPic = require('vue-random-pic');
Vue.use(vueRandomPic, 'http://xxx.com');// 可传入你的镜像网站地址
```

HTML:

```
<img src="{{ picLink | randomPic 320 400 }}">
```

**后边的两个数字为宽高**
