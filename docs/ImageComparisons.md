# 图像比较

Both GraphicsMagick and ImageMagick support image comparisons which are exposed through gm.compare().

Currently both path1 and path2 must be strings (no Buffers or Streams). Optionally pass a custom tolerance level if 0.4 (the default) is too lax for your use case.

Your callback will be passed four arguments:

```js
gm.compare(path1, path2, function (err, isEqual, equality, raw) {
  if (err) throw err;
  console.log('The images are equal: %s', isEqual);
  console.log('Actual equality: %d', equality)
  console.log('Raw output was: %j', raw);
});
```

You can also output a diff image of the two images by passing a configuration object in place of the tolerance:

```js
var options = {
  highlightColor: 'yellow', // optional. Defaults to red
  file: './diff.png' // required
};
gm.compare(path1, path2, options, function (err) {
  if (err) throw err;
});
```