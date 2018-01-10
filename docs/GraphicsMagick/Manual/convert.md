
# 转换

## 命名

convert - convert an image or sequence of images 
 
## 内容

Synopsis
Description
Examples
Options

## 概要

gm convert [ options ... ] input_file [ options ... ] output_file 
 
## 描述

Convert converts an input file using one image format to an output file with a differing image format. In addition, various types of image processing can be performed on the converted image during the conversion process. Convert recognizes the image formats listed in GraphicsMagick(1). 
 
Back to Contents  

## 示例

To make a thumbnail of a JPEG image, use:

    gm convert -size 120x120 cockatoo.jpg -resize 120x120 +profile "*" thumbnail.jpg

In this example, '-size 120x120' gives a hint to the JPEG decoder that the image is going to be downscaled to 120x120, allowing it to run faster by avoiding returning full-resolution images to GraphicsMagick for the subsequent resizing operation. The '-resize 120x120' specifies the desired dimensions of the output image. It will be scaled so its largest dimension is 120 pixels. The '+profile "*"' removes any ICM, EXIF, IPTC, or other profiles that might be present in the input and aren't needed in the thumbnail.
To convert a MIFF image of a cockatoo to a SUN raster image, use:

    gm convert cockatoo.miff sun:cockatoo.ras
To convert a multi-page PostScript document to individual FAX pages, use:

    gm convert -monochrome document.ps fax:page
To convert a TIFF image to a PostScript A4 page with the image in the lower left-hand corner, use:

    gm convert -page A4+0+0 image.tiff document.ps
To convert a raw Gray image with a 128 byte header to a portable graymap, use:

    gm convert -depth 8 -size 768x512+128 gray:raw image.pgm
In this example, "raw" is the input file. Its format is "gray" and it has the dimensions and number of header bytes specified by the -size option and the sample depth specified by the -depth option. The output file is "image.pgm". The suffix ".pgm" specifies its format.

To convert a Photo CD image to a TIFF image, use:

    gm convert -size 1536x1024 img0009.pcd image.tiff
    gm convert img0009.pcd[4] image.tiff
To create a visual image directory of all your JPEG images, use:

    gm convert 'vid:*.jpg' directory.miff
To annotate an image with blue text using font 12x24 at position (100,100), use:

    gm convert -font helvetica -fill blue -draw "text 100,100 Cockatoo"
            bird.jpg bird.miff
To tile a 640x480 image with a JPEG texture with bumps use:

    gm convert -size 640x480 tile:bumps.jpg tiled.png
To surround an icon with an ornamental border to use with Mosaic(1), use:

    gm convert -mattecolor "#697B8F" -frame 6x6 bird.jpg icon.png
To create a MNG animation from a DNA molecule sequence, use:

    gm convert -delay 20 dna.* dna.mng
Back to Contents  

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect for the set of images that follows, until the set is terminated by the appearance of any option or -noop. Some options only affect the decoding of images and others only the encoding. The latter can appear after the final group of input images.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

??? info "-adjoin"

    join images into a single multi-image file

??? info "-affine `<matrix>`"

    drawing transform matrix

??? info "-antialias"

    remove pixel aliasing

??? info "-append"

    append a set of images

??? info "-asc-cdl `<spec>`"

    apply ASC CDL color transform

??? info "-authenticate `<string>`"

    decrypt image with this password

??? info "-auto-orient"

    orient (rotate) image so it is upright

??? info "-average"

    average a set of images

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

??? info "-box `<color>`"

    set the color of the annotation bounding box

??? info "-channel `<type>`"

    the type of channel

??? info "-charcoal `<factor>`"

    simulate a charcoal drawing

??? info "-chop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    remove pixels from the interior of an image

??? info "-clip"

    apply the clipping path, if one is present

??? info "-coalesce"

    merge a sequence of images

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

??? info "-crop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    preferred size and location of the cropped image

??? info "-cycle `<amount>`"

    displace image colormap by amount

??? info "-debug `<events>`"

    enable debug printout

??? info "-deconstruct"

    break down an image sequence into constituent parts

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

??? info "-flatten"

    flatten a sequence of images

??? info "-flip"

    create a "mirror image"

??? info "-flop"

    create a "mirror image"

??? info "-font `<name>`"

    use this font when annotating the image with text

??? info "-format `<string>`"

    output formatted image characteristics

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

??? info "-intent `<type>`"

    use this type of rendering intent when managing the image color

??? info "-interlace `<type>`"

    the type of interlacing scheme

??? info "-label `<name>`"

    assign a label to an image

??? info "-lat `<width>`x`<height>`{+-}`<offset>`{%}"

    perform local adaptive thresholding

??? info "-level `<black_point>`{,`<gamma>`}{,`<white_point>`}{%}"

    adjust the level of image contrast

??? info "-limit `<type>` `<value>`"

    Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

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

??? info "-morph `<frames>`"

    morphs an image sequence

??? info "-mosaic"

    create a mosaic from an image or an image sequence

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

    hange this color to the pen color within the image

??? info "-operator channel operator rvalue[%]"

    apply a mathematical, bitwise, or value operator to an image channel

??? info "-ordered-dither `<channeltype>` `<NxN>`"

    ordered dither the image

??? info "-orient `<orientation>`"

    Set the image orientation attribute

??? info "-page `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{!}{`<}{>`}"

    size and location of an image canvas

??? info "-paint `<radius>`"

    simulate an oil painting

??? info "-pen `<color>`"

    (This option has been replaced by the -fill option)

??? info "-ping"

    efficiently determine image characteristics

??? info "-pointsize `<value>`"

    pointsize of the PostScript, X11, or TrueType font

??? info "-preview `<type>`"

    image preview type

??? info "-process `<command>`"

    process a sequence of images using a process module

??? info "-profile `<filename>`"

    add ICM, IPTC, or generic profile to image

??? info "-quality `<value>`"

    JPEG/MIFF/PNG/TIFF compression level

??? info "-raise `<width>`x`<height>`"

    lighten or darken image edges

??? info "-random-threshold `<channeltype>` `<LOWxHIGH>`"

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

??? info "-set `<attribute>` `<value>`"

    set an image attribute

??? info " +set `<attribute>`"

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

??? info "-use-pixmap"

    use the pixmap

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

??? info "-write `<filename>`"

    write an intermediate image [convert, composite]

For a more detailed description of each option, see Options, above. GraphicsMagick(1).