# 比较

Graphicsmagicks `compare` command is exposed through `gm.compare()`. This allows us to determine if two images can be considered "equal".

Currently `gm.compare` only accepts file paths.

    gm.compare(path1, path2 [, options], callback)

```js
gm.compare('/path/to/image1.jpg', '/path/to/another.png', function (err, isEqual, equality, raw, path1, path2) {
  if (err) return handle(err);

  // if the images were considered equal, `isEqual` will be true, otherwise, false.
  console.log('The images were equal: %s', isEqual);

  // to see the total equality returned by graphicsmagick we can inspect the `equality` argument.
  console.log('Actual equality: %d', equality);

  // inspect the raw output
  console.log(raw);

  // print file paths
  console.log(path1, path2);
})
```

You may wish to pass a custom tolerance threshold to increase or decrease the default level of `0.4`.


```js
gm.compare('/path/to/image1.jpg', '/path/to/another.png', 1.2, function (err, isEqual) {
  ...
})
```

To output a diff image, pass a configuration object to define the diff options and tolerance.


```js
var options = {
  file: '/path/to/diff.png',
  highlightColor: 'yellow',
  tolerance: 0.02
}
gm.compare('/path/to/image1.jpg', '/path/to/another.png', options, function (err, isEqual, equality, raw) {
  ...
})
```

## 图像比较

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