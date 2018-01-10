
# 蒙太奇

## 命名

montage - create a composite image by combining several separate images 
 
## 内容

* 概要
* 描述
* 示例
* 选项
* X Resources

## 概要

gm montage [ options ...] file [ [ options ...] file ...] output_file 

## 描述

montage creates a composite image by combining several separate images. The images are tiled on the composite image with the name of the image optionally appearing just below the individual tile.

The composite image is constructed in the following manner. First, each image specified on the command line, except for the last, is scaled to fit the maximum tile size. The maximum tile size by default is 120x120. It can be modified with the -geometry command line argument or X resource. See Options for more information on command line arguments. See X(1) for more information on X resources. Note that the maximum tile size need not be a square.

Next the composite image is initialized with the color specified by the -background command line argument or X resource. The width and height of the composite image is determined by the title specified, the maximum tile size, the number of tiles per row, the tile border width and height, the image border width, and the label height. The number of tiles per row specifies how many images are to appear in each row of the composite image. The default is to have 5 tiles in each row and 4 tiles in each column of the composite. A specific value is specified with -tile. The tile border width and height, and the image border width defaults to the value of the X resource -borderwidth. It can be changed with the -borderwidth or -geometry command line argument or X resource. The label height is determined by the font you specify with the -font command line argument or X resource. If you do not specify a font, a font is chosen that allows the name of the image to fit the maximum width of a tiled area. The label colors is determined by the -background and -fill command line argument or X resource. Note, that if the background and pen colors are the same, labels will not appear.

Initially, the composite image title is placed at the top if one is specified (refer to -fill). Next, each image is set onto the composite image, surrounded by its border color, with its name centered just below it. The individual images are left-justified within the width of the tiled area. The order of the images is the same as they appear on the command line unless the images have a scene keyword. If a scene number is specified in each image, then the images are tiled onto the composite in the order of their scene number. Finally, the last argument on the command line is the name assigned to the composite image. By default, the image is written in the MIFF format and can be viewed or printed with display(1). 
 
Note, that if the number of tiles exceeds the default number of 20 (5 per row, 4 per column), more than one composite image is created. To ensure a single image is produced, use -tile to increase the number of tiles to meet or exceed the number of input images.

Finally, to create one or more empty spaces in the sequence of tiles, use the "NULL:" image format.

Note, a composite MIFF image displayed to an X server with display behaves differently than other images. You can think of the composite as a visual image directory. Choose a particular tile of the composite and press a button to display it. See display(1) and miff(5)

## 示例

To create a montage of a cockatoo, a parrot, and a hummingbird and write it to a file called birds, use:

    gm montage cockatoo.miff parrot.miff hummingbird.miff birds.miff

To tile several bird images so that they are at most 256 pixels in width and 192 pixels in height, surrounded by a red border, and separated by 10 pixels of background color, use:

    gm montage -geometry 256x192+10+10 -bordercolor red birds.* montage.miff

To create an unlabeled parrot image, 640 by 480 pixels, and surrounded by a border of black, use:

    gm montage -geometry 640x480 -bordercolor black -label "" parrot.miff bird.miff

To create an image of an eagle with a textured background, use:

    gm montage -texture bumps.jpg eagle.jpg eagle.png

To join several GIF images together without any extraneous graphics (e.g. no label, no shadowing, no surrounding tile frame), use:

    gm montage +frame +shadow +label -tile 5x1 -geometry 50x50+0+0 *.png joined.png


## 选项

Any option you specify on the command line remains in effect for the group of images following it, until the group is terminated by the appearance of any option or -noop. For example, to make a montage of three images, the first with 32 colors, the second with an unlimited number of colors, and the third with only 16 colors, use: 
 
    gm montage -colors 32 cockatoo.1 -noop cockatoo.2 -colors 16 cockatoo.3 cockatoos.miff

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

??? info "-adjoin"

    join images into a single multi-image file

??? info "-affine `<matrix>`"

    drawing transform matrix

??? info "-authenticate `<string>`"

    decrypt image with this password

??? info "-background `<color>`"

    the background color

??? info "-blue-primary `<x>`,`<y>`"

    blue chromaticity primary point

??? info "-blur `<radius>`{x`<sigma>`}"

    blur the image with a Gaussian operator

??? info "-bordercolor `<color>`"

    the border color

??? info "-borderwidth `<geometry>`"

    the border width

