# 合并

GraphicsMagick supports compositing one image on top of another. This is exposed through `gm.composite()`. Its first argument is an image path with the changes to the base image, and an optional mask image.

Currently, `gm.composite()` only accepts file paths.

    gm.composite(other [, mask])

```js
gm('/path/to/image.jpg')
.composite('/path/to/second_image.jpg')
.geometry('+100+150')
.write('/path/to/composite.png', function(err) {
    if(!err) console.log("Written composite image.");
});
```