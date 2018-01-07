
# gm convert

## NAME

convert - convert an image or sequence of images 
 
## Contents

Synopsis
Description
Examples
Options

## Synopsis

gm convert [ options ... ] input_file [ options ... ] output_file 
 
## Description

Convert converts an input file using one image format to an output file with a differing image format. In addition, various types of image processing can be performed on the converted image during the conversion process. Convert recognizes the image formats listed in GraphicsMagick(1). 
 
Back to Contents  

## Examples

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

## Options

Options are processed in command line order. Any option you specify on the command line remains in effect for the set of images that follows, until the set is terminated by the appearance of any option or -noop. Some options only affect the decoding of images and others only the encoding. The latter can appear after the final group of input images.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

> -adjoin

join images into a single multi-image file

> -affine <matrix>

drawing transform matrix

> -antialias

remove pixel aliasing

> -append

append a set of images

> -asc-cdl <spec>

apply ASC CDL color transform

> -authenticate <string>

decrypt image with this password

> -auto-orient

orient (rotate) image so it is upright

> -average

average a set of images

> -background <color>

the background color

> -black-threshold red[,green][,blue][,opacity]

pixels below the threshold become black

> -blue-primary <x>,<y>

blue chromaticity primary point

> -blur <radius>{x<sigma>}

blur the image with a Gaussian operator

> -border <width>x<height>

surround the image with a border of color

> -bordercolor <color>

the border color

> -box <color>

set the color of the annotation bounding box

> -channel <type>

the type of channel

> -charcoal <factor>

simulate a charcoal drawing

> -chop <width>x<height>{+-}<x>{+-}<y>{%}

remove pixels from the interior of an image

> -clip

apply the clipping path, if one is present

> -coalesce

merge a sequence of images

> -colorize <value>

colorize the image with the pen color

> -colors <value>

preferred number of colors in the image

> -colorspace <value>

the type of colorspace

> -comment <string>

annotate an image with a comment

> -compose <operator>

the type of image composition

> -compress <type>

the type of image compression

> -contrast

enhance or reduce the image contrast

> -convolve <kernel>

convolve image with the specified convolution kernel

> -crop <width>x<height>{+-}<x>{+-}<y>{%}

preferred size and location of the cropped image

> -cycle <amount>

displace image colormap by amount

> -debug <events>

enable debug printout

> -deconstruct

break down an image sequence into constituent parts

> -define <key>{=<value>},...

add coder/decoder specific options

> -delay <1/100ths of a second>

display the next image after pausing

> -density <width>x<height>

horizontal and vertical resolution in pixels of the image

> -depth <value>

depth of the image

> -despeckle

reduce the speckles within an image

> -display <host:display[.screen]>

specifies the X server to contact

> -dispose <method>

GIF disposal method

> -dither

apply Floyd/Steinberg error diffusion to the image

> -draw <string>

annotate an image with one or more graphic primitives

> -edge <radius>

detect edges within an image

> -emboss <radius>

emboss an image

> -encoding <type>

specify the text encoding

> -endian <type>

specify endianness (MSB, LSB, or Native) of image

> -enhance

apply a digital filter to enhance a noisy image

> -equalize

perform histogram equalization to the image

> -extent <width>x<height>{+-}<x>{+-}<y>

composite image on background color canvas image

> -fill <color>

color to use when filling a graphic primitive

> -filter <type>

use this type of filter when resizing an image

> -flatten

flatten a sequence of images

> -flip

create a "mirror image"

> -flop

create a "mirror image"

> -font <name>

use this font when annotating the image with text

> -format <string>

output formatted image characteristics

> -frame <width>x<height>+<outer bevel width>+<inner bevel width>

surround the image with an ornamental border

> -fuzz <distance>{%}

colors within this Euclidean distance are considered equal

> -gamma <value>

level of gamma correction

> -gaussian <radius>{x<sigma>}

blur the image with a Gaussian operator

> -geometry <width>x<height>{+-}<x>{+-}<y>{%}{@}{!}{^}{<}{>}

Specify dimension, offset, and resize options.

> -gravity <type>

direction primitive gravitates to when annotating the image.

> -green-primary <x>,<y>

green chromaticity primary point

> -hald-clut <clut>

apply a Hald CLUT to the image

> -help

print usage instructions

> -implode <factor>

implode image pixels about the center

> -intent <type>

use this type of rendering intent when managing the image color

> -interlace <type>

the type of interlacing scheme

> -label <name>

assign a label to an image

> -lat <width>x<height>{+-}<offset>{%}

perform local adaptive thresholding

> -level <black_point>{,<gamma>}{,<white_point>}{%}

adjust the level of image contrast

> -limit <type> <value>

Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

> -list <type>

the type of list

> -log <string>

