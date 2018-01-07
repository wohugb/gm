
# gm montage

## NAME

montage - create a composite image by combining several separate images 
 
## Contents

Synopsis
Description
Examples
Options
X Resources

## Synopsis

gm montage [ options ...] file [ [ options ...] file ...] output_file 
 
## Description

montage creates a composite image by combining several separate images. The images are tiled on the composite image with the name of the image optionally appearing just below the individual tile.

The composite image is constructed in the following manner. First, each image specified on the command line, except for the last, is scaled to fit the maximum tile size. The maximum tile size by default is 120x120. It can be modified with the -geometry command line argument or X resource. See Options for more information on command line arguments. See X(1) for more information on X resources. Note that the maximum tile size need not be a square.

Next the composite image is initialized with the color specified by the -background command line argument or X resource. The width and height of the composite image is determined by the title specified, the maximum tile size, the number of tiles per row, the tile border width and height, the image border width, and the label height. The number of tiles per row specifies how many images are to appear in each row of the composite image. The default is to have 5 tiles in each row and 4 tiles in each column of the composite. A specific value is specified with -tile. The tile border width and height, and the image border width defaults to the value of the X resource -borderwidth. It can be changed with the -borderwidth or -geometry command line argument or X resource. The label height is determined by the font you specify with the -font command line argument or X resource. If you do not specify a font, a font is chosen that allows the name of the image to fit the maximum width of a tiled area. The label colors is determined by the -background and -fill command line argument or X resource. Note, that if the background and pen colors are the same, labels will not appear.

Initially, the composite image title is placed at the top if one is specified (refer to -fill). Next, each image is set onto the composite image, surrounded by its border color, with its name centered just below it. The individual images are left-justified within the width of the tiled area. The order of the images is the same as they appear on the command line unless the images have a scene keyword. If a scene number is specified in each image, then the images are tiled onto the composite in the order of their scene number. Finally, the last argument on the command line is the name assigned to the composite image. By default, the image is written in the MIFF format and can be viewed or printed with display(1). 
 
Note, that if the number of tiles exceeds the default number of 20 (5 per row, 4 per column), more than one composite image is created. To ensure a single image is produced, use -tile to increase the number of tiles to meet or exceed the number of input images.

Finally, to create one or more empty spaces in the sequence of tiles, use the "NULL:" image format.

Note, a composite MIFF image displayed to an X server with display behaves differently than other images. You can think of the composite as a visual image directory. Choose a particular tile of the composite and press a button to display it. See display(1) and miff(5)

Back to Contents  

## Examples

To create a montage of a cockatoo, a parrot, and a hummingbird and write it to a file called birds, use:

    gm montage cockatoo.miff parrot.miff hummingbird.miff birds.miff
To tile several bird images so that they are at most 256 pixels in width and 192 pixels in height, surrounded by a red border, and separated by 10 pixels of background color, use:

    gm montage -geometry 256x192+10+10 -bordercolor red birds.* montage.miff
To create an unlabeled parrot image, 640 by 480 pixels, and surrounded by a border of black, use:

    gm montage -geometry 640x480 -bordercolor black -label "" parrot.miff
bird.miff
To create an image of an eagle with a textured background, use:

    gm montage -texture bumps.jpg eagle.jpg eagle.png
To join several GIF images together without any extraneous graphics (e.g. no label, no shadowing, no surrounding tile frame), use:

    gm montage +frame +shadow +label -tile 5x1 -geometry 50x50+0+0 *.png joined.png
Back to Contents  

## Options

Any option you specify on the command line remains in effect for the group of images following it, until the group is terminated by the appearance of any option or -noop. For example, to make a montage of three images, the first with 32 colors, the second with an unlimited number of colors, and the third with only 16 colors, use: 
 
    gm montage -colors 32 cockatoo.1 -noop cockatoo.2 -colors 16 cockatoo.3
cockatoos.miff
For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

> -adjoin

join images into a single multi-image file

> -affine <matrix>

drawing transform matrix

> -authenticate <string>

decrypt image with this password

> -background <color>

the background color

> -blue-primary <x>,<y>

blue chromaticity primary point

> -blur <radius>{x<sigma>}

blur the image with a Gaussian operator

> -bordercolor <color>

the border color

> -borderwidth <geometry>

the border width

> -chop <width>x<height>{+-}<x>{+-}<y>{%}

remove pixels from the interior of an image

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

