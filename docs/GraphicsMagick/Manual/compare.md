
# gm compare

## NAME

compare - compare two images.

## Contents

Synopsis
Description
Examples
Options

## Synopsis

gm compare [ options ... ] reference-image [ options ... ] compare-image [ options ... ]

## Description

compare compares two similar images using a specified statistical method (see -metric) and/or by writing a difference image (-file), with the altered pixels annotated using a specified method (see -highlight-style) and color (see -highlight-color).

Reference-image is the original image and compare-image is the (possibly) altered version, which should have the same dimensions as reference-image.

## Examples

To compare two images using Mean Square Error (MSE) statistical analysis use:

    compare -metric mse original.miff compare.miff
To create an annotated difference image use:

    compare -highlight-style assign -highlight-color purple -file diff.miff original.miff compare.miff
Back to Contents  

## Options

Options are processed in command line order. Any option you specify on the command line remains in effect only for the image that follows. All options are reset to their default values after each image is read.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

> -authenticate <string>

decrypt image with this password

> -colorspace <value>

the type of colorspace

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

> -endian <type>

specify endianness (MSB, LSB, or Native) of image

> -file <filename>

write annotated difference image to file

> -help

print usage instructions

> -highlight-color <color>

pixel annotation color

> -highlight-style <style>

pixel annotation style

> -interlace <type>

the type of interlacing scheme

> -limit <type> <value>

Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

> -log <string>

Specify format for debug log

> -matte

store matte channel if the image has one

> -maximum-error <limit>

specifies the maximum amount of total image error

> -metric <metric>

comparison metric (MAE, MSE, PAE, PSNR, RMSE)

> -monitor

show progress indication

> -sampling-factor <horizontal_factor>x<vertical_factor>

chroma subsampling factors

> -size <width>x<height>{+offset}

width and height of the image

> -type <type>

the image type

> -verbose

print detailed information about the image

> -version

print GraphicsMagick version string
For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 
Back to Contents  