??? info "-chop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    remove pixels from the interior of an image

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

??? info "-crop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    preferred size and location of the cropped image

??? info "-debug `<events>`"

    enable debug printout

??? info "-define `<key>`{=`<value>`},..."

    add coder/decoder specific options

??? info "-density `<width>`x`<height>`"

    horizontal and vertical resolution in pixels of the image

??? info "-depth `<value>`"

    depth of the image

??? info "-display `<host:display[.screen]>`"

    specifies the X server to contact

??? info "-dispose `<method>`"

    GIF disposal method

??? info "-dither"

    apply Floyd/Steinberg error diffusion to the image

??? info "-draw `<string>`"

    annotate an image with one or more graphic primitives

??? info "-encoding `<type>`"

    specify the text encoding

??? info "-endian `<type>`"

    specify endianness (MSB, LSB, or Native) of image

??? info "-fill `<color>`"

    color to use when filling a graphic primitive

??? info "-filter `<type>`"

    se this type of filter when resizing an image

??? info "-font `<name>`"

    use this font when annotating the image with text

??? info "-frame `<width>`x`<height>`+`<outer bevel width>`+`<inner bevel width>`"

    surround the image with an ornamental border

??? info "-gamma `<value>`"

    level of gamma correction

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

??? info "-mattecolor `<color>`"

    specify the color to be used with the -frame option

??? info "-mode `<value>`"

    mode of operation

??? info "-monitor"

    show progress indication

??? info "-monochrome"

    transform the image to black and white

??? info "-noop"

    NOOP (no option)

??? info "-page `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{!}{`<}{>`}"

    size and location of an image canvas

??? info "-pen `<color>`"

    (This option has been replaced by the -fill option)

??? info "-pointsize `<value>`"

    pointsize of the PostScript, X11, or TrueType font

??? info "-quality `<value>`"

    JPEG/MIFF/PNG/TIFF compression level

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

??? info "-scenes `<value-value>`"

    range of image scene numbers to read

??? info "-shadow `<radius>`{x`<sigma>`}"

    shadow the montage

??? info "-sharpen `<radius>`{x`<sigma>`}"

    sharpen the image

??? info "-size `<width>`x`<height>`{+offset}"

    width and height of the image

??? info "-strip"

    remove all profiles and text attributes from the image

??? info "-stroke `<color>`"

    color to use when stroking a graphic primitive

??? info "-strokewidth `<value>`"

    set the stroke width

??? info "-texture `<filename>`"

    name of texture to tile onto the image background

??? info "-thumbnail `<width>`x`<height>`{%}{@}{!}{`<}{>`}"

    resize an image (quickly)

??? info "-tile `<geometry>`"

    layout of images [montage]

??? info "-title `<string>`"

    assign title to displayed image [animate, display, montage]

??? info "-transform"

    transform the image

??? info "-transparent `<color>`"

    make this color transparent within the image

??? info "-treedepth `<value>`"

    tree depth for the color reduction algorithm

??? info "-trim"

    trim an image

??? info "-type `<type>`"

    the image type

??? info "-verbose"

    print detailed information about the image

??? info "-version"

    print GraphicsMagick version string

??? info "-white-point `<x>`,`<y>`"

    chromaticity white point

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

## X Resources

Montage options can appear on the command line or in your X resource file. Options on the command line supersede values specified in your X resource file. See X(1) for more information on X resources.

All montage options have a corresponding X resource. In addition, montage uses the following X resources:

??? info "background (class Background)"

    background color
    Specifies the preferred color to use for the composite image background. The default is #ccc.

??? info "borderColor (class BorderColor)"

    border color
    Specifies the preferred color to use for the composite image border. The default is #ccc.

??? info "borderWidth (class BorderWidth)"

    border width
    Specifies the width in pixels of the composite image border. The default is 2.


??? info "font (class Font)"

    font to use
    Specifies the name of the preferred font to use when displaying text within the composite image. The default is 9x15, fixed, or 5x8 determined by the composite image size.


??? info "matteColor (class MatteColor)"

    color of the frame
    Specify the color of an image frame. A 3D effect is achieved by using highlight and shadow colors derived from this color. The default value is #697B8F.


??? info "pen (class Pen)"

    text color
    Specifies the preferred color to use for text within the composite image. The default is black.

??? info "title (class Title)"

    composite image title

    This resource specifies the title to be placed at the top of the composite image. The default is not to place a title at the top of the composite image.