# 操作

## A

??? note "adjoin"
    ```js
    gm("img.png").adjoin()
    ```

??? note "affine"
    ```js
    gm("img.png").affine(matrix)
    ```

??? note "antialias"
    所有图片默认是 anti-aliased by GraphicsMagick. To disable it pass false.
    ```js
    gm("img.png").antialias(false)
    ```

???+ danger "append - 附加一组图像"
    参数

    * img
        * 另一张图片地址

    * ltr (可选)
        * Boolean - 指定附加位置
        * true 是 left-to-right 左到右
        * false 是 top-to-bottom (默认上到下)

    ```js
      gm("img.png").append(img [, img, ltr])

      // appends another.jpg to img.png from left-to-right
      gm("img.png").append("another.jpg").append(true)

      // appends another.jpg to img.png from left-to-right
      gm("img.png").append("another.jpg", true)

      // appends another.jpg to img.png from top-to-bottom
      gm("img.png").append("another.jpg")

      // appends third.gif below another.jpg below img.png
      gm("img.png").append("another.jpg").append("third.gif")

      // appends third.gif below another.jpg below img.png
      gm("img.png").append("another.jpg", "third.gif")

      // appends third.gif to the right of another.jpg to the right to img.png
      gm("img.png").append("another.jpg", "third.gif", true)
    ```

??? note "authenticate"

    ```js
      gm("img.png").authenticate(password)
    ```

??? note "autoOrient"
    Auto-orients the image according to its EXIF data.
    GraphicsMagick doesn't actually have the -auto-orient option but we emulate this by first reading the EXIF data and rotate/flip from there.

    ```js
      gm("img.jpg").autoOrient()
    ```

??? note "average"
    ```js
    gm("img.png").average()
    ```

## B

??? note "backdrop"
    ```js
    gm("img.png").backdrop()
    ```

??? note "bitdepth"
    Specifies the number of bits of color to preserve in the image. See the docs for more detail.
    ```js
    gm("img.png").bitdepth(bits)
    ```

??? note "blackThreshold"
    pixels below `threshold` become black.
    ```js
    gm("img.png").blackThreshold(red [,green] [,blue] [,opacity])
    ```

??? note "bluePrimary"
    ```js
    gm("img.png").bluePrimary(x, x)
    ```

??? note "blur"
    Accepts a radius and optional sigma (standard deviation).
    ```js
    gm("img.png").blur(radius [, sigma])
    ```

??? note "border"
    ```js
    gm("img.png").border(width, height)
    ```

??? note "borderColor"
    ```js
    gm("img.png").borderColor(color)
    ```

??? note "box"
    ```js
    gm("img.png").box(color)
    ```

## C

??? note "channel"
    type
      Red, Green, Blue, Opacity, Matte, Cyan, Magenta, Yellow, Black, or Gray
    ```js
    gm("img.png").channel(type)
    ```

??? note "charcoal"
    Simulates a charcoal drawing. Accepts a factor.
    ```js
    gm("img.png").charcoal(factor)
    ```

??? note "chop"
    Removes pixels from the interior of an image.
    ```js
    gm("img.png").chop(width, height, x, y)
    ```

??? note "clip"
    ```js
    gm("img.png").clip()
    ```
??? note "coalesce"
    ```js
    gm("img.png").coalesce()
    ```

??? note "colorize"
    Colorize the image with optionally separate red, green, and blue values.
    ```js
    gm("img.png").colorize(red [, green [, blue]])
    ```
??? note "colorMap"
    type
      shared or private
    ```js
    gm("img.png").colorMap(type)
    ```

??? note "colors"
    Sets the preferred number of colors for the image (color reduction).
    ```js
    gm("img.png").colors(int)
    ```

??? note "colorspace"
    Specifies the type of colorspace. See the GraphicsMagick docs for val details.
    ```js
    gm("img.png").colorspace(val)
    ```

??? note "compose"
    ```js
    gm("img.png").compose(operator)
    ```

