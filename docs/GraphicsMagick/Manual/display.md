
# 显示

## 命名

display - display an image on any workstation running X 
 
## 内容

- Synopsis
- Description
- Examples
- Options
- Mouse Buttons
- Command Widget
- Keyboard Accelerators
- X Resources
- Image Loading
- Visual Image Directory
- Image Cutting
- Image Copying
- Image Pasting
- Image Cropping
- Image Chopping
- Image Rotation
- Image Segmentation
- Image Annotation
- Image Compositing
- Color Editing
- Matte (Transparent Channel) Editing
- Image Drawing
- Region of Interest
- Image Panning
- User Preferences

## 概要

gm display [ options ...] file [options...]file

## 描述

Display is a machine architecture independent image processing and display program. It can display an image on any workstation screen running an X server. Display can read and write many of the more popular image formats (e.g. JPEG, TIFF, PNM, Photo CD, etc.).

With display, you can perform these functions on an image:

- load an image from a file
- display the next image
- display the former image
- display a sequence of images as a slide show
- write the image to a file
- print the image to a PostScript printer
- delete the image file
- create a Visual Image Directory
- select the image to display by its thumbnail rather than name
- undo last image transformation
- copy a region of the image
- paste a region to the image
- restore the image to its original size
- refresh the image
- half the image size
- double the image size
- resize the image
- crop the image
- cut the image
- flop image in the horizontal direction
- flip image in the vertical direction
- rotate the image 90 degrees clockwise
- rotate the image 90 degrees counter-clockwise
- rotate the image
- shear the image
- roll the image
- trim the image edges
- invert the colors of the image
- vary the color brightness
- vary the color saturation
- vary the image hue
- gamma correct the image
- sharpen the image contrast
- dull the image contrast
- perform histogram equalization on the image
- perform histogram normalization on the image
- negate the image colors
- convert the image to grayscale
- set the maximum number of unique colors in the image
- reduce the speckles within an image
- eliminate peak noise from an image
- detect edges within the image
- emboss an image
- segment the image by color
- simulate an oil painting
- simulate a charcoal drawing
- annotate the image with text
- draw on the image
- edit an image pixel color
- edit the image matte information
- composite an image with another
- add a border to the image
- surround image with an ornamental border
- apply image processing techniques to a region of interest
- display information about the image
- zoom a portion of the image
- show a histogram of the image
- display image to background of a window
- set user preferences
- display information about this program
- discard all images and exit program
- change the level of magnification
- display images specified by a World Wide Web (WWW) uniform resource locator (URL)

## 示例

To scale an image of a cockatoo to exactly 640 pixels in width and 480 pixels in height and position the window at location (200,200), use:

    gm display -geometry 640x480+200+200! cockatoo.miff

To display an image of a cockatoo without a border centered on a backdrop, use:

    gm display +borderwidth -backdrop cockatoo.miff

To tile a slate texture onto the root window, use:

    gm display -size 1280x1024 -window root slate.png

To display a visual image directory of all your JPEG images, use:

    gm display 'vid:- .jpg'

To display a MAP image that is 640 pixels in width and 480 pixels in height with 256 colors, use:

    gm display -size 640x480+256 cockatoo.map

To display an image of a cockatoo specified with a World Wide Web (WWW) uniform resource locator (URL), use:

    gm display ftp://wizards.dupont.com/images/cockatoo.jpg

To display histogram of an image, use:

    gm gm convert file.jpg HISTOGRAM:- | gm display -

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect until it is explicitly changed by specifying the option again with a different effect. For example to display three images, the first with 32 colors, the second with an unlimited number of colors, and the third with only 16 colors, use:

    gm display -colors 32 cockatoo.miff -noop duck.miff -colors 16 macaw.miff

Display options can appear on the command line or in your X resources file. See X(1). Options on the command line supersede values specified in your X resources file.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 
 

??? info "-authenticate `<string>`"

    decrypt image with this password

??? info "-backdrop"

    display the image centered on a backdrop.

??? info "-background `<color>`"

    the background color

??? info "-border `<width>`x`<height>`"

    surround the image with a border of color

??? info "-bordercolor `<color>`"

    the border color

??? info "-borderwidth `<geometry>`"

    the border width

??? info "-colormap `<type>`"

    define the colormap type

??? info "-colors `<value>`"

    preferred number of colors in the image

??? info "-colorspace `<value>`"

    the type of colorspace

??? info "-comment `<string>`"

    annotate an image with a comment

??? info "-compress `<type>`"

    the type of image compression

??? info "-contrast

    enhance or reduce the image contrast

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

??? info "-despeckle"

    reduce the speckles within an image

??? info "-display `<host:display[.screen]>`"

    specifies the X server to contact

??? info "-dispose `<method>`"

    GIF disposal method

??? info "-dither"

    apply Floyd/Steinberg error diffusion to the image

??? info "-edge `<radius>`"

    detect edges within an image

??? info "-endian `<type>`"

    specify endianness (MSB, LSB, or Native) of image

??? info "-enhance"

    apply a digital filter to enhance a noisy image

??? info "-filter `<type>`"

    use this type of filter when resizing an image

??? info "-flip"

    create a "mirror image"

??? info "-flop"

    create a "mirror image"

??? info "-font `<name>`"

    use this font when annotating the image with text

??? info "-foreground `<color>`"

    define the foreground color

??? info "-frame `<width>`x`<height>`+`<outer bevel width>`+`<inner bevel width>`"

    surround the image with an ornamental border

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

??? info "-immutable"

    make image immutable

??? info "-interlace `<type>`"

    the type of interlacing scheme

??? info "-label `<name>`"

    assign a label to an image

??? info "-limit `<type??? info "`<value>`"

    Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

??? info "-log `<string>`"

    Specify format for debug log

??? info "-magnify `<factor>`"

    magnify the image

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

??? info "-negate"

    replace every pixel with its complementary color

??? info "-noop"

    NOOP (no option)

