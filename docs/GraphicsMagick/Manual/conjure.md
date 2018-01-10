
# 脚本语言

## 命名

conjure - process a Magick Scripting Language (MSL) script
## 内容

Synopsis
Description
Options
Magick Scripting Language

## 概要

gm conjure [ options ] script.msl [ [ options ] script.msl ] 
 
## 描述

The Magick scripting language (MSL) will primarily benefit those that want to accomplish custom image processing tasks but do not wish to program, or those that do not have access to a Perl interpreter or a compiler. The interpreter is called conjure and here is an example script:

```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <image size="400x400" >
      <read filename="image.gif" />
      <get width="base-width" height="base-height" />
      <resize geometry="%[dimensions]" />
      <get width="width" height="height" />
      <print output=
        "Image sized from %[base-width]x%[base-height]
         to %[width]x%[height].\n" />
      <write filename="image.png" />
    </image>
```

invoked with

```sh
    gm conjure -dimensions 400x400 incantation.msl
```

All operations will closely follow the key/value pairs defined in PerlMagick, unless otherwise noted.

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect until it is explicitly changed by specifying the option again with a different effect, or if it is changed by a statement in the scripting language.

You can define your own keyword/value pairs on the command line. The script can then use this information when setting values by including %[keyword] in the string. For example, if you included "-dimensions 400x400" on the command line, as illustrated above, then any string containing "%[dimensions]" would have 400x400 substituted. The "%[string]" can be used either an entire string, such as geometry="%[dimensions]" or as a part of a string such as filename="%[basename].png".

The keyword can be any string except for the following reserved strings (in any upper, lower, or mixed case variant): debug, help, and verbose, whose usage is described below.

The value can be any string. If either the keyword or the value contains white space or any symbols that have special meanings to your shell such as "#", "|", or "%", enclose the string in quotation marks or use "\" to escape the white space and special symbols.

Keywords and values are case dependent. "Key", "key", and "KEY" would be three different keywords.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

??? info "-debug `<events>`"

    enable debug printout

??? info "-define `<key>{=<value>},...`"

    add coder/decoder specific options

??? info "-help"

    print usage instructions

??? info "-log `<string>`"

    Specify format for debug log

??? info "-verbose"

    print detailed information about the image

??? info "-version"

    print GraphicsMagick version string

## 魔法脚本语言

The Magick Scripting Language (MSL) presently defines the following elements and their attributes:

```MSL
<image>
background, color, id, size
Define a new image object. </image> destroys it. Because of this, if you wish to reference multiple "subimages" (aka pages or layers), you can embed one image element inside of another. For example:
    <image>
    <read filename="input.png" />
    <get width="base-width" height="base-height" />
    <image height="base-height" width="base-width">
    <image />
    <write filename="output.mng" />
    </image>
    <image size="400x400" />
<group>
Define a new group of image objects. By default, images are only valid for the life of their <image>element.
    <image>   -- creates the image
    .....     -- do stuff with it
    </image>  -- dispose of the image
However, in a group, all images in that group will stay around for the life of the group:
    <group>                           -- start a group
        <image>                       -- create an image
        ....                          -- do stuff
        </image>                      -- NOOP
        <image>                       -- create another image
        ....                          -- do more stuff
        </image>                      -- NOOP
        <write filename="image.mng" />  -- output
    </group>                          -- dispose of both images
<read>
filename
Read a new image from a disk file.
    <read filename="image.gif" />
To read two images use
    <read filename="image.gif" />
    <read filename="image.png />
<write>
filename
Write the image(s) to disk, either as a single multiple-image file or multiple ones if necessary.
     <write filename=image.tiff" />
<get>
Get any attribute recognized by PerlMagick's GetAttribute() and stores it as an image attribute for later use. Currently only width and height are supported.
    <get width="base-width" height="base-height" />
    <print output="Image size is %[base-width]x%[base-height].\n" />
<set>
background, bordercolor, clip-mask, colorspace, density, magick, mattecolor, opacity. Set an attribute recognized by PerlMagick's GetAttribute().
<profile>
[profilename]
Read one or more IPTC, ICC or generic profiles from file and assign to image
    <profile iptc="profile.iptc" generic="generic.dat" />
To remove a specified profile use "!" as the filename eg
    <profile icm="!" iptc="profile.iptc" />
<border>
fill, geometry, height, width
<blur>
radius, sigma
<charcoal>
radius, sigma
<chop>
geometry, height, width, x, y
<crop>
geometry, height, width, x, y
<composite>
compose, geometry, gravity, image, x, y
    <?xml version="1.0" encoding="UTF-8"?>
    <group>
        <image id="image_01">
            <read filename="cloud3.gif"/>
            <resize geometry="250x90"/>
        </image>
        <image id="image_02">
            <read filename="cloud4.gif"/>
            <resize geometry="190x100"/>
        </image>
        <image>
            <read filename="background.jpg"/>
            <composite image="image_01" geometry="+740+470"/>
            <composite image="image_02" geometry="+390+415"/>
        </image>
        <write filename="result.png"/>
    </group>
<despeckle>
<emboss>
radius, sigma
<enhance>
<equalize>
<edge>
radius
<flip>
<flop>
<frame>
fill, geometry, height, width, x, y, inner, outer
<flatten>
<get>
height, width
<gamma>
red, green, blue
<image>
background, color, id, size
<implode>
amount
<magnify>
<minify>
<medianfilter>
radius
<normalize>
<oilpaint>
radius
<print>
output
<profile>
[profilename]
<read>
<resize>
blur, filter, geometry, height, width
<roll>
geometry, x, y
<rotate>
degrees
<reducenoise>
radius
<sample>
geometry, height, width
<scale>
geometry, height, width
<sharpen>
radius, sigma
<shave>
geometry, height, width
<shear>
x, y
<solarize>
threshold
<spread>
radius
<stegano>
image
<stereo>
image
<swirl>
degrees
<texture>
image
<threshold>
threshold
<transparent>
color
<trim>
```