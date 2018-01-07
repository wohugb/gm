
# gm mogrify

## NAME

mogrify - mogrify an image

## Contents

Synopsis
Description
Examples
Options

## Synopsis

gm mogrify [ options ... ] file ... 
 
## Description

Mogrify transforms an image or a sequence of images. These transforms include image scaling, image rotation, color reduction, and others. Each transmogrified image overwrites the corresponding original image, unless an option such as -format causes the output filename to be different from the input filename. 
 
The graphics formats supported by mogrify are listed in GraphicsMagick(1).

Back to Contents  

## Examples

To convert all the TIFF files in a particular directory to JPEG, use:

    gm mogrify -format jpeg *.tiff
To convert a directory full of JPEG images to thumbnails, use:

    gm mogrify -size 120x120 *.jpg -resize 120x120 +profile "*"

In this example, '-size 120x120' gives a hint to the JPEG decoder that the images are going to be downscaled to 120x120, allowing it to run faster by avoiding returning full-resolution images to GraphicsMagick for the subsequent resizing operation. The '-resize 120x120' specifies the desired dimensions of the output images. It will be scaled so its largest dimension is 120 pixels. The '+profile "*"' removes any ICM, EXIF, IPTC, or other profiles that might be present in the input and aren't needed in the thumbnails.
To scale an image of a cockatoo to exactly 640 pixels in width and 480 pixels in height, use:

    gm mogrify -resize 640x480! cockatoo.miff
Back to Contents  

## Options

Options are processed in command line order. Any option you specify on the command line remains in effect for the set of images that follows, until the set is terminated by the appearance of any option or -noop.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

> -affine <matrix>

drawing transform matrix

> -antialias

remove pixel aliasing

> -asc-cdl <spec>

apply ASC CDL color transform

> -authenticate <string>

decrypt image with this password

> -auto-orient

orient (rotate) image so it is upright

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

> -channel <type>

the type of channel

> -charcoal <factor>

simulate a charcoal drawing

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

> -create-directories

create output directory if required

> -crop <width>x<height>{+-}<x>{+-}<y>{%}

preferred size and location of the cropped image

> -cycle <amount>

displace image colormap by amount

> -debug <events>

enable debug printout

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

> -flip

create a "mirror image"

> -flop

create a "mirror image"

> -font <name>

use this font when annotating the image with text

> -format <type>

the image format type

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

> -linewidth

the line width for subsequent draw operations

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

> -output-directory <directory>

output files to directory

> -orient <orientation>

Set the image orientation attribute

> -page <width>x<height>{+-}<x>{+-}<y>{%}{!}{<}{>}

size and location of an image canvas

> -paint <radius>

simulate an oil painting

> -pen <color>

(This option has been replaced by the -fill option)

> -pointsize <value>

pointsize of the PostScript, X11, or TrueType font

> -profile <filename>

add ICM, IPTC, or generic profile to image

> -preserve-timestamp

preserve the original timestamps of the file

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
For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 
Back to Contents  