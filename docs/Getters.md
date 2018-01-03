# 获取器

所有的获取器都有相同的签名:

```js
gm("image.png").size(function(err, value){
  // 注意 : 值可能为 undefined
})
```

* size - 图像宽高 (WxH)
* format - 格式 (gif, jpeg, png, etc)
* depth - 颜色深度
* color - 颜色数
* res - 分辨率
* filesize - 文件大小
* identify - 数据可用性
* orientation - EXIF方向
