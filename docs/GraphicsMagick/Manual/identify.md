
# gm identify

## 命名

identify - describe an image or image sequence.

## 内容

* Synopsis
* Description
* Options

## 概要

```sh
gm identify file [ file ... ]
```

## 描述

Identify describes the format and characteristics of one or more image files as internally supported by the software. It will also report if an image is incomplete or corrupt. The information displayed includes the scene number, the file name, the width and height of the image, whether the image is colormapped or not, the number of colors in the image, the number of bytes in the image, the format of the image (JPEG, PNM, etc.), and finally the number of seconds in both user time and elapsed time it took to read and process the image. If -verbose or +ping are provided as an option, the pixel read rate is also displayed. An example line output from identify follows:

    images/aquarium.miff 640x480 PseudoClass 256c 
           308135b MIFF 0.000u 0:01

If -verbose is set, expect additional output including any image comment: 
 
    Image: images/aquarium.miff
    class: PseudoClass
    colors: 256
    signature: eb5dca81dd93ae7e6ffae99a527eb5dca8...
    matte: False
    geometry: 640x480
       depth: 8
    bytes: 308135
    format: MIFF
    comments:
    Imported from MTV raster image: aquarium.mtv

For some formats, additional format-specific information about the file will be written if the -debug coder or -debug all option is used.

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect for the set of images immediately following, until the set is terminated by the appearance of any option or -noop.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

??? info "-authenticate `<string>`"

    decrypt image with this password

??? info "-debug `<events>`"

    enable debug printout

??? info "-define `<key>`{=`<value>`},..."

    add coder/decoder specific options

??? info "-density `<width>`x`<height>`"

    horizontal and vertical resolution in pixels of the image

??? info "-depth `<value>`"

    depth of the image

??? info "-format `<string>`"

    output formatted image characteristics

??? info "-help"

    print usage instructions

??? info "-interlace `<type>`"

    the type of interlacing scheme

??? info "-limit `<type??? info "`<value>`"

    Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

??? info "-log `<string>`"

    Specify format for debug log

??? info "-ping"

    efficiently determine image characteristics

??? info "-sampling-factor `<horizontal_factor>`x`<vertical_factor>`"

    chroma subsampling factors

??? info "-size `<width>`x`<height>`{+offset}"

    width and height of the image

??? info "-verbose"

    print detailed information about the image

??? info "-version"

    print GraphicsMagick version string

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 