# 基础用法

```js
// 引入组件
var fs = require('fs')
  , gm = require('gm');
```

???+ info "调整和删除EXIF配置文件数据"

    ```js
    gm('/path/to/my/img.jpg')
    .resize(240, 240)
    .noProfile()
    .write('/path/to/resize.png', function (err) {
      if (!err) console.log('done');
    });
    ```

???+ info "忽略纵横比"

    ```js
    // some files would not be resized appropriately
    // http://stackoverflow.com/questions/5870466/imagemagick-incorrect-dimensions
    // you have two options:
    // use the '!' flag to ignore aspect ratio
    gm('/path/to/my/img.jpg')
    .resize(240, 240, '!')
    .write('/path/to/resize.png', function (err) {
      if (!err) console.log('done');
    });

    // use the .resizeExact with only width and/or height arguments
    gm('/path/to/my/img.jpg')
    .resizeExact(240, 240)
    .write('/path/to/resize.png', function (err) {
      if (!err) console.log('done');
    });
    ```

???+ info "获取图像的大小"

    ```js
    gm('/path/to/my/img.jpg')
    .size(function (err, size) {
      if (!err)
        console.log(size.width > size.height ? 'wider' : 'taller than you');
    });
    ```

???+ info "输出所有可用的图像属性"

    ```js
    gm('/path/to/img.png')
    .identify(function (err, data) {
      if (!err) console.log(data)
    });
    ```

???+ info "拉出动画GIF的第一帧，并保存为PNG"

    ```js
    gm('/path/to/animated.gif[0]')
    .write('/path/to/firstframe.png', function (err) {
      if (err) console.log('aaw, shucks');
    });
    ```

???+ info "自动定位图像"

    ```js
    gm('/path/to/img.jpg')
    .autoOrient()
    .write('/path/to/oriented.jpg', function (err) {
      if (err) ...
    })
    ```

???+ info "疯狂的小镇"

    ```js
    gm('/path/to/my/img.jpg')
    .flip()
    .magnify()
    .rotate('green', 45)
    .blur(7, 3)
    .crop(300, 300, 150, 130)
    .edge(3)
    .write('/path/to/crazy.jpg', function (err) {
      if (!err) console.log('crazytown has arrived');
    })
    ```

???+ info "注释一个图像"

    ```js
    gm('/path/to/my/img.jpg')
    .stroke("#ffffff")
    .drawCircle(10, 10, 20, 10)
    .font("Helvetica.ttf", 12)
    .drawText(30, 20, "GMagick!")
    .write("/path/to/drawing.png", function (err) {
      if (!err) console.log('done');
    });
    ```

???+ info "创造一个形象"

    ```js
    gm(200, 400, "#ddff99f3")
    .drawText(10, 50, "from scratch")
    .write("/path/to/brandNewImg.jpg", function (err) {
      // ...
    });
    ```