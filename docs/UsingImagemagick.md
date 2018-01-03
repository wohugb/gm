# 使用 IMAGEMAGICK

Subclass `gm` 来启用 ImageMagick

```js
var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

// resize and remove EXIF profile data
gm('/path/to/my/img.jpg')
.resize(240, 240)
...
```

We have compatibility with ImageMagick too. Just subclass the gm constructor passing the imageMagick option.

```js
var imageMagick = gm.subClass({ imageMagick: true });
```

```js
imageMagick("img.png").autoOrient().write('/path', callback);
```

IMAGEMAGICK OPTIONS

Unlike GraphicsMagick, ImageMagick supports the WebP format. However, you must compile ImageMagick with the WebP option. To do so on OS X, install ImageMagick with the following command using Homebrew:

brew install imagemagick --with-webp
If you have already installed ImageMagick, you would have to uninstall it then reinstall it.