
# 压缩锐化

## 命名

mogrify - mogrify an image

## 内容

Synopsis
Description
Examples
Options

## 概要

gm mogrify [ options ... ] file ... 
 
## 描述

Mogrify transforms an image or a sequence of images. These transforms include image scaling, image rotation, color reduction, and others. Each transmogrified image overwrites the corresponding original image, unless an option such as -format causes the output filename to be different from the input filename. 
 
The graphics formats supported by mogrify are listed in GraphicsMagick(1).

## 示例

To convert all the TIFF files in a particular directory to JPEG, use:

    gm mogrify -format jpeg *.tiff

To convert a directory full of JPEG images to thumbnails, use:

    gm mogrify -size 120x120 *.jpg -resize 120x120 +profile "*"

In this example, '-size 120x120' gives a hint to the JPEG decoder that the images are going to be downscaled to 120x120, allowing it to run faster by avoiding returning full-resolution images to GraphicsMagick for the subsequent resizing operation. The '-resize 120x120' specifies the desired dimensions of the output images. It will be scaled so its largest dimension is 120 pixels. The '+profile "*"' removes any ICM, EXIF, IPTC, or other profiles that might be present in the input and aren't needed in the thumbnails.
To scale an image of a cockatoo to exactly 640 pixels in width and 480 pixels in height, use:

    gm mogrify -resize 640x480! cockatoo.miff

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect for the set of images that follows, until the set is terminated by the appearance of any option or -noop.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

??? info "-affine `<matrix>`"

    drawing transform matrix

??? info "-antialias"

    remove pixel aliasing

??? info "-asc-cdl `<spec>`"

    apply ASC CDL color transform

??? info "-authenticate `<string>`"

    decrypt image with this password

??? info "-auto-orient"

    orient (rotate) image so it is upright

??? info "-background `<color>`"

    the background color

??? info "-black-threshold red[,green][,blue][,opacity]"

    pixels below the threshold become black

??? info "-blue-primary `<x>`,`<y>`"

    blue chromaticity primary point

??? info "-blur `<radius>`{x`<sigma>`}"

    blur the image with a Gaussian operator

??? info "-border `<width>`x`<height>`"

    surround the image with a border of color

??? info "-bordercolor `<color>`"

    the border color

??? info "-channel `<type>`"

    the type of channel

??? info "-charcoal `<factor>`"

    simulate a charcoal drawing

??? info "-colorize `<value>`"

    colorize the image with the pen color

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

??? info "-contrast"

    enhance or reduce the image contrast

??? info "-convolve `<kernel>`"

    convolve image with the specified convolution kernel

??? info "-create-directories"

    create output directory if required

??? info "-crop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    preferred size and location of the cropped image

??? info "-cycle `<amount>`"

    displace image colormap by amount

??? info "-debug `<events>`"

    enable debug printout

??? info "-define `<key>`{=`<value>`},..."

    add coder/decoder specific options

??? info "-delay `<1/100ths of a second>`"

    display the next image after pausing

??? info "-density `<width>`x`<height>`"

    horizontal and vertical resolution in pixels of the image

??? info "-depth `<value>`"

    depth of the image

??? info "-despeckle"

    reduce the speckles within an image

??? info "-display `<host:display[.screen]>`"

    specifies the X server to contact

??? info "-dispose `<method>`"

    GIF disposal method

??? info "-dither"

    apply Floyd/Steinberg error diffusion to the image

??? info "-draw `<string>`"

    annotate an image with one or more graphic primitives

??? info "-edge `<radius>`"

    detect edges within an image

??? info "-emboss `<radius>`"

    emboss an image

??? info "-encoding `<type>`"

    specify the text encoding

??? info "-endian `<type>`"

    specify endianness (MSB, LSB, or Native) of image

??? info "-enhance"

    apply a digital filter to enhance a noisy image

??? info "-equalize"

    perform histogram equalization to the image

??? info "-extent `<width>`x`<height>`{+-}`<x>`{+-}`<y>`"

    composite image on background color canvas image

??? info "-fill `<color>`"

    color to use when filling a graphic primitive

??? info "-filter `<type>`"

    use this type of filter when resizing an image

??? info "-flip"

    create a "mirror image"

??? info "-flop"

    create a "mirror image"

??? info "-font `<name>`"

    use this font when annotating the image with text

??? info "-format `<type>`"

    the image format type

??? info "-frame `<width>`x`<height>`+`<outer bevel width>`+`<inner bevel width>`"

    surround the image with an ornamental border

??? info "-fuzz `<distance>`{%}"

    colors within this Euclidean distance are considered equal

??? info "-gamma `<value>`"

    level of gamma correction

??? info "-gaussian `<radius>`{x`<sigma>`}"

    blur the image with a Gaussian operator

??? info "-geometry `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{@}{!}{^}{`<}{>`}"

    Specify dimension, offset, and resize options.

??? info "-gravity `<type>`"

    direction primitive gravitates to when annotating the image.

??? info "-green-primary `<x>`,`<y>`"

    green chromaticity primary point

??? info "-hald-clut `<clut>`"

    apply a Hald CLUT to the image

??? info "-help"

    print usage instructions

??? info "-implode `<factor>`"

    implode image pixels about the center

??? info "-interlace `<type>`"

    the type of interlacing scheme

??? info "-label `<name>`"

    assign a label to an image

??? info "-lat `<width>`x`<height>`{+-}`<offset>`{%}"

    perform local adaptive thresholding

??? info "-level `<black_point>`{,`<gamma>`}{,`<white_point>`}{%}"

    adjust the level of image contrast

??? info "-limit `<type??? info "`<value>`"

    Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

