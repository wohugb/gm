## gm的实现

```js
// composite

/**
 * Composite images together using the `composite` command in graphicsmagick.
 *
 * gm('/path/to/image.jpg')
 * .composite('/path/to/second_image.jpg')
 * .geometry('+100+150')
 * .write('/path/to/composite.png', function(err) {
 *   if(!err) console.log("Written composite image.");
 * });
 *
 * @param {String} other  Path to the image that contains the changes.
 * @param {String} [mask] Path to the image with opacity informtion. Grayscale.
 */

module.exports = exports = function(proto) {
    proto.composite = function(other, mask) {
        this.in(other);

        // If the mask is defined, add it to the output.
        if(typeof mask !== "undefined")
            this.out(mask);

        this.subCommand("composite");

        return this;
    }
}
```

## stackoverflow 答案

```js
var gm = require('gm');

gm()
  .in('-page', '+0+0')
  .in('bg.jpg')
  .in('-page', '+10+20') // location of smallIcon.jpg is x,y -> 10, 20
  .in('smallIcon.jpg')
  .mosaic()
  .write('tesOutput.jpg', function (err) {
    if (err) console.log(err);
  });
```