
# 导入

## 命名

import - capture some or all of an X server screen and save the image to a file.

## 内容

* 描述
* 示例
* 选项

## 概要

gm import [ options ... ] file

## 描述

Import reads an image from any visible window on an X server and outputs it as an image file. You can capture a single window, the entire screen, or any rectangular portion of the screen. Use display for redisplay, printing, editing, formatting, archiving, image processing, etc. of the captured image.

The target window can be specified by id, name, or may be selected by clicking the mouse in the desired window. If you press a button and then drag, a rectangle will form which expands and contracts as the mouse moves. To save the portion of the screen defined by the rectangle, just release the button. The keyboard bell is rung once at the beginning of the screen capture and twice when it completes.

## 示例

To select an X window or an area of the screen with the mouse and save it in the MIFF image format to a file entitled window.miff, use:

    gm import window.miff

To select an X window or an area of the screen with the mouse and save it in the Encapsulated PostScript format to include in another document, use:

    gm import figure.eps

To capture the entire X server screen in the JPEG image format in a file entitled root.jpeg, without using the mouse, use:

    gm import -window root root.jpeg

To capture the 512x256 area at the upper right corner of the X server screen in the PNG image format in a well-compressed file entitled corner.png, without using the mouse, use:

    gm import -window root -crop 512x256-0+0 -quality 90 corner.png

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect until it is explicitly changed by specifying the option again with a different effect.

Import options can appear on the command line or in your X resources file. See X(1). Options on the command line supersede values specified in your X resources file.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

??? info "-bordercolor `<color>`"

    the border color

??? info "-colors `<value>`"

    preferred number of colors in the image

??? info "-colorspace `<value>`"

    the type of colorspace

??? info "-comment `<string>`"

    annotate an image with a comment

??? info "-crop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    preferred size and location of the cropped image

??? info "-debug `<events>`"

    启动调试输出

??? info "-define `<key>`{=`<value>`},..."

    add coder/decoder specific options

??? info "-delay `<1/100ths of a second>`"

    display the next image after pausing

??? info "-density `<width>`x`<height>`"

    horizontal and vertical resolution in pixels of the image

??? info "-depth `<value>`"

    图像深度

??? info "-descend"

    obtain image by descending window hierarchy

??? info "-display `<host:display[.screen]>`"

    specifies the X server to contact

??? info "-dispose `<method>`"

    GIF disposal method

??? info "-dither"

    apply Floyd/Steinberg error diffusion to the image

??? info "-encoding `<type>`"

    specify the text encoding

??? info "-endian `<type>`"

    specify endianness (MSB, LSB, or Native) of image

??? info "-frame"

    include the X window frame in the imported image

??? info "-geometry `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{@}{!}{^}{`<}{>`}"

    Specify dimension, offset, and resize options.

??? info "-help"

    print usage instructions

??? info "-interlace `<type>`"

    the type of interlacing scheme

??? info "-label `<name>`"

    assign a label to an image

??? info "-limit `<type??? info "`<value>`"

    Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

??? info "-log `<string>`"

    Specify format for debug log

??? info "-monitor"

    show progress indication

??? info "-monochrome"

    transform the image to black and white

??? info "-negate"

    replace every pixel with its complementary color

??? info "-page `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{!}{`<}{>`}"

    size and location of an image canvas

??? info "-pause `<seconds>`"

    pause between snapshots [import]

??? info "-ping"

    efficiently determine image characteristics

??? info "-pointsize `<value>`"

    pointsize of the PostScript, X11, or TrueType font

??? info "-quality `<value>`"

    JPEG/MIFF/PNG/TIFF compression level

??? info "-resize `<width>`x`<height>`{%}{@}{!}{`<}{>`}"

    resize an image

??? info "-rotate `<degrees>`{`<}{>`}"

    rotate the image

??? info "-sampling-factor `<horizontal_factor>`x`<vertical_factor>`"

    chroma subsampling factors

??? info "-scene `<value>`"

    set scene number

??? info "-screen"

    specify the screen to capture

??? info "-set `<attribute??? info "`<value>`"

    set an image attribute

??? info "+set `<attribute>`"

    unset an image attribute

??? info "-silent"

    operate silently

??? info "-snaps `<value>`"

    number of screen snapshots

??? info "-thumbnail `<width>`x`<height>`{%}{@}{!}{`<}{>`}"

    resize an image (quickly)

??? info "-transparent `<color>`"

    make this color transparent within the image

??? info "-trim"

    trim an image

??? info "-verbose"

    print detailed information about the image

??? info "-version"

    print GraphicsMagick version string

For a more detailed description of each option, see Options, above. GraphicsMagick(1).