??? info "-linewidth"

    the line width for subsequent draw operations

??? info "-list `<type>`"

    the type of list

??? info "-log `<string>`"

    Specify format for debug log

??? info "-loop `<iterations>`"

    add Netscape loop extension to your GIF animation

??? info "-magnify"

    magnify the image

??? info "-map `<filename>`"

    choose a particular set of colors from this image

??? info "-mask `<filename>`"

    Specify a clipping mask

??? info "-matte"

    store matte channel if the image has one

??? info "-mattecolor `<color>`"

    specify the color to be used with the -frame option

??? info "-median `<radius>`"

    apply a median filter to the image

??? info "-minify `<factor>`"

    minify the image

??? info "-modulate brightness[,saturation[,hue]]"

    vary the brightness, saturation, and hue of an image

??? info "-monitor"

    show progress indication

??? info "-monochrome"

    transform the image to black and white

??? info "-motion-blur `<radius>`{x`<sigma>`}{+angle}"

    Simulate motion blur

??? info "-negate"

    replace every pixel with its complementary color

??? info "-noise `<radius|type>`"

    add or reduce noise in an image

??? info "-noop"

    NOOP (no option)

??? info "-normalize"

    transform image to span the full range of color values

??? info "-opaque `<color>`"

    change this color to the pen color within the image

??? info "-operator channel operator rvalue[%]"

    apply a mathematical, bitwise, or value operator to an image channel

??? info "-ordered-dither `<channeltype??? info \"`<NxN>`"

    ordered dither the image

??? info "-output-directory `<directory>`"

    output files to directory

??? info "-orient `<orientation>`"

    Set the image orientation attribute

??? info "-page `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{!}{`<}{>`}"

    size and location of an image canvas

??? info "-paint `<radius>`"

    simulate an oil painting

??? info "-pen `<color>`"

    (This option has been replaced by the -fill option)

??? info "-pointsize `<value>`"

    pointsize of the PostScript, X11, or TrueType font

??? info "-profile `<filename>`"

    add ICM, IPTC, or generic profile to image

??? info "-preserve-timestamp"

    preserve the original timestamps of the file

??? info "-quality `<value>`"

    JPEG/MIFF/PNG/TIFF compression level

??? info "-raise `<width>`x`<height>`"

    lighten or darken image edges

??? info "-random-threshold `<channeltype??? info "`<LOWxHIGH>`"

    random threshold the image

??? info "-recolor `<matrix>`"

    apply a color translation matrix to image channels

??? info "-red-primary `<x>`,`<y>`"

    red chromaticity primary point

??? info "-region `<width>`x`<height>`{+-}`<x>`{+-}`<y>`"

    apply options to a portion of the image

??? info "-render"

    render vector operations

??? info "-repage `<width>`x`<height>`+xoff+yoff[!]"

    Adjust image page offsets

??? info "-resample `<horizontal>`x`<vertical>`"

    Resample image to specified horizontal and vertical resolution

??? info "-resize `<width>`x`<height>`{%}{@}{!}{`<}{>`}"

    resize an image

??? info "-roll {+-}`<x>`{+-}`<y>`"

    roll an image vertically or horizontally

??? info "-rotate `<degrees>`{`<}{>`}"

    rotate the image

??? info "-sample `<geometry>`"

    scale image using pixel sampling

??? info "-sampling-factor `<horizontal_factor>`x`<vertical_factor>`"

    chroma subsampling factors

??? info "-scale `<geometry>`"

    scale the image.

??? info "-scene `<value>`"

    set scene number

??? info "-set `<attribute??? info "`<value>`"

    set an image attribute

??? info "+set `<attribute>`"

    unset an image attribute

??? info "-segment `<cluster threshold>`x`<smoothing threshold>`"

    segment an image

??? info "-shade `<azimuth>`x`<elevation>`"

    shade the image using a distant light source

??? info "-sharpen `<radius>`{x`<sigma>`}"

    sharpen the image

??? info "-shave `<width>`x`<height>`{%}"

    shave pixels from the image edges

??? info "-shear `<x degrees>`x`<y degrees>`"

    shear the image along the X or Y axis

??? info "-size `<width>`x`<height>`{+offset}"

    width and height of the image

??? info "-solarize `<factor>`"

    negate all pixels above the threshold level

??? info "-spread `<amount>`"

    displace image pixels by a random amount

??? info "-strip"

    remove all profiles and text attributes from the image

??? info "-stroke `<color>`"

    color to use when stroking a graphic primitive

??? info "-strokewidth `<value>`"

    set the stroke width

??? info "-swirl `<degrees>`"

    swirl image pixels about the center

??? info "-texture `<filename>`"

    name of texture to tile onto the image background

??? info "-threshold `<value>`{%}"

    threshold the image

??? info "-thumbnail `<width>`x`<height>`{%}{@}{!}{`<}{>`}"

    resize an image (quickly)

??? info "-tile `<filename>`"

    tile image when filling a graphic primitive

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

??? info "-units `<type>`"

    the units of image resolution

??? info "-unsharp `<radius>`{x`<sigma>`}{+`<amount>`}{+`<threshold>`}"

    sharpen the image with an unsharp mask operator

??? info "-verbose"

    print detailed information about the image

??? info "-version"

    print GraphicsMagick version string

??? info "-view `<string>`"

    FlashPix viewing parameters

??? info "-virtual-pixel `<method>`"

    specify contents of "virtual pixels"

??? info "-wave `<amplitude>`x`<wavelength>`"

    alter an image along a sine wave

??? info "-white-point `<x>`,`<y>`"

    chromaticity white point

??? info "-white-threshold red[,green][,blue][,opacity]"

    pixels above the threshold become white

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 
