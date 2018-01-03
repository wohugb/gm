# 蒙太奇

GraphicsMagick supports montage for combining images side by side. This is exposed through `gm.montage()`. Its only argument is an image path with the changes to the base image.

当前, `gm.montage()` 只接受文件路径.

    gm.montage(other)

```js
gm('/path/to/image.jpg')
.montage('/path/to/second_image.jpg')
.geometry('+100+150')
.write('/path/to/montage.png', function(err) {
    if(!err) console.log("Written montage image.");
});
```