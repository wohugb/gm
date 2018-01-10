# [gm](https://github.com/aheckmann/gm) [![Build Status](https://travis-ci.org/aheckmann/gm.png?branch=master)](https://travis-ci.org/aheckmann/gm)  [![NPM Version](https://img.shields.io/npm/v/gm.svg?style=flat)](https://www.npmjs.org/package/gm)

GraphicsMagick 和 ImageMagick 为 node

## 入门指南

首先需要下载安装 [GraphicsMagick](http://www.graphicsmagick.org/) 或者 [ImageMagick](http://www.imagemagick.org/). 在 Mac OS X 里, 你可以很容易的使用 [Homebrew](http://mxcl.github.io/homebrew/) 来安装:

    brew install imagemagick
    brew install graphicsmagick

如果你想要ImageMagick支持WebP, 你必须添加 WebP 选项:

    brew install imagemagick --with-webp

或者使用 npm:

    npm install gm

或者克隆 repo:

    git clone git://github.com/aheckmann/gm.git

## 构造函数

有很多方法使用 `gm` 图像构造函数.

1. `gm(path)` When you pass a string as the first argument it is interpreted as the path to an image you intend to manipulate.
2. `gm(stream || buffer, [filename])` You may also pass a ReadableStream or Buffer as the first argument, with an optional file name for format inference.
3. `gm(width, height, [color])` When you pass two integer arguments, gm will create a new image on the fly with the provided dimensions and an optional background color. And you can still chain just like you do with pre-existing images too. See [here](http://github.com/aheckmann/gm/blob/master/examples/new.js) for an example.

The links below refer to an older version of gm but everything should still work, if anyone feels like updating them please make a PR

## 方法

??? info "获取器 - getters"
    - [size](http://aheckmann.github.com/gm/docs.html#getters) - returns the size (WxH) of the image
    - [orientation](http://aheckmann.github.com/gm/docs.html#getters) - returns the EXIF orientation of the image
    - [format](http://aheckmann.github.com/gm/docs.html#getters) - returns the image format (gif, jpeg, png, etc)
    - [depth](http://aheckmann.github.com/gm/docs.html#getters) - returns the image color depth
    - [color](http://aheckmann.github.com/gm/docs.html#getters) - returns the number of colors
    - [res](http://aheckmann.github.com/gm/docs.html#getters)   - returns the image resolution
    - [filesize](http://aheckmann.github.com/gm/docs.html#getters) - returns image filesize
    - [identify](http://aheckmann.github.com/gm/docs.html#getters) - returns all image data available. Takes an optional format string.

??? info "操作 - manipulation"
    - [adjoin](http://aheckmann.github.com/gm/docs.html#adjoin)
    - [affine](http://aheckmann.github.com/gm/docs.html#affine)
    - [antialias](http://aheckmann.github.com/gm/docs.html#antialias)
    - [append](http://aheckmann.github.com/gm/docs.html#append)
    - [authenticate](http://aheckmann.github.com/gm/docs.html#authenticate)
    - [autoOrient](http://aheckmann.github.com/gm/docs.html#autoOrient)
    - [average](http://aheckmann.github.com/gm/docs.html#average)
    - [backdrop](http://aheckmann.github.com/gm/docs.html#backdrop)
    - [bitdepth](http://aheckmann.github.com/gm/docs.html#bitdepth)
    - [blackThreshold](http://aheckmann.github.com/gm/docs.html#blackThreshold)
    - [bluePrimary](http://aheckmann.github.com/gm/docs.html#bluePrimary)
    - [blur](http://aheckmann.github.com/gm/docs.html#blur)
    - [border](http://aheckmann.github.com/gm/docs.html#border)
    - [borderColor](http://aheckmann.github.com/gm/docs.html#borderColor)
    - [box](http://aheckmann.github.com/gm/docs.html#box)
    - [channel](http://aheckmann.github.com/gm/docs.html#channel)
    - [charcoal](http://aheckmann.github.com/gm/docs.html#charcoal)
    - [chop](http://aheckmann.github.com/gm/docs.html#chop)
    - [clip](http://aheckmann.github.com/gm/docs.html#clip)
    - [coalesce](http://aheckmann.github.com/gm/docs.html#coalesce)
    - [colors](http://aheckmann.github.com/gm/docs.html#colors)
    - [colorize](http://aheckmann.github.com/gm/docs.html#colorize)
    - [colorMap](http://aheckmann.github.com/gm/docs.html#colorMap)
    - [colorspace](http://aheckmann.github.com/gm/docs.html#colorspace)
    - [comment](http://aheckmann.github.com/gm/docs.html#comment)
    - [compose](http://aheckmann.github.com/gm/docs.html#compose)
    - [compress](http://aheckmann.github.com/gm/docs.html#compress)
    - [contrast](http://aheckmann.github.com/gm/docs.html#contrast)
    - [convolve](http://aheckmann.github.com/gm/docs.html#convolve)
    - [createDirectories](http://aheckmann.github.com/gm/docs.html#createDirectories)
    - [crop](http://aheckmann.github.com/gm/docs.html#crop)
    - [cycle](http://aheckmann.github.com/gm/docs.html#cycle)
    - [deconstruct](http://aheckmann.github.com/gm/docs.html#deconstruct)
    - [delay](http://aheckmann.github.com/gm/docs.html#delay)
    - [define](http://aheckmann.github.com/gm/docs.html#define)
    - [density](http://aheckmann.github.com/gm/docs.html#density)
    - [despeckle](http://aheckmann.github.com/gm/docs.html#despeckle)
    - [dither](http://aheckmann.github.com/gm/docs.html#dither)
    - [displace](http://aheckmann.github.com/gm/docs.html#dither)
    - [display](http://aheckmann.github.com/gm/docs.html#display)
    - [dispose](http://aheckmann.github.com/gm/docs.html#dispose)
    - [dissolve](http://aheckmann.github.com/gm/docs.html#dissolve)
    - [edge](http://aheckmann.github.com/gm/docs.html#edge)
    - [emboss](http://aheckmann.github.com/gm/docs.html#emboss)
    - [encoding](http://aheckmann.github.com/gm/docs.html#encoding)
    - [enhance](http://aheckmann.github.com/gm/docs.html#enhance)
    - [endian](http://aheckmann.github.com/gm/docs.html#endian)
    - [equalize](http://aheckmann.github.com/gm/docs.html#equalize)
    - [extent](http://aheckmann.github.com/gm/docs.html#extent)
    - [file](http://aheckmann.github.com/gm/docs.html#file)
    - [filter](http://aheckmann.github.com/gm/docs.html#filter)
    - [flatten](http://aheckmann.github.com/gm/docs.html#flatten)
    - [flip](http://aheckmann.github.com/gm/docs.html#flip)
    - [flop](http://aheckmann.github.com/gm/docs.html#flop)
    - [foreground](http://aheckmann.github.com/gm/docs.html#foreground)
    - [frame](http://aheckmann.github.com/gm/docs.html#frame)
    - [fuzz](http://aheckmann.github.com/gm/docs.html#fuzz)
    - [gamma](http://aheckmann.github.com/gm/docs.html#gamma)
    - [gaussian](http://aheckmann.github.com/gm/docs.html#gaussian)
    - [geometry](http://aheckmann.github.com/gm/docs.html#geometry)
    - [gravity](http://aheckmann.github.com/gm/docs.html#gravity)
    - [greenPrimary](http://aheckmann.github.com/gm/docs.html#greenPrimary)
    - [highlightColor](http://aheckmann.github.com/gm/docs.html#highlightColor)
    - [highlightStyle](http://aheckmann.github.com/gm/docs.html#highlightStyle)
    - [iconGeometry](http://aheckmann.github.com/gm/docs.html#iconGeometry)
    - [implode](http://aheckmann.github.com/gm/docs.html#implode)
    - [intent](http://aheckmann.github.com/gm/docs.html#intent)
    - [interlace](http://aheckmann.github.com/gm/docs.html#interlace)
    - [label](http://aheckmann.github.com/gm/docs.html#label)
    - [lat](http://aheckmann.github.com/gm/docs.html#lat)
    - [level](http://aheckmann.github.com/gm/docs.html#level)
    - [list](http://aheckmann.github.com/gm/docs.html#list)
    - [limit](http://aheckmann.github.com/gm/docs.html#limit)
    - [log](http://aheckmann.github.com/gm/docs.html#log)
    - [loop](http://aheckmann.github.com/gm/docs.html#loop)
    - [lower](http://aheckmann.github.com/gm/docs.html#lower)
    - [magnify](http://aheckmann.github.com/gm/docs.html#magnify)
    - [map](http://aheckmann.github.com/gm/docs.html#map)
    - [matte](http://aheckmann.github.com/gm/docs.html#matte)
    - [matteColor](http://aheckmann.github.com/gm/docs.html#matteColor)
    - [mask](http://aheckmann.github.com/gm/docs.html#mask)
    - [maximumError](http://aheckmann.github.com/gm/docs.html#maximumError)
    - [median](http://aheckmann.github.com/gm/docs.html#median)
    - [minify](http://aheckmann.github.com/gm/docs.html#minify)
    - [mode](http://aheckmann.github.com/gm/docs.html#mode)
    - [modulate](http://aheckmann.github.com/gm/docs.html#modulate)
    - [monitor](http://aheckmann.github.com/gm/docs.html#monitor)
    - [monochrome](http://aheckmann.github.com/gm/docs.html#monochrome)
    - [morph](http://aheckmann.github.com/gm/docs.html#morph)
    - [mosaic](http://aheckmann.github.com/gm/docs.html#mosaic)
    - [motionBlur](http://aheckmann.github.com/gm/docs.html#motionBlur)
    - [name](http://aheckmann.github.com/gm/docs.html#name)
    - [negative](http://aheckmann.github.com/gm/docs.html#negative)
    - [noise](http://aheckmann.github.com/gm/docs.html#noise)
    - [noop](http://aheckmann.github.com/gm/docs.html#noop)
    - [normalize](http://aheckmann.github.com/gm/docs.html#normalize)
    - [noProfile](http://aheckmann.github.com/gm/docs.html#profile)
    - [opaque](http://aheckmann.github.com/gm/docs.html#opaque)
    - [operator](http://aheckmann.github.com/gm/docs.html#operator)
    - [orderedDither](http://aheckmann.github.com/gm/docs.html#orderedDither)
    - [outputDirectory](http://aheckmann.github.com/gm/docs.html#outputDirectory)
    - [paint](http://aheckmann.github.com/gm/docs.html#paint)
    - [page](http://aheckmann.github.com/gm/docs.html#page)
    - [pause](http://aheckmann.github.com/gm/docs.html#pause)
    - [pen](http://aheckmann.github.com/gm/docs.html#pen)
    - [ping](http://aheckmann.github.com/gm/docs.html#ping)
    - [pointSize](http://aheckmann.github.com/gm/docs.html#pointSize)
    - [preview](http://aheckmann.github.com/gm/docs.html#preview)
    - [process](http://aheckmann.github.com/gm/docs.html#process)
    - [profile](http://aheckmann.github.com/gm/docs.html#profile)
    - [progress](http://aheckmann.github.com/gm/docs.html#progress)
    - [quality](http://aheckmann.github.com/gm/docs.html#quality)
    - [raise](http://aheckmann.github.com/gm/docs.html#raise)
    - [rawSize](http://aheckmann.github.com/gm/docs.html#rawSize)
    - [randomThreshold](http://aheckmann.github.com/gm/docs.html#randomThreshold)
    - [recolor](http://aheckmann.github.com/gm/docs.html#recolor)
    - [redPrimary](http://aheckmann.github.com/gm/docs.html#redPrimary)
    - [region](http://aheckmann.github.com/gm/docs.html#region)
    - [remote](http://aheckmann.github.com/gm/docs.html#remote)
    - [render](http://aheckmann.github.com/gm/docs.html#render)
    - [repage](http://aheckmann.github.com/gm/docs.html#repage)
    - [resample](http://aheckmann.github.com/gm/docs.html#resample)
    - [resize](http://aheckmann.github.com/gm/docs.html#resize)
    - [roll](http://aheckmann.github.com/gm/docs.html#roll)
    - [rotate](http://aheckmann.github.com/gm/docs.html#rotate)
    - [sample](http://aheckmann.github.com/gm/docs.html#sample)
    - [samplingFactor](http://aheckmann.github.com/gm/docs.html#samplingFactor)
    - [scale](http://aheckmann.github.com/gm/docs.html#scale)
    - [scene](http://aheckmann.github.com/gm/docs.html#scene)
    - [scenes](http://aheckmann.github.com/gm/docs.html#scenes)
    - [screen](http://aheckmann.github.com/gm/docs.html#screen)
    - [segment](http://aheckmann.github.com/gm/docs.html#segment)
    - [sepia](http://aheckmann.github.com/gm/docs.html#sepia)
    - [set](http://aheckmann.github.com/gm/docs.html#set)
    - [setFormat](http://aheckmann.github.com/gm/docs.html#setformat)
    - [shade](http://aheckmann.github.com/gm/docs.html#shade)
    - [shadow](http://aheckmann.github.com/gm/docs.html#shadow)
    - [sharedMemory](http://aheckmann.github.com/gm/docs.html#sharedMemory)
    - [sharpen](http://aheckmann.github.com/gm/docs.html#sharpen)
    - [shave](http://aheckmann.github.com/gm/docs.html#shave)
    - [shear](http://aheckmann.github.com/gm/docs.html#shear)
    - [silent](http://aheckmann.github.com/gm/docs.html#silent)
    - [solarize](http://aheckmann.github.com/gm/docs.html#solarize)
    - [snaps](http://aheckmann.github.com/gm/docs.html#snaps)
    - [stegano](http://aheckmann.github.com/gm/docs.html#stegano)
    - [stereo](http://aheckmann.github.com/gm/docs.html#stereo)
    - [strip](http://aheckmann.github.com/gm/docs.html#strip) _imagemagick only_
    - [spread](http://aheckmann.github.com/gm/docs.html#spread)
    - [swirl](http://aheckmann.github.com/gm/docs.html#swirl)
    - [textFont](http://aheckmann.github.com/gm/docs.html#textFont)
    - [texture](http://aheckmann.github.com/gm/docs.html#texture)
    - [threshold](http://aheckmann.github.com/gm/docs.html#threshold)
    - [thumb](http://aheckmann.github.com/gm/docs.html#thumb)
    - [tile](http://aheckmann.github.com/gm/docs.html#tile)
    - [transform](http://aheckmann.github.com/gm/docs.html#transform)
    - [transparent](http://aheckmann.github.com/gm/docs.html#transparent)
    - [treeDepth](http://aheckmann.github.com/gm/docs.html#treeDepth)
    - [trim](http://aheckmann.github.com/gm/docs.html#trim)
    - [type](http://aheckmann.github.com/gm/docs.html#type)
    - [update](http://aheckmann.github.com/gm/docs.html#update)
    - [units](http://aheckmann.github.com/gm/docs.html#units)
    - [unsharp](http://aheckmann.github.com/gm/docs.html#unsharp)
    - [usePixmap](http://aheckmann.github.com/gm/docs.html#usePixmap)
    - [view](http://aheckmann.github.com/gm/docs.html#view)
    - [virtualPixel](http://aheckmann.github.com/gm/docs.html#virtualPixel)
    - [visual](http://aheckmann.github.com/gm/docs.html#visual)
    - [watermark](http://aheckmann.github.com/gm/docs.html#watermark)
    - [wave](http://aheckmann.github.com/gm/docs.html#wave)
    - [whitePoint](http://aheckmann.github.com/gm/docs.html#whitePoint)
    - [whiteThreshold](http://aheckmann.github.com/gm/docs.html#whiteThreshold)
    - [window](http://aheckmann.github.com/gm/docs.html#window)
    - [windowGroup](http://aheckmann.github.com/gm/docs.html#windowGroup)

??? info "绘画"
    - [draw](http://aheckmann.github.com/gm/docs.html#draw)
    - [drawArc](http://aheckmann.github.com/gm/docs.html#drawArc)
    - [drawBezier](http://aheckmann.github.com/gm/docs.html#drawBezier)
    - [drawCircle](http://aheckmann.github.com/gm/docs.html#drawCircle)
    - [drawEllipse](http://aheckmann.github.com/gm/docs.html#drawEllipse)
    - [drawLine](http://aheckmann.github.com/gm/docs.html#drawLine)
    - [drawPoint](http://aheckmann.github.com/gm/docs.html#drawPoint)
    - [drawPolygon](http://aheckmann.github.com/gm/docs.html#drawPolygon)
    - [drawPolyline](http://aheckmann.github.com/gm/docs.html#drawPolyline)
    - [drawRectangle](http://aheckmann.github.com/gm/docs.html#drawRectangle)
    - [drawText](http://aheckmann.github.com/gm/docs.html#drawText)
    - [fill](http://aheckmann.github.com/gm/docs.html#fill)
    - [font](http://aheckmann.github.com/gm/docs.html#font)
    - [fontSize](http://aheckmann.github.com/gm/docs.html#fontSize)
    - [stroke](http://aheckmann.github.com/gm/docs.html#stroke)
    - [strokeWidth](http://aheckmann.github.com/gm/docs.html#strokeWidth)
    - [setDraw](http://aheckmann.github.com/gm/docs.html#setDraw)

??? info "图像输出"
    - **write** - writes the processed image data to the specified filename
    - **stream** - provides a `ReadableStream` with the processed image data
    - **toBuffer** - returns the image as a `Buffer` instead of a stream

## 平台的差异

Please document and refer to any [platform or ImageMagick/GraphicsMagick issues/differences here](https://github.com/aheckmann/gm/wiki/GraphicsMagick-and-ImageMagick-versions).

## 举例

  Check out the [examples](http://github.com/aheckmann/gm/tree/master/examples/) directory to play around.
  Also take a look at the [extending gm](http://wiki.github.com/aheckmann/gm/extending-gm)
  page to see how to customize gm to your own needs.

## 错误报告

When reporting bugs please include the version of graphicsmagick/imagemagick you're using (gm -version/convert -version) as well as the version of this module and copies of any images you're having problems with.

## 贡献

[contributors](https://github.com/aheckmann/gm/contributors)

## 灵感

[magickal-node](http://github.com/quiiver/magickal-node)

## 插件

[wiki](https://github.com/aheckmann/gm/wiki)

## 证书

(The MIT License)

Copyright (c) 2010 [Aaron Heckmann](aaron.heckmann+github@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.