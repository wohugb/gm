
# 动画

## 内容

- 概要
- 描述
- 示例
- 选项
- 鼠标按钮
- 命令组件
- 快捷键
- X Resources

## 概要

gm animate [ options ...] file [ [ options ...] file ...] 
 
## 描述

Animate displays a sequence of images on any workstation display running an X server. animate first determines the hardware capabilities of the workstation. If the number of unique colors in an image is less than or equal to the number the workstation can support, the image is displayed in an X window. Otherwise the number of colors in the image is first reduced to match the color resolution of the workstation before it is displayed.

This means that a continuous-tone 24 bits-per-pixel image can display on a 8 bit pseudo-color device or monochrome device. In most instances the reduced color image closely resembles the original. Alternatively, a monochrome or pseudo-color image sequence can display on a continuous-tone 24 bits-per-pixel device.

To help prevent color flashing on X server visuals that have colormaps, animate creates a single colormap from the image sequence. This can be rather time consuming. You can speed this operation up by reducing the colors in the image before you "animate" them. Use mogrify to color reduce the images to a single colormap. See mogrify(1) for details. Alternatively, you can use a Standard Colormap; or a static, direct, or true color visual. You can define a Standard Colormap with xstdcmap. See xstdcmap(1) for details. This method is recommended for colormapped X server because it eliminates the need to compute a global colormap.  

## 示例

To animate a set of images of a cockatoo, use:

    :::sh
    gm animate cockatoo.*

To animate a cockatoo image sequence while using the Standard Colormap best, use:

    xstdcmap -best
    gm animate -map best cockatoo.*

To animate an image of a cockatoo without a border centered on a backdrop, use: 
 
    gm animate +borderwidth -backdrop cockatoo.*

## 选项

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

??? info "-authenticate `<string>`"

    decrypt image with this password

??? info "-backdrop"

    display the image centered on a backdrop.

??? info "-background `<color>`"

    the background color

??? info "-bordercolor `<color>`"

    the border color

??? info "-borderwidth `<geometry>`"

    the border width

??? info "-chop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    remove pixels from the interior of an image

??? info "-colormap `<type>`"

    define the colormap type

??? info "-colors `<value>`"

    preferred number of colors in the image

??? info "-colorspace `<value>`"

    the type of colorspace

??? info "-crop `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}"

    preferred size and location of the cropped image

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

??? info "-display `<host:display[.screen]>`"

    specifies the X server to contact

??? info "-dispose `<method>`"

    GIF disposal method

??? info "-dither"

    apply Floyd/Steinberg error diffusion to the image

??? info "-font `<name>`"

    use this font when annotating the image with text

??? info "-foreground `<color>`"

    define the foreground color

??? info "-gamma `<value>`"

    level of gamma correction

??? info "-geometry `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{@}{!}{^}{`<}{>`}"

    Specify dimension, offset, and resize options.

??? info "-help"

    print usage instructions

??? info "-iconGeometry `<geometry>`"

    specify the icon geometry

??? info "-iconic"

    iconic animation

??? info "-interlace `<type>`"

    the type of interlacing scheme

??? info "-limit `<type??? info `<value>`"

    Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

??? info "-log `<string>`"

    Specify format for debug log

??? info "-map `<type>`"

    display image using this type.

??? info "-matte"

    store matte channel if the image has one

??? info "-mattecolor `<color>`"

    specify the color to be used with the -frame option

??? info "-monitor"

    show progress indication

??? info "-monochrome"

    transform the image to black and white

??? info "-name"

    name an image

??? info "-noop"

    NOOP (no option)

??? info "-pause `<seconds>`"

    pause between animation loops [animate]

??? info "-remote"

    perform a X11 remote operation

??? info "-rotate `<degrees>`{`<}{>`}"

    rotate the image

??? info "-sampling-factor `<horizontal_factor>`x`<vertical_factor>`"

    chroma subsampling factors

??? info "-scenes `<value-value>`"

    range of image scene numbers to read

??? info "-shared-memory"

    use shared memory

??? info "-size `<width>`x`<height>`{+offset}"

    width and height of the image

??? info "-text-font `<name>`"

    font for writing fixed-width text

??? info "-title `<string>`"

    assign title to displayed image [animate, display, montage]

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

??? info "-visual `<type>`"

    animate images using this X visual type

