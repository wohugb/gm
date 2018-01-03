### 自定义标识格式字符串

When identifying an image, you may want to use a custom formatting string instead of using `-verbose`, which is quite slow.
You can use your own [formatting string](http://www.imagemagick.org/script/escape.php) when using `gm().identify(format, callback)`.
For example,

```js
gm('img.png').format(function (err, format) {

})

// is equivalent to

gm('img.png').identify('%m', function (err, format) {

})
```

since `%m` is the format option for getting the image file format.