> -crop <width>x<height>{+-}<x>{+-}<y>{%}

preferred size and location of the cropped image

> -debug <events>

enable debug printout

> -define <key>{=<value>},...

add coder/decoder specific options

> -density <width>x<height>

horizontal and vertical resolution in pixels of the image

> -depth <value>

depth of the image

> -display <host:display[.screen]>

specifies the X server to contact

> -dispose <method>

GIF disposal method

> -dither

apply Floyd/Steinberg error diffusion to the image

> -draw <string>

annotate an image with one or more graphic primitives

> -encoding <type>

specify the text encoding

> -endian <type>

specify endianness (MSB, LSB, or Native) of image

> -fill <color>

color to use when filling a graphic primitive

> -filter <type>

use this type of filter when resizing an image

> -font <name>

use this font when annotating the image with text

> -frame <width>x<height>+<outer bevel width>+<inner bevel width>

surround the image with an ornamental border

> -gamma <value>

level of gamma correction

> -geometry <width>x<height>{+-}<x>{+-}<y>{%}{@}{!}{^}{<}{>}

Specify dimension, offset, and resize options.

> -gravity <type>

direction primitive gravitates to when annotating the image.

> -green-primary <x>,<y>

green chromaticity primary point

> -help

print usage instructions

> -interlace <type>

the type of interlacing scheme

> -label <name>

assign a label to an image

> -limit <type> <value>

Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

> -log <string>

Specify format for debug log

> -matte

store matte channel if the image has one

> -mattecolor <color>

specify the color to be used with the -frame option

> -mode <value>

mode of operation

> -monitor

show progress indication

> -monochrome

transform the image to black and white

> -noop

NOOP (no option)

> -page <width>x<height>{+-}<x>{+-}<y>{%}{!}{<}{>}

size and location of an image canvas

> -pen <color>

(This option has been replaced by the -fill option)

> -pointsize <value>

pointsize of the PostScript, X11, or TrueType font

> -quality <value>

JPEG/MIFF/PNG/TIFF compression level

> -red-primary <x>,<y>

red chromaticity primary point

> -render

render vector operations

> -repage <width>x<height>+xoff+yoff[!]

Adjust image page offsets

> -resize <width>x<height>{%}{@}{!}{<}{>}

resize an image

> -rotate <degrees>{<}{>}

rotate the image

> -sampling-factor <horizontal_factor>x<vertical_factor>

chroma subsampling factors

> -scenes <value-value>

range of image scene numbers to read

> -shadow <radius>{x<sigma>}

shadow the montage

> -sharpen <radius>{x<sigma>}

sharpen the image

> -size <width>x<height>{+offset}

width and height of the image

> -strip

remove all profiles and text attributes from the image

> -stroke <color>

color to use when stroking a graphic primitive

> -strokewidth <value>

set the stroke width

> -texture <filename>

name of texture to tile onto the image background

> -thumbnail <width>x<height>{%}{@}{!}{<}{>}

resize an image (quickly)

> -tile <geometry>

layout of images [montage]

> -title <string>

assign title to displayed image [animate, display, montage]

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

> -verbose

print detailed information about the image

> -version

print GraphicsMagick version string

> -white-point <x>,<y>

chromaticity white point
For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 
Back to Contents  

> X Resources

Montage options can appear on the command line or in your X resource file. Options on the command line supersede values specified in your X resource file. See X(1) for more information on X resources.

All montage options have a corresponding X resource. In addition, montage uses the following X resources:


> background (class Background)

background color
Specifies the preferred color to use for the composite image background. The default is #ccc.


> borderColor (class BorderColor)

border color
Specifies the preferred color to use for the composite image border. The default is #ccc.


> borderWidth (class BorderWidth)

border width
Specifies the width in pixels of the composite image border. The default is 2.


> font (class Font)

font to use
Specifies the name of the preferred font to use when displaying text within the composite image. The default is 9x15, fixed, or 5x8 determined by the composite image size.


> matteColor (class MatteColor)

color of the frame
Specify the color of an image frame. A 3D effect is achieved by using highlight and shadow colors derived from this color. The default value is #697B8F.


> pen (class Pen)

text color
Specifies the preferred color to use for text within the composite image. The default is black.


> title (class Title)

composite image title
This resource specifies the title to be placed at the top of the composite image. The default is not to place a title at the top of the composite image.

Back to Contents  