??? info "-window `<id>`"

    make image the background of a window
    For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
    
Any option you specify on the command line remains in effect for the group of images following it, until the group is terminated by the appearance of any option or -noop. For example, to animate three images, the first with 32 colors, the second with an unlimited number of colors, and the third with only 16 colors, use: 
    
        gm animate -colors 32 cockatoo.1 -noop cockatoo.2 -colors 16 cockatoo.3

Animate options can appear on the command line or in your X resources file. See X(1). Options on the command line supersede values specified in your X resources file.

Image filenames may appear in any order on the command line if the image format is MIFF (refer to miff(5) and the scene keyword is specified in the image. Otherwise the images will display in the order they appear on the command line.

## 鼠标按钮

Press any button to map or unmap the Command widget. See the next section for more information about the Command widget.

## 命令小部件

The Command widget lists a number of sub-menus and commands. They are

- Animate
    - Open
    - Play
    - Step
    - Repeat
    - Auto Reverse
- Speed
    - Faster
    - Slower
- Direction
    - Forward
    - Reverse
- Image Info
- Help
- Quit

Menu items with a indented triangle have a sub-menu. They are represented above as the indented items. To access a sub-menu item, move the pointer to the appropriate menu and press a button and drag. When you find the desired sub-menu item, release the button and the command is executed. Move the pointer away from the sub-menu if you decide not to execute a particular command.

## 键盘加速器

`Ctl+O`

Press to load an image from a file.

`space`

Press to display the next image in the sequence.

`<`

Press to speed-up the display of the images. Refer to -delay for more information.

`>`

Press to slow the display of the images. Refer to -delay for more information.

`?`

Press to display information about the image. Press any key or button to erase the information.

This information is printed: image name; image size; and the total number of unique colors in the image.

`F1`

Press to display helpful information about animate(1).

`Ctl-q`

Press to discard all images and exit program.

## X resources

Animate options can appear on the command line or in your X resource file. Options on the command line supersede values specified in your X resource file. See X(1) for more information on X resources.

All animate options have a corresponding X resource. In addition, the animate program uses the following X resources:

??? info "background (class Background)"
    Specifies the preferred color to use for the Image window background. The default is #ccc.

??? info "borderColor (class BorderColor)"
    Specifies the preferred color to use for the Image window border. The default is #ccc.

??? info "borderWidth (class BorderWidth)"
    Specifies the width in pixels of the Image window border. The default is 2.

??? info "font (class Font or FontList)"
    Specifies the name of the preferred font to use in normal formatted text. The default is 14 point Helvetica.

??? info "foreground (class Foreground)"
    Specifies the preferred color to use for text within the Image window. The default is black.

??? info "geometry (class geometry)"
    Specifies the preferred size and position of the image window. It is not necessarily obeyed by all window managers. Offsets, if present, are handled in X(1) style. A negative x offset is measured from the right edge of the screen to the right edge of the icon, and a negative y offset is measured from the bottom edge of the screen to the bottom edge of the icon.

??? info "iconGeometry (class IconGeometry)"
    Specifies the preferred size and position of the application when iconified. It is not necessarily obeyed by all window managers. Offsets, if present, are handled in the same manner as in class Geometry.

??? info "iconic (class Iconic)"
    This resource indicates that you would prefer that the application's windows initially not be visible as if the windows had be immediately iconified by you. Window managers may choose not to honor the application's request.

??? info "matteColor (class MatteColor)"
    Specify the color of windows. It is used for the backgrounds of windows, menus, and notices. A 3D effect is achieved by using highlight and shadow colors derived from this color. Default value: #ddd.

??? info "name (class Name)"
    This resource specifies the name under which resources for the application should be found. This resource is useful in shell aliases to distinguish between invocations of an application, without resorting to creating links to alter the executable file name. The default is the application name.

??? info "sharedMemory (class SharedMemory)"
    This resource specifies whether animate should attempt use shared memory for pixmaps. ImageMagick must be compiled with shared memory support, and the display must support the MIT-SHM extension. Otherwise, this resource is ignored. The default is True.

??? info "text_font (class textFont)"
    Specifies the name of the preferred font to use in fixed (typewriter style) formatted text. The default is 14 point Courier.

??? info "title (class Title)"
    This resource specifies the title to be used for the Image window. This information is sometimes used by a window manager to provide some sort of header identifying the window. The default is the image file name.