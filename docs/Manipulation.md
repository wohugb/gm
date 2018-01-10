# 操作

## A

??? info "adjoin"
    ```js
    gm("img.png").adjoin()
    ```

??? info "affine"
    ```js
    gm("img.png").affine(matrix)
    ```

??? info "antialias"
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

??? info "authenticate"

    ```js
      gm("img.png").authenticate(password)
    ```

??? info "autoOrient"
    Auto-orients the image according to its EXIF data.
    GraphicsMagick doesn't actually have the -auto-orient option but we emulate this by first reading the EXIF data and rotate/flip from there.

    ```js
      gm("img.jpg").autoOrient()
    ```

??? info "average"
    ```js
    gm("img.png").average()
    ```

## B

??? info "backdrop"
    ```js
    gm("img.png").backdrop()
    ```

??? info "bitdepth"
    Specifies the number of bits of color to preserve in the image. See the docs for more detail.
    ```js
    gm("img.png").bitdepth(bits)
    ```

??? info "blackThreshold"
    pixels below `threshold` become black.
    ```js
    gm("img.png").blackThreshold(red [,green] [,blue] [,opacity])
    ```

??? info "bluePrimary"
    ```js
    gm("img.png").bluePrimary(x, x)
    ```

??? info "blur"
    Accepts a radius and optional sigma (standard deviation).
    ```js
    gm("img.png").blur(radius [, sigma])
    ```

??? info "border"
    ```js
    gm("img.png").border(width, height)
    ```

??? info "borderColor"
    ```js
    gm("img.png").borderColor(color)
    ```

??? info "box"
    ```js
    gm("img.png").box(color)
    ```

## C

??? info "channel"
    type
      Red, Green, Blue, Opacity, Matte, Cyan, Magenta, Yellow, Black, or Gray
    ```js
    gm("img.png").channel(type)
    ```

??? info "charcoal"
    Simulates a charcoal drawing. Accepts a factor.
    ```js
    gm("img.png").charcoal(factor)
    ```

??? info "chop"
    Removes pixels from the interior of an image.
    ```js
    gm("img.png").chop(width, height, x, y)
    ```

??? info "clip"
    ```js
    gm("img.png").clip()
    ```
??? info "coalesce"
    ```js
    gm("img.png").coalesce()
    ```

??? info "colorize"
    Colorize the image with optionally separate red, green, and blue values.
    ```js
    gm("img.png").colorize(red [, green [, blue]])
    ```
??? info "colorMap"
    type
      shared or private
    ```js
    gm("img.png").colorMap(type)
    ```

??? info "colors"
    Sets the preferred number of colors for the image (color reduction).
    ```js
    gm("img.png").colors(int)
    ```

??? info "colorspace"
    Specifies the type of colorspace. See the GraphicsMagick docs for val details.
    ```js
    gm("img.png").colorspace(val)
    ```

??? info "compose"
    ```js
    gm("img.png").compose(operator)
    ```

??? info "compress"
    type
    None, BZip, Fax, Group4, JPEG, Lossless, LZW, RLE, Zip, or LZMA
    ```js
    gm("img.png").compress(type)
    ```
??? info "comment"
    Annotates an image. See the docs for more info.
    ```js
    gm("img.png").comment(text|format)
    ```

??? info "contrast"
    Increases or reduces the image contrast. Accepts a multiplier.
    ```js
    gm("img.png").contrast([+-]multiplier)
    ```

??? info "convolve"
    ```js
    gm("img.png").convolve(kernel)
    ```
??? info "createDirectories"
    ```js
    gm("img.png").createDirectories()
    ```

??? info "crop"
    Crops the image to the given width and height at the given x and y position.
    ```js
    gm("img.png").crop(width, height, x, y)
    ```

??? info "cycle"
    Displace the image colormap by amount. amount is the number of positions each colormap entry is shifted.
    ```js
    gm("img.png").cycle(amount)
    ```
## D

??? info "deconstruct"
    ```js
    gm("img.png").deconstruct()
    ```

??? info "define"
    ```js
    gm("img.png").define()
    ```

??? info "delay"
    `amount` is in hundreths of a second.
    ```js
    gm("img.png").delay(amout)
    ```

??? info "density"
    This option specifies the image resolution to store while encoding a raster image or the canvas resolution while rendering (reading) vector formats into an image.
    ```js
    gm("img.png").density(width, height)
    ```

