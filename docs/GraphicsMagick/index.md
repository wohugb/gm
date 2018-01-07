# GraphicsMagick Image Processing System

|version|note|
|-|-|
|Current Release	|1.3.27a (Released December 11, 2017) download release|
|Development Snapshots	|(Updated frequently) download development snapshots|
|Mercurial Repository	|(Updated frequently) visit Mercurial repository|

Check [http://www.GraphicsMagick.org/](http://www.GraphicsMagick.org/) for the latest version of this page.

GraphicsMagick is the swiss army knife of image processing. Comprised of 267K physical lines (according to David A. Wheeler's SLOCCount) of source code in the base package (or 1,225K including 3rd party libraries) it provides a robust and efficient collection of tools and libraries which support reading, writing, and manipulating an image in over 88 major formats including important formats like DPX, GIF, JPEG, JPEG-2000, PNG, PDF, PNM, and TIFF.

Image processing is multi-threaded (see the multi-thread benchmark results) using OpenMP so that CPU-bound tasks scale linearly as processor cores are added. OpenMP support requires compilation with GCC 4.2 (or later), or use of any C compiler supporting at least the OpenMP 2.0 specification.

GraphicsMagick is quite portable, and compiles under almost every general purpose operating system that runs on 32-bit or 64-bit CPUs. GraphicsMagick is available for virtually any Unix or Unix-like system, including Linux. It also runs under Windows 2000 and later (Windows 2000, XP, Vista, 7, 8.X, 10), and MacOS-X.

GraphicsMagick supports huge images and has been tested with gigapixel-size images. GraphicsMagick can create new images on the fly, making it suitable for building dynamic Web applications. GraphicsMagick may be used to resize, rotate, sharpen, color reduce, or add special effects to an image and save the result in the same or different image format. Image processing operations are available from the command line, as well as through C, C++, Lua, Perl, PHP, Python, Tcl, Ruby, Windows .NET, or Windows COM programming interfaces. With some modification, language extensions for ImageMagick may be used.

GraphicsMagick is originally derived from ImageMagick 5.5.2 as of November 2002 but has been completely independent of the ImageMagick project since then. Since the fork from ImageMagick many improvements have been made (see NEWS) by many authors using an open development model but without breaking the API or utilities operation.

Here are some reasons to prefer GraphicsMagick over ImageMagick:

- GM is more efficient so it gets the job done faster using fewer resources.
- GM is much smaller and lighter (3-5X smaller installation footprint).
- GM is used to process billions of files at the world's largest photo sites (e.g. Flickr and Etsy).
- GM does not conflict with other installed software.
- GM suffers from fewer security issues and exploits.
- GM valgrind's 100% clean (memcheck and helgrind).
- GM passes rigorous memory error testing using ASan_.
- GM comes with a comprehensive manual page.
- GM provides API and ABI stability and managed releases that you can count on.
- GM provides detailed yet comprehensible ChangeLog and NEWS files.
- GM is available for free, and may be used to support both open and proprietary applications.
- GM is distributed under an X11-style license (MIT License), approved by the Open Source Initiative, recommended for use by the OSSCC, and compatible with the GNU GPL.
- GM source code is managed in Mercurial, a distributed source control management tool which supports management of local changes.
- GM has 0.00 (zero) defects per 1000 lines of code (293,341 total lines included) according to Coverity analysis on May 25, 2015.
- GM developers contribute to other free projects for the public good.
GraphicsMagick is copyrighted by the GraphicsMagick Group as well as many others.

Here are just a few examples of what GraphicsMagick can do:

- Convert an image from one format to another (e.g. TIFF to JPEG)
- Resize, rotate, sharpen, color reduce, or add special effects to an image
- Create a montage of image thumbnails
- Create a transparent image suitable for use on the Web
- Compare two images
- Turn a group of images into a GIF animation sequence
- Create a composite image by combining several separate images
- Draw shapes or text on an image
- Decorate an image with a border or frame
- Describe the format and characteristics of an image