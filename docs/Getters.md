# 获取器

All getters have the same signature:

```js
gm("image.png").size(function(err, value){
  // note : value may be undefined
})
```

* size - returns the size (WxH) of the image
* format - returns the image format (gif, jpeg, png, etc)
* depth - returns the image color depth
* color - returns the number of colors
* res - returns the image resolution
* filesize - returns image filesize
* identify - returns all image data available
* orientation - returns the EXIF orientation of the image