??? info "despeckle"
    Reduces the speckles within the image.
    ```js
    gm("img.png").despeckle()
    ```

??? info "displace"
    Shift image pixels as defined by a displacement map.
    ```js
    gm("img.png").displace(horizontal, vertical)
    ```

??? info "display"
    ```js
    gm("img.png").display(value)
    ```

??? info "dispose"
    ```js
    gm("img.png").dispose(method)
    ```

??? info "dissolve"
    ```js
    gm("img.png").dissolve(method)
    ```

??? info "dither"
    Applies Floyd/Steinberg error diffusion to the image. Pass false to disable dithering.
    Note: either .colors() or .monochrome() must be used for this to take effect.
    ```js
    gm("img.png").dither([bool])
    ```

## E

??? info "edge"
    Emphasizes edges in an image. Takes an optional radius of the emphasis to apply.
    ```js
    gm("img.png").edge([radius])
    ```

??? info "emboss"
    Embosses the image. Takes an optional radius.
    ```js
    gm("img.png").emboss([radius])
    ```

??? info "encoding"
    type
    AdobeCustom, AdobeExpert, AdobeStandard, AppleRoman, BIG5, GB2312, Latin 2, None, SJIScode, Symbol, Unicode, Wansung
    gm("img.png").encoding(type)
    ```

??? info "endian"
    type
    MSB, LSB, or Native
    ```js
    gm("img.png").endian(type)
    ```

??? info "enhance"
    Enhances the image.
    ```js
    gm("img.png").enhance()
    ```

??? info "equalize"
    Performs histogram equalization to the image.
    ```js
    gm("img.png").equalize()
    ```

??? info "extent"
    composite image on background color canvas image.
    ```js
    gm("img.png").extent([width, height, options])
    ```

## F

??? info "file"
    ```js
    gm("img.png").file(filename)
    ```

??? info "filter"
    Specifies the filter to use when resizing. see link for available types.
    ```js
    gm("img.png").filter(type)
    ```

??? info "flatten"
    ```js
    gm("img.png").flatten()
    ```

??? info "flip"
    Creates a mirror image (vertically).
    ```js
    gm("img.png").flip()
    ```

??? info "flop"
    Creates a mirror image (horizontally).
    ```js
    gm("img.png").flop()
    ```

??? info "foreground"
    ```js
    gm("img.png").foreground(color)
    ```

??? info "frame"
    ```js
    gm("img.png").frame(width, height, outerBevelWidth, innerBevelWidth)
    ```

??? info "fuzz"
    ```js
    gm("img.png").fuzz(distance [,percent])
    ```

## G

??? info "gamma"
    Adjusts the level of gamma correction.
    ```js
    gm("img.png").gamma(r, g, b)
    ```

??? info "gaussian"
    ```js
    gm("img.png").gaussian(radius [,sigma])
    ```

??? info "geometry"
    ```js
    gm("img.png").geometry(width, height [,arg])
    ```

??? info "greenPrimary"
    ```js
    gm("img.png").greenPrimary(x, y)
    ```

??? info "gravity"
    The direction the primitive gravitates to when annotating the image. Defaults to NorthWest.
    direction
    NorthWest|North|NorthEast|West|Center|East|SouthWest|South|SouthEast
    ```js
    gm("img.png").gravity(direction)
    ```

## H

??? info "highlightColor"
    ```js
    gm("img.png").highlightColor(color)
    ```

??? info "highlightStyle"
    ```js
    gm("img.png").highlightStyle(color)
    ```

## I

??? info "iconGeometry"
    ```js
    gm("img.png").iconGeometry(geometry)
    ```

??? info "implode"
    Implodes the image pixels around the center. Takes an optional factor.
    ```js
    gm("img.png").implode([factor])
    ```

??? info "intent"
    type
    Absolute, Perceptual, Relative, or Saturation
    ```js
    gm("img.png").intent(type)
    ```

??? info "interlace"
    Specifies the type of interlacing scheme. Defaults to None.

    type
    None|Line|Plane|Partition
    ```js
    gm("img.png").interlace(type)
    ```

## L

??? info "label"
    Assigns a label to an image.
    ```js
    gm("img.png").label(name)
    ```

??? info "lat"
    ```js
    gm("img.png").lat(width, height, offset [,percent])
    ```

??? info "level"
    ```js
    gm("img.png").level(blackPoint, gamma, whitePoint [,percent])
    ```

??? info "limit"
    Sets resource limits.

    type
    disk|file|map|memory|pixels|threads
    val
    follows the same rules as specified in the GraphicsMagick docs
    ```js
    gm("img.png").limit(type, val)
    ```

??? info "list"
    type
    Color, Delegate, Format, Magic, Module, Resource, or Type
    ```js
      gm("img.png").list(type)
    ```

??? info "log"
    Specify format for debug log. 详情请参阅文档。
    ```js
    gm("img.png").log(format)
    ```

??? info "loop"
    详情请参阅文档。
    ```js
    gm("img.png").loop(iterations)
    ```

??? info "lower"
    Creates a pseudo 3D lowering effect of the images edges.
    ```js
    gm("img.png").lower(width, height)
    ```

## M

??? info "magnify"
    Magnifies the image factor times.
    ```js
    gm("img.png").magnify(factor)
    ```

??? info "map"
    详情请参阅文档。
    ```js
    gm("img.png").map(filename)
    ```

??? info "mask"
    详情请参阅文档。
    ```js
    gm("img.png").mask(filename)
    ```

??? info "matte"
    详情请参阅文档。
    ```js
    gm("img.png").matte()
    ```

??? info "matteColor"
    详情请参阅文档。
    ```js
    gm("img.png").matteColor(color)
    ```

??? info "maximumError"
    详情请参阅文档。
    ```js
    gm("img.png").maximumError(limit)
    ```

??? info "median"
    Applies a median filter to the image. The optional param radius adjusts the weight of the effect.
    ```js
    gm("img.png").median([radius])
    ```

??? info "minify"
    Minifies the image factor times.
    ```js
    gm("img.png").minify(factor)
    ```

??? info "mode"
    详情请参阅文档。
    ```js
    gm("img.png").mode(value)
    ```

??? info "modulate"
    Varies the brightness, saturation, and hue of the image.
    ```js
    gm("img.png").modulate(b [, s [, h]])
    ```

??? info "monitor"
    详情请参阅文档。
    ```js
    gm("img.png").monitor()
    ```

??? info "monochrome"
    Transforms the image to black and white.
    ```js
    gm("img.png").monochrome()
    ```

??? info "morph"
    Morphs two images together.


??? info "otherImg"
    the path to another img

??? info "outName"
    the path where the image will be saved

??? info "callback"
    A function to be executed when morphing is complete. callback will be passed the standard args that .write() receives.
    ```js
    gm("img.png").morph(otherImg, outName, callback)
    ```

??? info "mosaic"
    详情请参阅文档。
    ```js
    gm("img.png").mosaic()
    ```

??? info "motionBlur"
    详情请参阅文档。
    ```js
    gm("img.png").motionBlur(radius [, sigma, angle])
    ```

## N

??? info "name"
    详情请参阅文档。
    ```js
    gm("img.png").name()
    ```

??? info "negative"
    Replaces every pixel with its complementary color.
    ```js
    gm("img.png").negative()
    ```

??? info "noise"
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

??? info "noop"
    详情请参阅文档。
    ```js
    gm("img.png").noop()
    ```

??? info "normalize"
    详情请参阅文档。
    ```js
    gm("img.png").normalize()
    ```

## O

??? info "opaque"
    详情请参阅文档。
    ```js
    gm("img.png").opaque(color)
    ```

??? info "operator"
    详情请参阅文档。
    ```js
    gm("img.png").operator(channel, operator, rvalue [,percent])
    ```

??? info "orderedDither"
    详情请参阅文档。
    ```js
    gm("img.png").orderedDither(channelType, NxN)
    ```

??? info "outputDirectory"
    详情请参阅文档。
    ```js
    gm("img.png").outputDirectory(channelType, NxN)
    ```

## P

??? info "page"
    详情请参阅文档。
    ```js
    gm("img.png").page(width, height [,arg])
    ```

??? info "pause"
    详情请参阅文档。
    ```js
    gm("img.png").pause(seconds)
    ```

??? info "pen"
    详情请参阅文档。
    ```js
    gm("img.png").pen(color)
    ```

??? info "ping"
    详情请参阅文档。
    ```js
    gm("img.png").ping()
    ```

??? info "pointSize"
    详情请参阅文档。
    ```js
    gm("img.png").pointSize(value)
    ```

??? info "noProfile"
    Removes EXIF, ICM, etc profile data.
    ```js
    gm("img.png").noProfile()
    ```

??? info "preview"
    type
    See the docs for valid types.
    ```js
    gm("img.png").preview(type)
    ```

??? info "paint"
    Simulates an oil painting.
    ```js
    gm("img.png").paint(radius)
    ```

??? info "process"
    详情请参阅文档。
    ```js
    gm("img.png").process(command)
    ```

??? info "profile"
    详情请参阅文档。
    ```js
    gm("img.png").profile(filename)
    ```

??? info "progress"
    详情请参阅文档。
    ```js
    gm("img.png").progress()
    ```

??? info "randomThreshold"
    详情请参阅文档。
    ```js
    gm("img.png").randomThreshold(channelType, LOWxHIGH)
    ```

## Q

??? info "quality"
    Adjusts the jpeg|miff|png|tiff compression level. val ranges from 0 to 100 (best).
    ```js
    gm("img.png").quality(val)
    ```

## R

??? info "raise"
    Creates a pseudo 3D raising effect of the images edges.
    ```js
    gm("img.png").raise(width, height)
    ```

??? info "recolor"
    详情请参阅文档。
    ```js
    gm("img.png").recolor(matrix)
    ```

??? info "redPrimary"
    详情请参阅文档。
    ```js
    gm("img.png").redPrimary(x, y)
    ```

??? info "region"
    Specifies that all following methods only apply to the area specified by width, height, x, y.
    ```js
    gm("img.png").region(width, height, x, y).sepia()
    ```
    In this case, the sepia effect would only be applied within the area specified by width, height, x, y.

??? info "remote"
    详情请参阅文档。
    ```js
    gm("img.png").remote()
    ```

??? info "render"
    详情请参阅文档。
    ```js
    gm("img.png").render()
    ```

??? info "repage"
    详情请参阅文档。
    ```js
    gm("img.png").repage(width, height, xoff, yoff, arg)
    ```

## S

??? info "sample"
    详情请参阅文档。
    ```js
    gm("img.png").sample(geometry)
    ```

??? info "samplingFactor"
    详情请参阅文档。
    ```js
    gm("img.png").samplingFactor(horizontalFactor, verticalFactor)
    ```

??? info "rawSize"
    详情请参阅文档。
    ```js
    gm("img.png").rawSize(width, height, offset)
    ```

??? info "resample"
    Resamples the image to specified horizontal and vertical resolution.

    ```js
        gm("img.png").resample(horizontal, vertical)
    ```

??? info "resize"

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

??? info "roll"
    Rolls an image vertically or horizontally.
    ```js
    gm("img.png").roll(horizontalInt, verticalInt)
    ```

??? info "rotate"
    Rotates the image by degrees and fills the background with color.
    ```js
    gm("img.png").rotate(color, degrees)
    ```

## S

??? info "scene"
    详情请参阅文档。
    ```js
    gm("img.png").scene(value)
    ```

??? info "scenes"
    详情请参阅文档。
    ```js
    gm("img.png").scenes(start, end)
    ```

??? info "scale"
    Scales the image.
    ```js
    gm("img.png").scale(width, height)
    ```

??? info "screen"
    详情请参阅文档。
    
    ```js
    gm("img.png").screen()
    ```

??? info "segment"
    详情请参阅文档。
    
    ```js
    gm("img.png").segment(clusterThreshold, smoothingThreshold)
    ```

??? info "selectFrame"
    Helpful if we process a large .gif so we don't load in memory each frame.
    
    ```js
    gm("img.png").selectFrame(0)
    ```

??? info "sepia"
    A convenience method to apply a sepia effect to the image.

    ```js
    gm("img.png").sepia()
    ```

??? info "set"
    详情请参阅文档。

    ```js
    gm("img.png").set(attribute, value)
    ```

??? info "setFormat"
    Overriddes the output image format.

    Helpful if we are outputting an image with no extention but need to change formats.

    ```js
    gm("img.png").setFormat(format)
    ```

??? info "shade"
    详情请参阅文档。

    ```js
    gm("img.png").shade(azimuth, elevation)
    ```

??? info "shadow"
    详情请参阅文档。

    ```js
    gm("img.png").shadow(radius, sigma)
    ```

??? info "sharedMemory"
    详情请参阅文档。

    ```js
    gm("img.png").sharedMemory()
    ```

??? info "shave"
    详情请参阅文档。

    ```js
    gm("img.png").shave(width, height, percent)
    ```

??? info "sharpen"
    Sharpens the image.

    ```js
    gm("img.png").sharpen(radius [, sigma])
    ```

??? info "shear"
    详情请参阅文档。

    ```js
    gm("img.png").shear(xDegrees, yDegrees)
    ```

??? info "silent"
    详情请参阅文档。

    ```js
    gm("img.png").silent()
    ```

??? info "snaps"
    详情请参阅文档。

    ```js
    gm("img.png").snaps(value)
    ```

??? info "solarize"
    Negates all pixels above threshold percent.

    ```js
    gm("img.png").solarize(threshold)
    ```

??? info "spread"
    Desplaces pixels by a random amount.

    ```js
    gm("img.png").spread(amount)
    ```

??? info "stegano"
    详情请参阅文档。

    ```js
    gm("img.png").stegano(offset)
    ```

??? info "stereo"
    详情请参阅文档。

    ```js
    gm("img.png").stereo()
    ```

??? info "strip"
    Strips the image of any profiles or comments.

    Similar to noProfile() but removes both profile and comment data. only works with imageMagick.

    ```js
    gm("img.png").strip()
    ```

??? info "swirl"
    Swirls pixels arount the center of the image. degrees specifies the tightness of the swirl.

    ```js
    gm("img.png").swirl(degrees)
    ```

## T

??? info "textFont"
    详情请参阅文档。

    ```js
    gm("img.png").textFont(font)
    ```

??? info "texture"
    详情请参阅文档。

    ```js
    gm("img.png").texture(font)
    ```

??? info "threshold"
    详情请参阅文档。

    ```js
    gm("img.png").threshold(value [, percent])
    ```

??? info "thumb"
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

??? info "tile"
    详情请参阅文档。

    ```js
    gm("img.png").tile(filename)
    ```

??? info "title"
    详情请参阅文档。

    ```js
    gm("img.png").title(string)
    ```

??? info "transform"
    详情请参阅文档。

    ```js
    gm("img.png").transform(color)
    ```

??? info "transparent"
    详情请参阅文档。

    ```js
    gm("img.png").transparent(color)
    ```

??? info "treeDepth"
    详情请参阅文档。

    ```js
    gm("img.png").treeDepth(color)
    ```

??? info "trim"
    Trim an image by removing any edges that are exactly the same color as the corner pixels.

    ```js
    gm("img.png").trim()
    ```

??? info "type"
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

??? info "update"
    详情请参阅文档。

    ```js
    gm("img.png").update(seconds)
    ```

??? info "units"
    详情请参阅文档。

    ```js
    gm("img.png").units(type)
    ```

??? info "unsharp"
    详情请参阅文档。

    ```js
    gm("img.png").unsharp(radius [, sigma, amount, threshold])
    ```

??? info "usePixmap"
    详情请参阅文档。

    ```js
    gm("img.png").usePixmap()
    ```

## V

??? info "view"
    详情请参阅文档。

    ```js
    gm("img.png").view()
    ```

??? info "virtualPixel"
    详情请参阅文档。

    ```js
    gm("img.png").virtualPixel(method)
    ```

??? info "visual"
    详情请参阅文档。

    ```js
    gm("img.png").visual(type)
    ```

## W

??? info "watermark"
    详情请参阅文档。
    ```js
    gm("img.png").watermark(brightness, saturation)
    ```

??? info "wave"
    详情请参阅文档。
    ```js
    gm("img.png").wave(amplitude, wavelength)
    ```

??? info "whitePoint"
    详情请参阅文档。
    ```js
    gm("img.png").whitePoint(x, y)
    ```

??? info "whiteThreshold"
    详情请参阅文档。
    ```js
    gm("img.png").whiteThreshold(red, green, blue, opacity)
    ```

??? info "window"
    详情请参阅文档。
    ```js
    gm("img.png").window(id)
    ```

??? info "windowGroup"
    详情请参阅文档。
    ```js
    gm("img.png").windowGroup()
    ```