??? info "-page `<width>`x`<height>`{+-}`<x>`{+-}`<y>`{%}{!}{`<}{>`}"

    size and location of an image canvas

??? info "+progress"

    disable progress monitor and busy cursor

??? info "-quality `<value>`"

    JPEG/MIFF/PNG/TIFF compression level

??? info "-raise `<width>`x`<height>`"

    lighten or darken image edges

??? info "-remote"

    perform a X11 remote operation

??? info "-roll {+-}`<x>`{+-}`<y>`"

    roll an image vertically or horizontally

??? info "-rotate `<degrees>`{`<}{>`}"

    rotate the image

??? info "-sample `<geometry>`"

    scale image using pixel sampling

??? info "-sampling-factor `<horizontal_factor>`x`<vertical_factor>`"

    chroma subsampling factors

??? info "-scenes `<value-value>`"

    range of image scene numbers to read

??? info "-set `<attribute??? info "`<value>`"

    set an image attribute

??? info "+set `<attribute>`"

    unset an image attribute

??? info "-segment `<cluster threshold>`x`<smoothing threshold>`"

    segment an image

??? info "-shared-memory"

    use shared memory

??? info "-sharpen `<radius>`{x`<sigma>`}"

    sharpen the image

??? info "-size `<width>`x`<height>`{+offset}"

    width and height of the image

??? info "-text-font `<name>`"

    font for writing fixed-width text

??? info "-texture `<filename>`"

    name of texture to tile onto the image background

??? info "-title `<string>`"

    assign title to displayed image [animate, display, montage]

??? info "-treedepth `<value>`"

    tree depth for the color reduction algorithm

??? info "-trim"

    trim an image

??? info "-type `<type>`"

    the image type

??? info "-update `<seconds>`"

    detect when image file is modified and redisplay.

??? info "-use-pixmap"

    use the pixmap

??? info "-verbose"

    print detailed information about the image

??? info "-version"

    print GraphicsMagick version string

??? info "-visual `<type>`"

    animate images using this X visual type

??? info "-window `<id>`"

    make image the background of a window

??? info "-window-group"

    specify the window group

??? info "-write `<filename>`"

    write the image to a file [display]

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

## 鼠标按钮

The effects of each button press is described below. Three buttons are required. If you have a two button mouse, button 1 and 3 are returned. Press ALT and button 3 to simulate button 2.

??? info "1"

    Press this button to map or unmap the Command widget . See the next section for more information about the Command widget.

??? info "2"

    Press and drag to define a region of the image to magnify.

??? info "3"

    Press and drag to choose from a select set of display(1) commands. This button behaves differently if the image being displayed is a visual image directory. Choose a particular tile of the directory and press this button and drag to select a command from a pop-up menu. Choose from these menu items:

- Open
- Next
- Former
- Delete
- Update

If you choose Open, the image represented by the tile is displayed. To return to the visual image directory, choose Next from the Command widget (refer to Command Widget). Next and Former moves to the next or former image respectively. Choose Delete to delete a particular image tile. Finally, choose Update to synchronize all the image tiles with their respective images. See montage and miff for more details.

## 命令小部件

The Command widget lists a number of sub-menus and commands. They are

* File
    * Open...
    * Next
    * Former
    * Select...
    * Save...
    * Print...
    * Delete...
    * Canvas...
    * Visual Directory...
    * Quit
* Edit
    * Undo
    * Redo
    * Cut
    * Copy
    * Paste
* View
    * Half Size
    * Original Size
    * Double Size
    * Resize...
    * Apply
    * Refresh
    * Restore
* Transform
    * Crop
    * Chop
    * Flop
    * Flip
    * Rotate Right
    * Rotate Left
    * Rotate...
    * Shear...
    * Roll...
    * Trim Edges
* Enhance
    * Hue...
    * Saturation...
    * Brightness...
    * Gamma...
    * Spiff...
    * Dull
    * Equalize
    * Normalize
    * Negate
    * GRAYscale
    * Quantize...
* Effects
    * Despeckle
    * Emboss
    * Reduce Noise
    * Add Noise
    * Sharpen...
    * Blur...
    * Threshold...
    * Edge Detect...
    * Spread...
    * Shade...
    * Raise...
    * Segment...
* F/X
    * Solarize...
    * Swirl...
    * Implode...
    * Wave...
    * Oil Paint...
    * Charcoal Draw...
* Image Edit
    * Annotate...
    * Draw...
    * Color...
    * Matte...
    * Composite...
    * Add Border...
    * Add Frame...
    * Comment...
    * Launch...
    * Region of Interest...
* Miscellany
    * Image Info
    * Zoom Image
    * Show Preview...
    * Show Histogram
    * Show Matte
    * Background...
    * Slide Show
    * Preferences...
* Help
    * Overview
    * Browse Documentation
    * About Display

Menu items with a indented triangle have a sub-menu. They are represented above as the indented items. To access a sub-menu item, move the pointer to the appropriate menu and press button 1 and drag. When you find the desired sub-menu item, release the button and the command is executed. Move the pointer away from the sub-menu if you decide not to execute a particular command.

## 键盘加速器¶

Accelerators are one or two key presses that effect a particular command. The keyboard accelerators that display understands is:

|快捷键|描述|
|-|-|
    Ctl+O     |Press to load an image from a file.
    space     |Press to display the next image. If the image is a multi-paged document such as a PostScript document, you can skip ahead several pages by preceding this command with a number. For example to display the fourth page beyond the current page, press 4space.
    backspace |Press to display the former image. If the image is a multi-paged document such as a PostScript document, you can skip behind several pages by preceding this command with a number. For example to display the fourth page preceding the current page, press 4n.
    Ctl-S    |Press to save the image to a file.
    Ctl-P    |Press to print the image to a PostScript printer.
    Ctl-D    |Press to delete an image file.
    Ctl-N    |Press to create a blank canvas.
    Ctl-Q    |Press to discard all images and exit program.
    Ctl+Z    |Press to undo last image transformation.
    Ctl+R    |Press to redo last image transformation.
    Ctl-X    |Press to cut a region of the image.
    Ctl-C    |Press to copy a region of the image.
    Ctl-V    |Press to paste a region to the image.
    <       |Press to halve the image size.
    .        |Press to return to the original image size.
    ??? info "       |Press to double the image size.
    %        |Press to resize the image to a width and height you specify.
    Cmd-A    |Press to make any image transformations permanent. By default, any image size transformations are applied to the original image to create the image displayed on the X server.  However, the transformations are not permanent (i.e. the original image does not change size only the X image does). For example, if you press ">`" the X image will appear to double in size, but the original image will in fact remain the same size.  To force the original image to double in size, press ">`" followed by "Cmd-A".
    @        |Press to refresh the image window.
    C        |Press to crop the image.
    [        |Press to chop the image.
    H        |Press to flop image in the horizontal direction.
    V        |Press to flip image in the vertical direction.
    /        |Press to rotate the image 90 degrees clockwise.
    \        |Press to rotate the image 90 degrees counter-clockwise.
    -        |Press to rotate the image the number of degrees you specify.
    S        |Press to shear the image the number of degrees you specify.
    R        |Press to roll the image.
    T        |Press to trim the image edges.
    Shft-H   |Press to vary the color hue.
    Shft-S   |Press to vary the color saturation.
    Shft-L   |Press to vary the image brightness.
    Shft-G   |Press to gamma correct the image.
    Shft-C   |Press to spiff up the image contrast.
    Shft-Z   |Press to dull the image contrast.
    =        |Press to perform histogram equalization on the image.
    Shft-N   |Press to perform histogram normalization on the image.
    Shft-~   |Press to negate the colors of the image.
    .        |Press to convert the image colors to gray.
    Shft-#   |Press to set the maximum number of unique colors in the image.
    F2       |Press to reduce the speckles in an image.
    F2       |Press to emboss an image.
    F4       |Press to eliminate peak noise from an image.
    F5       |Press to add noise to an image.
    F6       |Press to sharpen an image.
    F7       |Press to blur image an image.
    F8       |Press to threshold the image.
    F9       |Press to detect edges within an image.
    F10      |Press to displace pixels by a random amount.
    F11      |Press to shade the image using a distant light source.
    F12      |Press to lighten or darken image edges to create a 3-D effect.
    F13      |Press to segment the image by color.
    Meta-S   |Press to swirl image pixels about the center.
    Meta-I   |Press to implode image pixels about the center.
    Meta-W   |Press to alter an image along a sine wave.
    Meta-P   |Press to simulate an oil painting.
    Meta-C   |Press to simulate a charcoal drawing.
    Alt-X    |Press to composite the image with another.
    Alt-A    |Press to annotate the image with text.
    Alt-D    |Press to draw a line on the image.
    Alt-P    |Press to edit an image pixel color.
    Alt-M    |Press to edit the image matte information.
    Alt-X    |Press to composite the image with another.
    Alt-A    |Press to add a border to the image.
    Alt-F    |Press to add a ornamental frame to the image.
    Alt-Shft-!   |Press to add an image comment.
    Ctl-A    |Press to apply image processing techniques to a region of interest.
    Shft-?   |Press to display information about the image.
    Shft-+   |Press to map the zoom image window.
    Shft-P   |Press to preview an image enhancement, effect, or f/x.
    F1       |Press to display helpful information about the "display" utility.
    Find     |Press to browse documentation about GraphicsMagick.
    1-9      |Press to change the level of magnification.

Use the arrow keys to move the image one pixel up, down, left, or right within the magnify window. Be sure to first map the magnify window by pressing button 2.

Press ALT and one of the arrow keys to trim off one pixel from any side of the image.


## X Resources

Display options can appear on the command line or in your X resource file. Options on the command line supersede values specified in your X resource file. See X(1) for more information on X resources.

Most display options have a corresponding X resource. In addition, display uses the following X resources:


??? info "background (class Background)"

    Specifies the preferred color to use for the Image window background. The default is #ccc.

??? info "borderColor (class BorderColor)

    Specifies the preferred color to use for the Image window border. The default is #ccc.

??? info "borderWidth (class BorderWidth)"

    Specifies the width in pixels of the image window border. The default is 2.

??? info "browseCommand (class browseCommand)"

    Specifies the name of the preferred browser when displaying GraphicsMagick documentation. The default is netscape %s.

??? info "confirmExit (class ConfirmExit)"

    Display pops up a dialog box to confirm exiting the program when exiting the program. Set this resource to False to exit without a confirmation.

??? info "displayGamma (class DisplayGamma)"

    Specifies the gamma of the X server.

    You can apply separate gamma values to the red, green, and blue channels of the image with a gamma value list delineated with slashes (i.e. 1.7/2.3/1.2).

    The default is 2.2.

??? info "displayWarnings (class DisplayWarnings)"

    Display pops up a dialog box whenever a warning message occurs. Set this resource to False to ignore warning messages.

??? info "font (class FontList)"

    Specifies the name of the preferred font to use in normal formatted text. The default is 14 point Helvetica.

??? info "font[1-9] (class Font[1-9])"

    Specifies the name of the preferred font to use when annotating the image window with text. The default fonts are fixed, variable, 5x8, 6x10, 7x13bold, 8x13bold, 9x15bold, 10x20, and 12x24.

??? info "foreground (class Foreground)"

    Specifies the preferred color to use for text within the image window. The default is black.

??? info "gammaCorrect (class gammaCorrect)"

    This resource, if true, will lighten or darken an image of known gamma to match the gamma of the display (see resource displayGamma). The default is True.

??? info "geometry (class Geometry)"

    Specifies the preferred size and position of the image window. It is not necessarily obeyed by all window managers.

    Offsets, if present, are handled in X(1) style. A negative x offset is measured from the right edge of the screen to the right edge of the icon, and a negative y offset is measured from the bottom edge of the screen to the bottom edge of the icon.

??? info "iconGeometry (class IconGeometry)"

    Specifies the preferred size and position of the application when iconified. It is not necessarily obeyed by all window managers.

    Offsets, if present, are handled in the same manner as in class Geometry.

??? info "iconic (class Iconic)"

    This resource indicates that you would prefer that the application's windows initially not be visible as if the windows had be immediately iconified by you. Window managers may choose not to honor the application's request.

??? info "magnify (class Magnify)"

    specifies an integral factor by which the image should be enlarged. The default is 3.

    This value only affects the magnification window which is invoked with button number 3 after the image is displayed.

??? info "matteColor (class MatteColor)"

    Specify the color of windows. It is used for the backgrounds of windows, menus, and notices. A 3D effect is achieved by using highlight and shadow colors derived from this color. Default value: #697B8F.

??? info "name (class Name)"

    This resource specifies the name under which resources for the application should be found. This resource is useful in shell aliases to distinguish between invocations of an application, without resorting to creating links to alter the executable file name. The default is the application name.

??? info "pen[1-9] (class Pen[1-9])"

    Specifies the color of the preferred font to use when annotating the image window with text. The default colors are black, blue, green, cyan, gray, red, magenta, yellow, and white.

??? info "printCommand (class PrintCommand)"

    This command is executed whenever Print is issued. In general, it is the command to print PostScript to your printer. Default value: lp -c -s %i.

??? info "sharedMemory (class SharedMemory)"

    This resource specifies whether display should attempt use shared memory for pixmaps. GraphicsMagick must be compiled with shared memory support, and the display must support the MIT-SHM extension. Otherwise, this resource is ignored. The default is True.

??? info "textFont (class textFont)"

    Specifies the name of the preferred font to use in fixed (typewriter style) formatted text. The default is 14 point Courier.

??? info "title (class Title)"

    This resource specifies the title to be used for the image window. This information is sometimes used by a window manager to provide a header identifying the window. The default is the image file name.

??? info "undoCache (class UndoCache)"

    Specifies, in mega-bytes, the amount of memory in the undo edit cache. Each time you modify the image it is saved in the undo edit cache as long as memory is available. You can subsequently undo one or more of these transformations. The default is 16 Megabytes.

??? info "usePixmap (class UsePixmap)"

    Images are maintained as a XImage by default. Set this resource to True to utilize a server Pixmap instead. This option is useful if your image exceeds the dimensions of your server screen and you intend to pan the image. Panning is much faster with Pixmaps than with a XImage. Pixmaps are considered a precious resource, use them with discretion.

To set the geometry of the Magnify or Pan or window, use the geometry resource. For example, to set the Pan window geometry to 256x256, use:

    gm display.pan.geometry: 256x256

## 图像加载

To select an image to display, choose Open of the File sub-menu from the Command widget. A file browser is displayed. To choose a particular image file, move the pointer to the filename and press any button. The filename is copied to the text window. Next, press Open or press the RETURN key. Alternatively, you can type the image file name directly into the text window. To descend directories, choose a directory name and press the button twice quickly. A scrollbar allows a large list of filenames to be moved through the viewing area if it exceeds the size of the list area.

You can trim the list of file names by using shell globbing characters. For example, type - .jpg to list only files that end with .jpg.

To select your image from the X server screen instead of from a file, Choose Grab of the Open widget.

Back to Contents  

## 视觉图像目录

To create a Visual Image Directory, choose Visual Directory of the File sub-menu from the Command widget . A file browser is displayed. To create a Visual Image Directory from all the images in the current directory, press Directory or press the RETURN key. Alternatively, you can select a set of image names by using shell globbing characters. For example, type - .jpg to include only files that end with .jpg. To descend directories, choose a directory name and press the button twice quickly. A scrollbar allows a large list of filenames to be moved through the viewing area if it exceeds the size of the list area.

After you select a set of files, they are turned into thumbnails and tiled onto a single image. Now move the pointer to a particular thumbnail and press button 3 and drag. Finally, select Open. The image represented by the thumbnail is displayed at its full size. Choose Next from the File sub-menu of the Command widget to return to the Visual Image Directory.

## 图像剪切到剪贴板

Note that cut information for image window is not retained for colormapped X server visuals (e.g. StaticColor, StaticColor, GRAYScale, PseudoColor). Correct cutting behavior may require a TrueColor or DirectColor visual or a Standard Colormap.

To begin, press choose Cut of the Edit sub-menu from the Command widget. Alternatively, press F3 in the image window.

A small window appears showing the location of the cursor in the image window. You are now in cut mode. In cut mode, the Command widget has these options:

* Help
* Dismiss

To define a cut region, press button 1 and drag. The cut region is defined by a highlighted rectangle that expands or contracts as it follows the pointer. Once you are satisfied with the cut region, release the button. You are now in rectify mode. In rectify mode, the Command widget has these options:

* Cut
* Help
* Dismiss

You can make adjustments by moving the pointer to one of the cut rectangle corners, pressing a button, and dragging. Finally, press Cut to commit your copy region. To exit without cutting the image, press Dismiss.

Back to Contents  

## 图像拷贝

To begin, press choose Copy of the Edit sub-menu from the Command widget. Alternatively, press F4 in the image window.

A small window appears showing the location of the cursor in the image window. You are now in copy mode. In copy mode, the Command widget has these options:

* Help
* Dismiss

To define a copy region, press button 1 and drag. The copy region is defined by a highlighted rectangle that expands or contracts as it follows the pointer. Once you are satisfied with the copy region, release the button. You are now in rectify mode. In rectify mode, the Command widget has these options:

* Copy
* Help
* Dismiss

You can make adjustments by moving the pointer to one of the copy rectangle corners, pressing a button, and dragging. Finally, press Copy to commit your copy region. To exit without copying the image, press Dismiss.

## 图片粘贴

To begin, press choose Paste of the Edit sub-menu from the Command widget. Alternatively, press F5 in the image window.

A small window appears showing the location of the cursor in the image window. You are now in Paste mode. To exit immediately, press Dismiss. In Paste mode, the Command widget has these options:

* Operators
    * over
    * in
    * out
    * atop
    * xor
    * plus
    * minus
    * add
    * subtract
    * difference
    * multiply
    * bumpmap
    * replace
* Help
* Dismiss

Choose a composite operation from the Operators sub-menu of the Command widget. How each operator behaves is described below. image window is the image currently displayed on your X server and image is the image obtained with the File Browser widget.


??? info "over"

    The result is the union of the two image shapes, with image obscuring image window in the region of overlap.

??? info "in"

    The result is simply image cut by the shape of image window. None of the image data of image window is in the result.

??? info "out"

    The resulting image is image with the shape of image window cut out.

??? info "atop"

    The result is the same shape as image window, with image obscuring image window where the image shapes overlap. Note this differs from over because the portion of image outside image window's shape does not appear in the result.

??? info "xor"

    The result is the image data from both image and image window that is outside the overlap region. The overlap region is blank.

??? info "plus"

    The result is just the sum of the image data. Output values are cropped to the maximum value (no overflow). This operation is independent of the matte channels.

??? info "minus"

    The result of image - image window, with underflow cropped to zero. The matte channel is ignored (set to opaque, full coverage).

??? info "add"

    The result of image + image window, with overflow wrapping around (mod MaxRGB+1).

??? info "subtract"

    The result of image - image window, with underflow wrapping around (mod MaxRGB+1). The add and subtract operators can be used to perform reversible transformations.

??? info "difference"

    The result of abs(image - image window). This is useful for comparing two very similar images.

??? info "multiply"

    The result of image -  image window. This is useful for the creation of drop-shadows.

??? info "bumpmap"

    The result of image window shaded by window.

??? info "replace"

    The resulting image is image window replaced with image. Here the matte information is ignored.

The image compositor requires a matte, or alpha channel in the image for some operations. This extra channel usually defines a mask which represents a sort of a cookie-cutter for the image. This is the case when matte is 255 (full coverage) for pixels inside the shape, zero outside, and between zero and 255 on the boundary. If image does not have a matte channel, it is initialized with 0 for any pixel matching in color to pixel location (0,0), otherwise 255. See Matte Editing for a method of defining a matte channel.

Note that matte information for image window is not retained for colormapped X server visuals (e.g. StaticColor, StaticColor, GrayScale, PseudoColor). Correct compositing behavior may require a TrueColor or DirectColor visual or a Standard Colormap.

Choosing a composite operator is optional. The default operator is replace. However, you must choose a location to composite your image and press button 1. Press and hold the button before releasing and an outline of the image will appear to help you identify your location.

The actual colors of the pasted image is saved. However, the color that appears in image window may be different. For example, on a monochrome screen image window will appear black or white even though your pasted image may have many colors. If the image is saved to a file it is written with the correct colors. To assure the correct colors are saved in the final image, any PseudoClass image is promoted to DirectClass. To force a PseudoClass image to remain PseudoClass, use -colors.

## 图像裁剪

To begin, press choose Crop of the Transform submenu from the Command widget. Alternatively, press C in the image window.

A small window appears showing the location of the cursor in the image window. You are now in crop mode. In crop mode, the Command widget has these options:

* Help
* Dismiss

To define a cropping region, press button 1 and drag. The cropping region is defined by a highlighted rectangle that expands or contracts as it follows the pointer. Once you are satisfied with the cropping region, release the button. You are now in rectify mode. In rectify mode, the Command widget has these options:

* Crop
* Help
* Dismiss

You can make adjustments by moving the pointer to one of the cropping rectangle corners, pressing a button, and dragging. Finally, press Crop to commit your cropping region. To exit without cropping the image, press Dismiss.

## 图像切

An image is chopped interactively. There is no command line argument to chop an image. To begin, choose Chop of the Transform sub-menu from the Command widget. Alternatively, press [ in the Image window.

You are now in Chop mode. To exit immediately, press Dismiss. In Chop mode, the Command widget has these options:

* Direction
* horizontal
* vertical
* Help
* Dismiss

If the you choose the horizontal direction (this is the default), the area of the image between the two horizontal endpoints of the chop line is removed. Otherwise, the area of the image between the two vertical endpoints of the chop line is removed.

Select a location within the image window to begin your chop, press and hold any button. Next, move the pointer to another location in the image. As you move a line will connect the initial location and the pointer. When you release the button, the area within the image to chop is determined by which direction you choose from the Command widget.

To cancel the image chopping, move the pointer back to the starting point of the line and release the button.

## 图像旋转

Press the / key to rotate the image 90 degrees or \ to rotate -90 degrees. To interactively choose the degree of rotation, choose Rotate... of the Transform submenu from the Command Widget. Alternatively, press -  in the image window.

A small horizontal line is drawn next to the pointer. You are now in rotate mode. To exit immediately, press Dismiss. In rotate mode, the Command widget has these options:

* Pixel Color
    * black
    * blue
    * cyan
    * green
    * gray
    * red
    * magenta
    * yellow
    * white
    * Browser...
* Direction
    * horizontal
    * vertical
* Help
* Dismiss

Choose a background color from the Pixel Color sub-menu. Additional background colors can be specified with the color browser. You can change the menu colors by setting the X resources pen1 through pen9.

If you choose the color browser and press Grab, you can select the background color by moving the pointer to the desired color on the screen and press any button.

Choose a point in the image window and press this button and hold. Next, move the pointer to another location in the image. As you move a line connects the initial location and the pointer. When you release the button, the degree of image rotation is determined by the slope of the line you just drew. The slope is relative to the direction you choose from the Direction sub-menu of the Command widget.

To cancel the image rotation, move the pointer back to the starting point of the line and release the button.

##  图像分割

Choose Effects->`Segment to segment an image by analyzing the histograms of the color components and identifying units that are homogeneous with the fuzzy c-means technique. The scale-space filter analyzes the histograms of the three color components of the image and identifies a set of classes. The extents of each class is used to coarsely segment the image with thresholding. The color associated with each class is determined by the mean color of all pixels within the extents of a particular class. Finally, any unclassified pixels are assigned to the closest class with the fuzzy c-means technique.

The fuzzy c-Means algorithm can be summarized as follows:

* Build a histogram, one for each color component of the image.
* For each histogram, successively apply the scale-space filter and build an interval tree of zero crossings in the second derivative at each scale. Analyze this scale-space "fingerprint" to determine which peaks or valleys in the histogram are most predominant.
* The fingerprint defines intervals on the axis of the histogram. Each interval contains either a minima or a maxima in the original signal. If each color component lies within the maxima interval, that pixel is considered "classified" and is assigned an unique class number.
* Any pixel that fails to be classified in the above thresholding pass is classified using the fuzzy c-Means technique. It is assigned to one of the classes discovered in the histogram analysis phase.

The fuzzy c-Means technique attempts to cluster a pixel by finding the local minima of the generalized within group sum of squared error objective function. A pixel is assigned to the closest class of which the fuzzy membership has a maximum value.

For additional information see:

*Young Won Lim*, *Sang Uk Lee*, "On The Color Image Segmentation Algorithm Based on the Thresholding and the Fuzzy c-Means Techniques", Pattern Recognition, Volume 23, Number 9, pages 935-952, 1990.

## 图像注释

An image is annotated interactively. There is no command line argument to annotate an image. To begin, choose Annotate of the Image Edit sub-menu from the Command widget. Alternatively, press a in the image window.

A small window appears showing the location of the cursor in the image window. You are now in annotate mode. To exit immediately, press Dismiss. In annotate mode, the Command widget has these options:

Font Name
fixed
variable
5x8
6x10
7x13bold
8x13bold
9x15bold
10x20
12x24
Browser...
Font Color
black
blue
cyan
green
gray
red
magenta
yellow
white
transparent
Browser...
Box Color
black
blue
cyan
green
gray
red
magenta
yellow
white
transparent
Browser...
Rotate Text
-90
-45
-30
0
30
45
90
180
Dialog...
Help
Dismiss
Choose a font name from the Font Name sub-menu. Additional font names can be specified with the font browser. You can change the menu names by setting the X resources font1 through font9.

Choose a font color from the Font Color sub-menu. Additional font colors can be specified with the color browser. You can change the menu colors by setting the X resources pen1 through pen9.

If you select the color browser and press Grab, you can choose the font color by moving the pointer to the desired color on the screen and press any button.

If you choose to rotate the text, choose Rotate Text from the menu and select an angle. Typically you will only want to rotate one line of text at a time. Depending on the angle you choose, subsequent lines may end up overwriting each other.

Choosing a font and its color is optional. The default font is fixed and the default color is black. However, you must choose a location to begin entering text and press a button. An underscore character will appear at the location of the pointer. The cursor changes to a pencil to indicate you are in text mode. To exit immediately, press Dismiss.

In text mode, any key presses will display the character at the location of the underscore and advance the underscore cursor. Enter your text and once completed press Apply to finish your image annotation. To correct errors press BACK SPACE. To delete an entire line of text, press DELETE. Any text that exceeds the boundaries of the image window is automatically continued onto the next line.

The actual color you request for the font is saved in the image. However, the color that appears in your Image window may be different. For example, on a monochrome screen the text will appear black or white even if you choose the color red as the font color. However, the image saved to a file with -write is written with red lettering. To assure the correct color text in the final image, any PseudoClass image is promoted to DirectClass (see miff(5)). To force a PseudoClass image to remain PseudoClass, use -colors.

Back to Contents  

## 图像合成

An image composite is created interactively. There is no command line argument to composite an image. To begin, choose Composite of the Image Edit from the Command widget. Alternatively, press x in the Image window.

First a popup window is displayed requesting you to enter an image name. Press Composite, Grab or type a file name. Press Cancel if you choose not to create a composite image. When you choose Grab, move the pointer to the desired window and press any button.

If the Composite image does not have any matte information, you are informed and the file browser is displayed again. Enter the name of a mask image. The image is typically grayscale and the same size as the composite image. If the image is not grayscale, it is converted to grayscale and the resulting intensities are used as matte information.

A small window appears showing the location of the cursor in the image window. You are now in composite mode. To exit immediately, press Dismiss. In composite mode, the Command widget has these options:

* Operators
* over
* in
* out
* atop
* xor
* plus
* minus
* add
* subtract
* difference
* bumpmap
* replace
* Blend
* Displace
* Help
* Dismiss

Choose a composite operation from the Operators sub-menu of the Command widget. How each operator behaves is described below. image window is the image currently displayed on your X server and image is the image obtained


??? info "over"

    The result is the union of the two image shapes, with image obscuring image window in the region of overlap.

??? info "in"

    The result is simply image cut by the shape of image window. None of the image data of image window is in the result.

??? info "out"

    The resulting image is image with the shape of image window cut out.

??? info "atop"

    The result is the same shape as image window, with image obscuring image window where the image shapes overlap. Note this differs from over because the portion of image outside image window's shape does not appear in the result.

??? info "xor"

    The result is the image data from both image and image window that is outside the overlap region. The overlap region is blank.

??? info "plus"

    The result is just the sum of the image data. Output values are cropped to 255 (no overflow). This operation is independent of the matte channels.

??? info "minus"

    The result of image - image window, with underflow cropped to zero. The matte channel is ignored (set to 255, full coverage).

??? info "add"

    The result of image + image window, with overflow wrapping around (mod 256).

??? info "subtract"

    The result of image - image window, with underflow wrapping around (mod 256). The add and subtract operators can be used to perform reversible transformations.

??? info "difference"

    The result of abs(image - image window). This is useful for comparing two very similar images.

??? info "bumpmap"

    The result of image window shaded by window.

??? info "replace"

    The resulting image is image window replaced with image. Here the matte information is ignored.

The image compositor requires a matte, or alpha channel in the image for some operations. This extra channel usually defines a mask which represents a sort of a cookie-cutter for the image. This is the case when matte is 255 (full coverage) for pixels inside the shape, zero outside, and between zero and 255 on the boundary. If image does not have a matte channel, it is initialized with 0 for any pixel matching in color to pixel location (0,0), otherwise 255. See Matte Editing for a method of defining a matte channel.

If you choose blend, the composite operator becomes over. The image matte channel percent transparency is initialized to factor. The image window is initialized to (100-factor). Where factor is the value you specify in the Dialog widget.

Displace shifts the image pixels as defined by a displacement map. With this option, image is used as a displacement map. Black, within the displacement map, is a maximum positive displacement. White is a maximum negative displacement and middle gray is neutral. The displacement is scaled to determine the pixel shift. By default, the displacement applies in both the horizontal and vertical directions. However, if you specify mask, image is the horizontal X displacement and mask the vertical Y displacement.

Note that matte information for image window is not retained for colormapped X server visuals (e.g. StaticColor, StaticColor, GrayScale, PseudoColor). Correct compositing behavior may require a TrueColor or DirectColor visual or a Standard Colormap.

Choosing a composite operator is optional. The default operator is replace. However, you must choose a location to composite your image and press button 1. Press and hold the button before releasing and an outline of the image will appear to help you identify your location.

The actual colors of the composite image is saved. However, the color that appears in image window may be different. For example, on a monochrome screen Image window will appear black or white even though your composited image may have many colors. If the image is saved to a file it is written with the correct colors. To assure the correct colors are saved in the final image, any PseudoClass image is promoted to DirectClass (see miff). To force a PseudoClass image to remain PseudoClass, use -colors.

## 颜色编辑

Changing the the color of a set of pixels is performed interactively. There is no command line argument to edit a pixel. To begin, choose Color from the Image Edit submenu of the Command widget. Alternatively, press c in the image window.

A small window appears showing the location of the cursor in the image window. You are now in color edit mode. To exit immediately, press Dismiss. In color edit mode, the Command widget has these options:

* Method
    * point
    * replace
    * floodfill
    * reset
* Pixel Color
    * black
    * blue
    * cyan
    * green
    * gray
    * red
    * magenta
    * yellow
    * white
    * Browser...
* Border Color
    * black
    * blue
    * cyan
    * green
    * gray
    * red
    * magenta
    * yellow
    * white
    * Browser...
* Fuzz
    * 0
    * 2
    * 4
    * 8
    * 16
    * Dialog...
* Undo
* Help
* Dismiss

Choose a color editing method from the Method sub-menu of the Command widget. The point method recolors any pixel selected with the pointer unless the button is released. The replace method recolors any pixel that matches the color of the pixel you select with a button press. Floodfill recolors any pixel that matches the color of the pixel you select with a button press and is a neighbor. Whereas filltoborder changes the matte value of any neighbor pixel that is not the border color. Finally reset changes the entire image to the designated color.

Next, choose a pixel color from the Pixel Color sub-menu. Additional pixel colors can be specified with the color browser. You can change the menu colors by setting the X resources pen1 through pen9.

Now press button 1 to select a pixel within the Image window to change its color. Additional pixels may be recolored as prescribed by the method you choose. additional pixels by increasing the Delta value.

If the Magnify widget is mapped, it can be helpful in positioning your pointer within the image (refer to button 2). Alternatively you can select a pixel to recolor from within the Magnify widget. Move the pointer to the Magnify widget and position the pixel with the cursor control keys. Finally, press a button to recolor the selected pixel (or pixels).

The actual color you request for the pixels is saved in the image. However, the color that appears in your Image window may be different. For example, on a monochrome screen the pixel will appear black or white even if you choose the color red as the pixel color. However, the image saved to a file with -write is written with red pixels. To assure the correct color text in the final image, any PseudoClass image is promoted to DirectClass To force a PseudoClass image to remain PseudoClass, use -colors.

## Matte Editing

Matte information within an image is useful for some operations such as image compositing. This extra channel usually defines a mask which represents a sort of a cookie-cutter for the image. This is the case when matte is 255 (full coverage) for pixels inside the shape, zero outside, and between zero and 255 on the boundary.

Setting the matte information in an image is done interactively. There is no command line argument to edit a pixel. To begin, and choose Matte of the Image Edit sub-menu from the Command widget.

Alternatively, press m in the image window.

A small window appears showing the location of the cursor in the image window. You are now in matte edit mode. To exit immediately, press Dismiss. In matte edit mode, the Command widget has these options:

* Method
    * point
    * replace
    * floodfill
    * reset
* Border Color
    * black
    * blue
    * cyan
    * green
    * gray
    * red
    * magenta
    * yellow
    * white
    * Browser...
* Fuzz
    * 0
    * 2
    * 4
    * 8
    * 16
    * Dialog...
* Matte
* Undo
* Help
* Dismiss

Choose a matte editing method from the Method sub-menu of the Command widget. The point method changes the matte value of the any pixel selected with the pointer until the button is released. The replace method changes the matte value of any pixel that matches the color of the pixel you select with a button press. Floodfill changes the matte value of any pixel that matches the color of the pixel you select with a button press and is a neighbor. Whereas filltoborder recolors any neighbor pixel that is not the border color. Finally reset changes the entire image to the designated matte value.
Choose Matte Value and a dialog appears requesting a matte value. Enter a value between 0 and 255. This value is assigned as the matte value of the selected pixel or pixels.

Now, press any button to select a pixel within the Image window to change its matte value. You can change the matte value of additional pixels by increasing the Delta value. The Delta value is first added then subtracted from the red, green, and blue of the target color. Any pixels within the range also have their matte value updated.

If the Magnify widget is mapped, it can be helpful in positioning your pointer within the image (refer to button 2). Alternatively you can select a pixel to change the matte value from within the Magnify widget. Move the pointer to the Magnify widget and position the pixel with the cursor control keys. Finally, press a button to change the matte value of the selected pixel (or pixels).

Matte information is only valid in a DirectClass image. Therefore, any PseudoClass image is promoted to DirectClass. Note that matte information for PseudoClass is not retained for colormapped X server visuals (e.g. StaticColor, StaticColor, GrayScale, PseudoColor) unless you immediately save your image to a file (refer to Write). Correct matte editing behavior may require a TrueColor or DirectColor visual or a Standard Colormap.

## 图形绘制

An image is drawn upon interactively. There is no command line argument to draw on an image. To begin, choose Draw of the Image Edit sub-menu from the Command widget. Alternatively, press d in the image window.

The cursor changes to a crosshair to indicate you are in draw mode. To exit immediately, press Dismiss. In draw mode, the Command widget has these options:

* Primitive
    * point
    * line
    * rectangle
    * fill rectangle
    * circle
    * fill circle
    * ellipse
    * fill ellipse
    * polygon
    * fill polygon
* Color
    * black
    * blue
    * cyan
    * green
    * gray
    * red
    * magenta
    * yellow
    * white
    * transparent
    * Browser...
* Stipple
    * Brick
    * Diagonal
    * Scales
    * Vertical
    * Wavy
    * Translucent
    * Opaque
    * Open...
* Width
    * 1
    * 2
    * 4
    * 8
    * 16
    * Dialog...
* Undo
* Help
* Dismiss

Choose a drawing primitive from the Primitive sub-menu.

Next, choose a color from the Color sub-menu. Additional colors can be specified with the color browser. You can change the menu colors by setting the X resources pen1 through pen9. The transparent color updates the image matte channel and is useful for image compositing.

If you choose the color browser and press Grab, you can select the primitive color by moving the pointer to the desired color on the screen and press any button. The transparent color updates the image matte channel and is useful for image compositing.

Choose a stipple, if appropriate, from the Stipple sub-menu. Additional stipples can be specified with the file browser. Stipples obtained from the file browser must be on disk in the X11 bitmap format.

Choose a line width, if appropriate, from the Width sub-menu. To choose a specific width select the Dialog widget.

Choose a point in the image window and press button 1 and hold. Next, move the pointer to another location in the image. As you move, a line connects the initial location and the pointer. When you release the button, the image is updated with the primitive you just drew. For polygons, the image is updated when you press and release the button without moving the pointer.

To cancel image drawing, move the pointer back to the starting point of the line and release the button.

## 兴趣区域

To begin, press choose Region of Interest of the Pixel Transform sub-menu from the Command widget. Alternatively, press R in the image window.

A small window appears showing the location of the cursor in the image window. You are now in region of interest mode. In region of interest mode, the Command widget has these options:

* Help
* Dismiss

To define a region of interest, press button 1 and drag. The region of interest is defined by a highlighted rectangle that expands or contracts as it follows the pointer. Once you are satisfied with the region of interest, release the button. You are now in apply mode. In apply mode the Command widget has these options:

* File
    * Save...
    * Print...
* Edit
    * Undo
    * Redo
* Transform
    * Flip
    * Flop
    * Rotate Right
    * Rotate Left
* Enhance
    * Hue...
    * Saturation...
    * Brightness...
    * Gamma...
    * Spiff
    * Dull
    * Equalize
    * Normalize
    * Negate
    * GRAYscale
    * Quantize...
* Effects
    * Despeckle
    * Emboss
    * Reduce Noise
    * Add Noise
    * Sharpen...
    * Blur...
    * Threshold...
    * Edge Detect...
    * Spread...
    * Shade...
    * Raise...
    * Segment...
* F/X
    * Solarize...
    * Swirl...
    * Implode...
    * Wave...
    * Oil Paint
    * Charcoal Draw...
* Miscellany
    * Image Info
    * Zoom Image
    * Show Preview...
    * Show Histogram
    * Show Matte
* Help
* Dismiss

You can make adjustments to the region of interest by moving the pointer to one of the rectangle corners, pressing a button, and dragging. Finally, choose an image processing technique from the Command widget. You can choose more than one image processing technique to apply to an area. Alternatively, you can move the region of interest before applying another image processing technique. To exit, press Dismiss.

## 图像平移

When an image exceeds the width or height of the X server screen, display maps a small panning icon. The rectangle within the panning icon shows the area that is currently displayed in the the image window. To pan about the image, press any button and drag the pointer within the panning icon. The pan rectangle moves with the pointer and the image window is updated to reflect the location of the rectangle within the panning icon. When you have selected the area of the image you wish to view, release the button.

Use the arrow keys to pan the image one pixel up, down, left, or right within the image window.

The panning icon is withdrawn if the image becomes smaller than the dimensions of the X server screen.

## 用户偏好

Preferences affect the default behavior of display(1). The preferences are either true or false and are stored in your home directory as .displayrc:

??? info "display image centered on a backdrop"

    This backdrop covers the entire workstation screen and is useful for hiding other X window activity while viewing the image. The color of the backdrop is specified as the background color. Refer to X Resources for details.

??? info "confirm on program exit"

    Ask for a confirmation before exiting the display(1) program.

??? info "correct image for display gamma"

    If the image has a known gamma, the gamma is corrected to match that of the X server (see the X Resource displayGamma).

??? info "display warning messages"

    Display any warning messages.

??? info "apply Floyd/Steinberg error diffusion to image"

    The basic strategy of dithering is to trade intensity resolution for spatial resolution by averaging the intensities of several neighboring pixels. Images which suffer from severe contouring when reducing colors can be improved with this preference.

??? info "use a shared colormap for colormapped X visuals"

    This option only applies when the default X server visual is PseudoColor or GRAYScale. Refer to -visual for more details. By default, a shared colormap is allocated. The image shares colors with other X clients. Some image colors could be approximated, therefore your image may look very different than intended. Otherwise the image colors appear exactly as they are defined. However, other clients may go technicolor when the image colormap is installed.

??? info "display images as an X server pixmap"

    Images are maintained as a XImage by default. Set this resource to True to utilize a server Pixmap instead. This option is useful if your image exceeds the dimensions of your server screen and you intend to pan the image. Panning is much faster with Pixmaps than with a XImage. Pixmaps are considered a precious resource, use them with discretion.