??? note "compress"
    type
    None, BZip, Fax, Group4, JPEG, Lossless, LZW, RLE, Zip, or LZMA
    ```js
    gm("img.png").compress(type)
    ```
??? note "comment"
    Annotates an image. See the docs for more info.
    ```js
    gm("img.png").comment(text|format)
    ```

??? note "contrast"
    Increases or reduces the image contrast. Accepts a multiplier.
    ```js
    gm("img.png").contrast([+-]multiplier)
    ```

??? note "convolve"
    ```js
    gm("img.png").convolve(kernel)
    ```
??? note "createDirectories"
    ```js
    gm("img.png").createDirectories()
    ```

??? note "crop"
    Crops the image to the given width and height at the given x and y position.
    ```js
    gm("img.png").crop(width, height, x, y)
    ```

??? note "cycle"
    Displace the image colormap by amount. amount is the number of positions each colormap entry is shifted.
    ```js
    gm("img.png").cycle(amount)
    ```
## D

??? note "deconstruct"
    ```js
    gm("img.png").deconstruct()
    ```

??? note "define"
    ```js
    gm("img.png").define()
    ```

??? note "delay"
    `amount` is in hundreths of a second.
    ```js
    gm("img.png").delay(amout)
    ```

??? note "density"
    This option specifies the image resolution to store while encoding a raster image or the canvas resolution while rendering (reading) vector formats into an image.
    ```js
    gm("img.png").density(width, height)
    ```

??? note "despeckle"
    Reduces the speckles within the image.
    ```js
    gm("img.png").despeckle()
    ```

??? note "displace"
    Shift image pixels as defined by a displacement map.
    ```js
    gm("img.png").displace(horizontal, vertical)
    ```

??? note "display"
    ```js
    gm("img.png").display(value)
    ```

??? note "dispose"
    ```js
    gm("img.png").dispose(method)
    ```

??? note "dissolve"
    ```js
    gm("img.png").dissolve(method)
    ```

??? note "dither"
    Applies Floyd/Steinberg error diffusion to the image. Pass false to disable dithering.
    Note: either .colors() or .monochrome() must be used for this to take effect.
    ```js
    gm("img.png").dither([bool])
    ```

## E

??? note "edge"
    Emphasizes edges in an image. Takes an optional radius of the emphasis to apply.
    ```js
    gm("img.png").edge([radius])
    ```

??? note "emboss"
    Embosses the image. Takes an optional radius.
    ```js
    gm("img.png").emboss([radius])
    ```

