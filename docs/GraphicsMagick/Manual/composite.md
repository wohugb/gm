# 合并

## 命名

composite - composite images together.

## 内容

* 概要
* 描述
* 举例
* 选项

## 概要

```sh
gm composite [ options ... ] change-image base-image [ mask-image ] output-image 
```

## 描述

composite composites (combines) images to create new images.

base-image is the base image and change-image contains the changes. ouput-image is the result, and normally has the same dimensions as base-image.

The optional mask-image can be used to provide opacity information for change-image when it has none or if you want a different mask. A mask image is typically grayscale and the same size as base-image. If mask-image is not grayscale, it is converted to grayscale and the resulting intensities are used as opacity information.

## 举例

To composite an image of a cockatoo with a perch, use:

    gm composite cockatoo.miff perch.ras composite.miff

To compute the difference between images in a series, use:

    gm composite -compose difference series.2 series.1 difference.miff
To composite an image of a cockatoo with a perch starting at location (100,150), use:

    gm composite -geometry +100+150 cockatoo.miff perch.ras composite.miff

To tile a logo across your image of a cockatoo, use

    gm convert +shade 30x60 cockatoo.miff mask.miff
    gm composite -compose bumpmap -tile logo.png
              cockatoo.miff mask.miff composite.miff

To composite a red, green, and blue color plane into a single composite image, try

    gm composite -compose CopyGreen green.png red.png red-green.png
    gm composite -compose CopyBlue blue.png red-green.png composite.png

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect only for the image that follows. All options are reset to their default values after each image is read.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

??? info "-authenticate `<string>`"

    decrypt image with this password

??? info "-background `<color>`"

    the background color

??? info "-blue-primary `<x>`,`<y>`"

    blue chromaticity primary point

??? info "-colors `<value>`"

    preferred number of colors in the image

??? info "-colorspace `<value>`"

    the type of colorspace

??? info "-comment `<string>`"

    annotate an image with a comment

??? info "-compose `<operator>`"

    the type of image composition

??? info "-compress `<type>`"

    the type of image compression

??? info "-debug `<events>`"

    enable debug printout

??? info "-define `<key>`{=`<value>`},..."

    add coder/decoder specific options

??? info "-density `<width>`x`<height>`"

    horizontal and vertical resolution in pixels of the image

??? info "-depth `<value>`"

    depth of the image

??? info "-displace `<horizontal scale>`x`<vertical scale>`"

    shift image pixels as defined by a displacement map

??? info "-display `<host:display[.screen]>`"

    specifies the X server to contact

??? info "-dispose `<method>`"

    GIF disposal method

??? info "-dissolve `<percent>`"

    dissolve an image into another by the given percent

??? info "-dither"

    apply Floyd/Steinberg error diffusion to the image

??? info "-encoding `<type>`"

    specify the text encoding

??? info "-endian `<type>`"

    specify endianness (MSB, LSB, or Native) of image

??? info "-filter `<type>`"

    use this type of filter when resizing an image

??? info "-font `<name>`"

    use this font when annotating the image with text

??? info "-geometry `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{@}{!}{^}{`<}{>`}"

    Specify dimension, offset, and resize options.

??? info "-gravity `<type>`"

    direction primitive gravitates to when annotating the image.

??? info "-green-primary `<x>`,`<y>`"

    green chromaticity primary point

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

??? info "-matte"

    store matte channel if the image has one

??? info "-monitor"

    show progress indication

??? info "-monochrome"

    transform the image to black and white

??? info "-negate"

    replace every pixel with its complementary color

??? info "-page `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{!}{`<}{>`}"

    size and location of an image canvas

??? info "-profile `<filename>`"

    add ICM, IPTC, or generic profile to image

??? info "-quality `<value>`"

    JPEG/MIFF/PNG/TIFF compression level

??? info "-recolor `<matrix>`"

    apply a color translation matrix to image channels

??? info "-red-primary `<x>`,`<y>`"

    red chromaticity primary point

??? info "-render"

    render vector operations

??? info "-repage `<width>`x`<height>`+xoff+yoff[!]"

    Adjust image page offsets

??? info "-resize `<width>`x`<height>`{%}{@}{!}{`<}{>`}"

    resize an image

??? info "-rotate `<degrees>`{`<}{>`}"

    rotate the image

??? info "-sampling-factor `<horizontal_factor>`x`<vertical_factor>`"

    chroma subsampling factors

??? info "-scene `<value>`"

    set scene number

??? info "-set `<attribute??? info "`<value>`"

    set an image attribute

??? info "+set `<attribute>`"

    unset an image attribute

??? info "-sharpen `<radius>`{x`<sigma>`}"

    sharpen the image

??? info "-size `<width>`x`<height>`{+offset}"

    width and height of the image

??? info "-stegano `<offset>`"

    hide watermark within an image

??? info "-stereo"

    composite two images to create a stereo anaglyph

??? info "-strip"

    remove all profiles and text attributes from the image

??? info "-thumbnail `<width>`x`<height>`{%}{@}{!}{`<}{>`}"

    resize an image (quickly)

??? info "-treedepth `<value>`"

    tree depth for the color reduction algorithm

??? info "-trim"

    trim an image

??? info "-type `<type>`"

    the image type

??? info "-units `<type>`"

    the units of image resolution

??? info "-unsharp `<radius>`{x`<sigma>`}{+`<amount>`}{+`<threshold>`}"

    sharpen the image with an unsharp mask operator

??? info "-verbose"

    print detailed information about the image

??? info "-version"

    print GraphicsMagick version string

??? info "-watermark `<brightness>`x`<saturation>`"

    percent brightness and saturation of a watermark

??? info "-white-point `<x>`,`<y>`"

    chromaticity white point

??? info "-write `<filename>`"

    write an intermediate image [convert, composite]

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
