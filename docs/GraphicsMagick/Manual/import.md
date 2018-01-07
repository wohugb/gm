
# gm import

## NAME

import - capture some or all of an X server screen and save the image to a file.

## Contents

Description
Examples
Options

## Synopsis

gm import [ options ... ] file

## Description

Import reads an image from any visible window on an X server and outputs it as an image file. You can capture a single window, the entire screen, or any rectangular portion of the screen. Use display for redisplay, printing, editing, formatting, archiving, image processing, etc. of the captured image.

The target window can be specified by id, name, or may be selected by clicking the mouse in the desired window. If you press a button and then drag, a rectangle will form which expands and contracts as the mouse moves. To save the portion of the screen defined by the rectangle, just release the button. The keyboard bell is rung once at the beginning of the screen capture and twice when it completes.

Back to Contents  

## Examples

To select an X window or an area of the screen with the mouse and save it in the MIFF image format to a file entitled window.miff, use:

    gm import window.miff
To select an X window or an area of the screen with the mouse and save it in the Encapsulated PostScript format to include in another document, use:

    gm import figure.eps
To capture the entire X server screen in the JPEG image format in a file entitled root.jpeg, without using the mouse, use:

    gm import -window root root.jpeg
To capture the 512x256 area at the upper right corner of the X server screen in the PNG image format in a well-compressed file entitled corner.png, without using the mouse, use:

    gm import -window root -crop 512x256-0+0 -quality 90
           corner.png
Back to Contents  

## Options

Options are processed in command line order. Any option you specify on the command line remains in effect until it is explicitly changed by specifying the option again with a different effect.

Import options can appear on the command line or in your X resources file. See X(1). Options on the command line supersede values specified in your X resources file.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

> -bordercolor <color>

the border color

> -colors <value>

preferred number of colors in the image

> -colorspace <value>

the type of colorspace

> -comment <string>

annotate an image with a comment

> -crop <width>x<height>{+-}<x>{+-}<y>{%}

preferred size and location of the cropped image

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

> -descend

obtain image by descending window hierarchy

> -display <host:display[.screen]>

specifies the X server to contact

> -dispose <method>

GIF disposal method

> -dither

apply Floyd/Steinberg error diffusion to the image

> -encoding <type>

specify the text encoding

> -endian <type>

specify endianness (MSB, LSB, or Native) of image

> -frame

include the X window frame in the imported image

> -geometry <width>x<height>{+-}<x>{+-}<y>{%}{@}{!}{^}{<}{>}

Specify dimension, offset, and resize options.

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

> -monitor

show progress indication

> -monochrome

transform the image to black and white

> -negate

replace every pixel with its complementary color

> -page <width>x<height>{+-}<x>{+-}<y>{%}{!}{<}{>}

size and location of an image canvas

> -pause <seconds>

pause between snapshots [import]

> -ping

efficiently determine image characteristics

> -pointsize <value>

pointsize of the PostScript, X11, or TrueType font

> -quality <value>

JPEG/MIFF/PNG/TIFF compression level

> -resize <width>x<height>{%}{@}{!}{<}{>}

resize an image

> -rotate <degrees>{<}{>}

rotate the image

> -sampling-factor <horizontal_factor>x<vertical_factor>

chroma subsampling factors

> -scene <value>

set scene number

> -screen

specify the screen to capture

> -set <attribute> <value>

set an image attribute

> +set <attribute>

unset an image attribute

> -silent

operate silently

> -snaps <value>

number of screen snapshots

> -thumbnail <width>x<height>{%}{@}{!}{<}{>}

resize an image (quickly)

> -transparent <color>

make this color transparent within the image

> -trim

trim an image

> -verbose

print detailed information about the image

> -version

print GraphicsMagick version string
For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 
