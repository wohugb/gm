# 缓冲器

```js
// A buffer can be passed instead of a filepath as well
var buf = require('fs').readFileSync('/path/to/image.jpg');

gm(buf, 'image.jpg')
.noise('laplacian')
.write('/path/to/out.jpg', function (err) {
  if (err) return handle(err);
  console.log('Created an image from a Buffer!');
});

/*
A buffer can also be returned instead of a stream
The first argument to toBuffer is optional, it specifies the image format
*/
gm('img.jpg')
.resize(100, 100)
.toBuffer('PNG',function (err, buffer) {
  if (err) return handle(err);
  console.log('done!');
})
```