Specify format for debug log

> -loop <iterations>

add Netscape loop extension to your GIF animation

> -magnify

magnify the image

> -map <filename>

choose a particular set of colors from this image

> -mask <filename>

Specify a clipping mask

> -matte

store matte channel if the image has one

> -mattecolor <color>

specify the color to be used with the -frame option

> -median <radius>

apply a median filter to the image

> -minify <factor>

minify the image

> -modulate brightness[,saturation[,hue]]

vary the brightness, saturation, and hue of an image

> -monitor

show progress indication

> -monochrome

transform the image to black and white

> -morph <frames>

morphs an image sequence

> -mosaic

create a mosaic from an image or an image sequence

> -motion-blur <radius>{x<sigma>}{+angle}

Simulate motion blur

> -negate

replace every pixel with its complementary color

> -noise <radius|type>

add or reduce noise in an image

> -noop

NOOP (no option)

> -normalize

transform image to span the full range of color values

> -opaque <color>

change this color to the pen color within the image

> -operator channel operator rvalue[%]

apply a mathematical, bitwise, or value operator to an image channel

> -ordered-dither <channeltype> <NxN>

ordered dither the image

> -orient <orientation>

Set the image orientation attribute

> -page <width>x<height>{+-}<x>{+-}<y>{%}{!}{<}{>}

size and location of an image canvas

> -paint <radius>

simulate an oil painting

> -pen <color>

(This option has been replaced by the -fill option)

> -ping

efficiently determine image characteristics

> -pointsize <value>

pointsize of the PostScript, X11, or TrueType font

> -preview <type>

image preview type

> -process <command>

process a sequence of images using a process module

> -profile <filename>

add ICM, IPTC, or generic profile to image

> -quality <value>

JPEG/MIFF/PNG/TIFF compression level

> -raise <width>x<height>

lighten or darken image edges

> -random-threshold <channeltype> <LOWxHIGH>

random threshold the image

> -recolor <matrix>

apply a color translation matrix to image channels

> -red-primary <x>,<y>

red chromaticity primary point

> -region <width>x<height>{+-}<x>{+-}<y>

apply options to a portion of the image

> -render

render vector operations

> -repage <width>x<height>+xoff+yoff[!]

Adjust image page offsets

> -resample <horizontal>x<vertical>

Resample image to specified horizontal and vertical resolution

> -resize <width>x<height>{%}{@}{!}{<}{>}

resize an image

> -roll {+-}<x>{+-}<y>

roll an image vertically or horizontally

> -rotate <degrees>{<}{>}

rotate the image

> -sample <geometry>

scale image using pixel sampling

> -sampling-factor <horizontal_factor>x<vertical_factor>

chroma subsampling factors

> -scale <geometry>

scale the image.

> -scene <value>

set scene number

> -set <attribute> <value>

set an image attribute

> +set <attribute>

unset an image attribute

> -segment <cluster threshold>x<smoothing threshold>

segment an image

> -shade <azimuth>x<elevation>

shade the image using a distant light source

> -sharpen <radius>{x<sigma>}

sharpen the image

> -shave <width>x<height>{%}

shave pixels from the image edges

> -shear <x degrees>x<y degrees>

shear the image along the X or Y axis

> -size <width>x<height>{+offset}

width and height of the image

> -solarize <factor>

negate all pixels above the threshold level

> -spread <amount>

displace image pixels by a random amount

> -strip

remove all profiles and text attributes from the image

> -stroke <color>

color to use when stroking a graphic primitive

> -strokewidth <value>

set the stroke width

> -swirl <degrees>

swirl image pixels about the center

> -texture <filename>

name of texture to tile onto the image background

> -threshold <value>{%}

threshold the image

> -thumbnail <width>x<height>{%}{@}{!}{<}{>}

resize an image (quickly)

> -tile <filename>

tile image when filling a graphic primitive

> -transform

transform the image

> -transparent <color>

make this color transparent within the image

> -treedepth <value>

tree depth for the color reduction algorithm

> -trim

trim an image

> -type <type>

the image type

> -units <type>

the units of image resolution

> -unsharp <radius>{x<sigma>}{+<amount>}{+<threshold>}

sharpen the image with an unsharp mask operator

> -use-pixmap

use the pixmap

> -verbose

print detailed information about the image

> -version

print GraphicsMagick version string

> -view <string>

FlashPix viewing parameters

> -virtual-pixel <method>

specify contents of "virtual pixels"

> -wave <amplitude>x<wavelength>

alter an image along a sine wave

> -white-point <x>,<y>

chromaticity white point

> -white-threshold red[,green][,blue][,opacity]

pixels above the threshold become white

> -write <filename>

write an intermediate image [convert, composite]
For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 
Back to Contents  