??? note "encoding"
    type
    AdobeCustom, AdobeExpert, AdobeStandard, AppleRoman, BIG5, GB2312, Latin 2, None, SJIScode, Symbol, Unicode, Wansung
    gm("img.png").encoding(type)
    ```

??? note "endian"
    type
    MSB, LSB, or Native
    ```js
    gm("img.png").endian(type)
    ```

??? note "enhance"
    Enhances the image.
    ```js
    gm("img.png").enhance()
    ```

??? note "equalize"
    Performs histogram equalization to the image.
    ```js
    gm("img.png").equalize()
    ```

??? note "extent"
    composite image on background color canvas image.
    ```js
    gm("img.png").extent([width, height, options])
    ```

## F

??? note "file"
    ```js
    gm("img.png").file(filename)
    ```

??? note "filter"
    Specifies the filter to use when resizing. see link for available types.
    ```js
    gm("img.png").filter(type)
    ```

??? note "flatten"
    ```js
    gm("img.png").flatten()
    ```

??? note "flip"
    Creates a mirror image (vertically).
    ```js
    gm("img.png").flip()
    ```

??? note "flop"
    Creates a mirror image (horizontally).
    ```js
    gm("img.png").flop()
    ```

??? note "foreground"
    ```js
    gm("img.png").foreground(color)
    ```

??? note "frame"
    ```js
    gm("img.png").frame(width, height, outerBevelWidth, innerBevelWidth)
    ```

??? note "fuzz"
    ```js
    gm("img.png").fuzz(distance [,percent])
    ```

## G

??? note "gamma"
    Adjusts the level of gamma correction.
    ```js
    gm("img.png").gamma(r, g, b)
    ```

??? note "gaussian"
    ```js
    gm("img.png").gaussian(radius [,sigma])
    ```

??? note "geometry"
    ```js
    gm("img.png").geometry(width, height [,arg])
    ```

??? note "greenPrimary"
    ```js
    gm("img.png").greenPrimary(x, y)
    ```

??? note "gravity"
    The direction the primitive gravitates to when annotating the image. Defaults to NorthWest.
    direction
    NorthWest|North|NorthEast|West|Center|East|SouthWest|South|SouthEast
    ```js
    gm("img.png").gravity(direction)
    ```

## H

??? note "highlightColor"
    ```js
    gm("img.png").highlightColor(color)
    ```

??? note "highlightStyle"
    ```js
    gm("img.png").highlightStyle(color)
    ```

## I

??? note "iconGeometry"
    ```js
    gm("img.png").iconGeometry(geometry)
    ```

??? note "implode"
    Implodes the image pixels around the center. Takes an optional factor.
    ```js
    gm("img.png").implode([factor])
    ```

??? note "intent"
    type
    Absolute, Perceptual, Relative, or Saturation
    ```js
    gm("img.png").intent(type)
    ```

??? note "interlace"
    Specifies the type of interlacing scheme. Defaults to None.

    type
    None|Line|Plane|Partition
    ```js
    gm("img.png").interlace(type)
    ```

## L

??? note "label"
    Assigns a label to an image.
    ```js
    gm("img.png").label(name)
    ```

??? note "lat"
    ```js
    gm("img.png").lat(width, height, offset [,percent])
    ```

??? note "level"
    ```js
    gm("img.png").level(blackPoint, gamma, whitePoint [,percent])
    ```

??? note "limit"
    Sets resource limits.

    type
    disk|file|map|memory|pixels|threads
    val
    follows the same rules as specified in the GraphicsMagick docs
    ```js
    gm("img.png").limit(type, val)
    ```

??? note "list"
    type
    Color, Delegate, Format, Magic, Module, Resource, or Type
    ```js
      gm("img.png").list(type)
    ```

??? note "log"
    Specify format for debug log. 详情请参阅文档。
    ```js
    gm("img.png").log(format)
    ```

??? note "loop"
    详情请参阅文档。
    ```js
    gm("img.png").loop(iterations)
    ```

??? note "lower"
    Creates a pseudo 3D lowering effect of the images edges.
    ```js
    gm("img.png").lower(width, height)
    ```

## M

??? note "magnify"
    Magnifies the image factor times.
    ```js
    gm("img.png").magnify(factor)
    ```

??? note "map"
    详情请参阅文档。
    ```js
    gm("img.png").map(filename)
    ```

??? note "mask"
    详情请参阅文档。
    ```js
    gm("img.png").mask(filename)
    ```

??? note "matte"
    详情请参阅文档。
    ```js
    gm("img.png").matte()
    ```

??? note "matteColor"
    详情请参阅文档。
    ```js
    gm("img.png").matteColor(color)
    ```

??? note "maximumError"
    详情请参阅文档。
    ```js
    gm("img.png").maximumError(limit)
    ```

??? note "median"
    Applies a median filter to the image. The optional param radius adjusts the weight of the effect.
    ```js
    gm("img.png").median([radius])
    ```

??? note "minify"
    Minifies the image factor times.
    ```js
    gm("img.png").minify(factor)
    ```

??? note "mode"
    详情请参阅文档。
    ```js
    gm("img.png").mode(value)
    ```

??? note "modulate"
    Varies the brightness, saturation, and hue of the image.
    ```js
    gm("img.png").modulate(b [, s [, h]])
    ```

??? note "monitor"
    详情请参阅文档。
    ```js
    gm("img.png").monitor()
    ```

??? note "monochrome"
    Transforms the image to black and white.
    ```js
    gm("img.png").monochrome()
    ```

??? note "morph"
    Morphs two images together.


??? note "otherImg"
    the path to another img

??? note "outName"
    the path where the image will be saved

??? note "callback"
    A function to be executed when morphing is complete. callback will be passed the standard args that .write() receives.
    ```js
    gm("img.png").morph(otherImg, outName, callback)
    ```

??? note "mosaic"
    详情请参阅文档。
    ```js
    gm("img.png").mosaic()
    ```

??? note "motionBlur"
    详情请参阅文档。
    ```js
    gm("img.png").motionBlur(radius [, sigma, angle])
    ```

## N

??? note "name"
    详情请参阅文档。
    ```js
    gm("img.png").name()
    ```

??? note "negative"
    Replaces every pixel with its complementary color.
    ```js
    gm("img.png").negative()
    ```

??? note "noise"
    Add or reduce noise in the image.
    adius|type
    To add noise pass one of the following:
    uniform
    gaussian
    multiplicative
    impulse
    laplacian
    poisson
    Otherwise the argument will be interpreted as a radius which adjusts the weight of the effect.
    ```js
    gm("img.png").noise(radius|type)
    ```

??? note "noop"
    详情请参阅文档。
    ```js
    gm("img.png").noop()
    ```

??? note "normalize"
    详情请参阅文档。
    ```js
    gm("img.png").normalize()
    ```

## O

??? note "opaque"
    详情请参阅文档。
    ```js
    gm("img.png").opaque(color)
    ```

??? note "operator"
    详情请参阅文档。
    ```js
    gm("img.png").operator(channel, operator, rvalue [,percent])
    ```

??? note "orderedDither"
    详情请参阅文档。
    ```js
    gm("img.png").orderedDither(channelType, NxN)
    ```

??? note "outputDirectory"
    详情请参阅文档。
    ```js
    gm("img.png").outputDirectory(channelType, NxN)
    ```

## P

??? note "page"
    详情请参阅文档。
    ```js
    gm("img.png").page(width, height [,arg])
    ```

??? note "pause"
    详情请参阅文档。
    ```js
    gm("img.png").pause(seconds)
    ```

??? note "pen"
    详情请参阅文档。
    ```js
    gm("img.png").pen(color)
    ```

??? note "ping"
    详情请参阅文档。
    ```js
    gm("img.png").ping()
    ```

??? note "pointSize"
    详情请参阅文档。
    ```js
    gm("img.png").pointSize(value)
    ```

??? note "noProfile"
    Removes EXIF, ICM, etc profile data.
    ```js
    gm("img.png").noProfile()
    ```

??? note "preview"
    type
    See the docs for valid types.
    ```js
    gm("img.png").preview(type)
    ```

??? note "paint"
    Simulates an oil painting.
    ```js
    gm("img.png").paint(radius)
    ```

??? note "process"
    详情请参阅文档。
    ```js
    gm("img.png").process(command)
    ```

??? note "profile"
    详情请参阅文档。
    ```js
    gm("img.png").profile(filename)
    ```

??? note "progress"
    详情请参阅文档。
    ```js
    gm("img.png").progress()
    ```

??? note "randomThreshold"
    详情请参阅文档。
    ```js
    gm("img.png").randomThreshold(channelType, LOWxHIGH)
    ```

## Q

??? note "quality"
    Adjusts the jpeg|miff|png|tiff compression level. val ranges from 0 to 100 (best).
    ```js
    gm("img.png").quality(val)
    ```

## R

??? note "raise"
    Creates a pseudo 3D raising effect of the images edges.
    ```js
    gm("img.png").raise(width, height)
    ```

??? note "recolor"
    详情请参阅文档。
    ```js
    gm("img.png").recolor(matrix)
    ```

??? note "redPrimary"
    详情请参阅文档。
    ```js
    gm("img.png").redPrimary(x, y)
    ```

??? note "region"
    Specifies that all following methods only apply to the area specified by width, height, x, y.
    ```js
    gm("img.png").region(width, height, x, y).sepia()
    ```
    In this case, the sepia effect would only be applied within the area specified by width, height, x, y.

??? note "remote"
    详情请参阅文档。
    ```js
    gm("img.png").remote()
    ```

??? note "render"
    详情请参阅文档。
    ```js
    gm("img.png").render()
    ```

??? note "repage"
    详情请参阅文档。
    ```js
    gm("img.png").repage(width, height, xoff, yoff, arg)
    ```

## S

??? note "sample"
    详情请参阅文档。
    ```js
    gm("img.png").sample(geometry)
    ```

??? note "samplingFactor"
    详情请参阅文档。
    ```js
    gm("img.png").samplingFactor(horizontalFactor, verticalFactor)
    ```

??? note "rawSize"
    详情请参阅文档。
    ```js
    gm("img.png").rawSize(width, height, offset)
    ```

??? note "resample"
    Resamples the image to specified horizontal and vertical resolution.

    ```js
        gm("img.png").resample(horizontal, vertical)
    ```

??? note "resize"

    调整图像的大小.

    选项

    %, @, !, < or > see the GraphicsMagick docs for details

    ```js
        gm("img.png").resize(width [, height [, options]])
    ```
    To resize an image to a width of 40px while maintaining aspect ratio: gm("img.png").resize(40)

    To resize an image to a height of 50px while maintaining aspect ratio: gm("img.png").resize(null, 50)

    To resize an image to a fit a 40x50 rectangle while maintaining aspect ratio: gm("img.png").resize(40, 50)

    To override the image's proportions and force a resize to 40x50: gm("img.png").resize(40, 50, "!")

??? note "roll"
    Rolls an image vertically or horizontally.
    ```js
    gm("img.png").roll(horizontalInt, verticalInt)
    ```

??? note "rotate"
    Rotates the image by degrees and fills the background with color.
    ```js
    gm("img.png").rotate(color, degrees)
    ```

## S

??? note "scene"
    详情请参阅文档。
    ```js
    gm("img.png").scene(value)
    ```

??? note "scenes"
    详情请参阅文档。
    ```js
    gm("img.png").scenes(start, end)
    ```

??? note "scale"
    Scales the image.
    ```js
    gm("img.png").scale(width, height)
    ```

??? note "screen"
    详情请参阅文档。
    
    ```js
    gm("img.png").screen()
    ```

??? note "segment"
    详情请参阅文档。
    
    ```js
    gm("img.png").segment(clusterThreshold, smoothingThreshold)
    ```

??? note "selectFrame"
    Helpful if we process a large .gif so we don't load in memory each frame.
    
    ```js
    gm("img.png").selectFrame(0)
    ```

??? note "sepia"
    A convenience method to apply a sepia effect to the image.

    ```js
    gm("img.png").sepia()
    ```

??? note "set"
    详情请参阅文档。

    ```js
    gm("img.png").set(attribute, value)
    ```

??? note "setFormat"
    Overriddes the output image format.

    Helpful if we are outputting an image with no extention but need to change formats.

    ```js
    gm("img.png").setFormat(format)
    ```

??? note "shade"
    详情请参阅文档。

    ```js
    gm("img.png").shade(azimuth, elevation)
    ```

??? note "shadow"
    详情请参阅文档。

    ```js
    gm("img.png").shadow(radius, sigma)
    ```

??? note "sharedMemory"
    详情请参阅文档。

    ```js
    gm("img.png").sharedMemory()
    ```

??? note "shave"
    详情请参阅文档。

    ```js
    gm("img.png").shave(width, height, percent)
    ```

??? note "sharpen"
    Sharpens the image.

    ```js
    gm("img.png").sharpen(radius [, sigma])
    ```

??? note "shear"
    详情请参阅文档。

    ```js
    gm("img.png").shear(xDegrees, yDegrees)
    ```

??? note "silent"
    详情请参阅文档。

    ```js
    gm("img.png").silent()
    ```

??? note "snaps"
    详情请参阅文档。

    ```js
    gm("img.png").snaps(value)
    ```

??? note "solarize"
    Negates all pixels above threshold percent.

    ```js
    gm("img.png").solarize(threshold)
    ```

??? note "spread"
    Desplaces pixels by a random amount.

    ```js
    gm("img.png").spread(amount)
    ```

??? note "stegano"
    详情请参阅文档。

    ```js
    gm("img.png").stegano(offset)
    ```

??? note "stereo"
    详情请参阅文档。

    ```js
    gm("img.png").stereo()
    ```

??? note "strip"
    Strips the image of any profiles or comments.

    Similar to noProfile() but removes both profile and comment data. only works with imageMagick.

    ```js
    gm("img.png").strip()
    ```

??? note "swirl"
    Swirls pixels arount the center of the image. degrees specifies the tightness of the swirl.

    ```js
    gm("img.png").swirl(degrees)
    ```

## T

??? note "textFont"
    详情请参阅文档。

    ```js
    gm("img.png").textFont(font)
    ```

??? note "texture"
    详情请参阅文档。

    ```js
    gm("img.png").texture(font)
    ```

??? note "threshold"
    详情请参阅文档。

    ```js
    gm("img.png").threshold(value [, percent])
    ```

??? note "thumb"
    Creates a thumbnail based on minimum sizes.

    width
    the minimum width of the thumbnail
    height
    the minimum height of the thumbnail
    outName
    the path where the image will be saved
    quality
    Adjusts the image compression level. Ranges from 0 to 100 (best).
    callback
    called after the thumbnail is written. receives the same args that .write(err, stdout, stderr, command) receives.
    gm("img.png").thumb(width, height, outName, quality, callback)

??? note "tile"
    详情请参阅文档。

    ```js
    gm("img.png").tile(filename)
    ```

??? note "title"
    详情请参阅文档。

    ```js
    gm("img.png").title(string)
    ```

??? note "transform"
    详情请参阅文档。

    ```js
    gm("img.png").transform(color)
    ```

??? note "transparent"
    详情请参阅文档。

    ```js
    gm("img.png").transparent(color)
    ```

??? note "treeDepth"
    详情请参阅文档。

    ```js
    gm("img.png").treeDepth(color)
    ```

??? note "trim"
    Trim an image by removing any edges that are exactly the same color as the corner pixels.

    ```js
    gm("img.png").trim()
    ```

??? note "type"
    Specifies the image type.

    type
    Can be one of the following:
    Bilevel
    Grayscale
    Palette
    PaletteMatte
    TrueColor
    TrueColorMatte
    ColorSeparation
    ColorSeparationMatte
    Optimize
    gm("img.png").type(type)

## U

??? note "update"
    详情请参阅文档。

    ```js
    gm("img.png").update(seconds)
    ```

??? note "units"
    详情请参阅文档。

    ```js
    gm("img.png").units(type)
    ```

??? note "unsharp"
    详情请参阅文档。

    ```js
    gm("img.png").unsharp(radius [, sigma, amount, threshold])
    ```

??? note "usePixmap"
    详情请参阅文档。

    ```js
    gm("img.png").usePixmap()
    ```

## V

??? note "view"
    详情请参阅文档。

    ```js
    gm("img.png").view()
    ```

??? note "virtualPixel"
    详情请参阅文档。

    ```js
    gm("img.png").virtualPixel(method)
    ```

??? note "visual"
    详情请参阅文档。

    ```js
    gm("img.png").visual(type)
    ```

## W

??? note "watermark"
    详情请参阅文档。
    ```js
    gm("img.png").watermark(brightness, saturation)
    ```

??? note "wave"
    详情请参阅文档。
    ```js
    gm("img.png").wave(amplitude, wavelength)
    ```

??? note "whitePoint"
    详情请参阅文档。
    ```js
    gm("img.png").whitePoint(x, y)
    ```

??? note "whiteThreshold"
    详情请参阅文档。
    ```js
    gm("img.png").whiteThreshold(red, green, blue, opacity)
    ```

??? note "window"
    详情请参阅文档。
    ```js
    gm("img.png").window(id)
    ```

??? note "windowGroup"
    详情请参阅文档。
    ```js
    gm("img.png").windowGroup()
    ```