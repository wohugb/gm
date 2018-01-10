
# 比较

## 命名

compare - 比较两张图.

## 菜单

* 概要
* 描述
* 示例
* 选项

## 概要

```sh
gm compare [ options ... ] reference-image [ options ... ] compare-image [ options ... ]
```

## 描述

compare compares two similar images using a specified statistical method (see -metric) and/or by writing a difference image (-file), with the altered pixels annotated using a specified method (see -highlight-style) and color (see -highlight-color).

Reference-image is the original image and compare-image is the (possibly) altered version, which should have the same dimensions as reference-image.

## 示例

To compare two images using Mean Square Error (MSE) statistical analysis use:

```sh
    compare -metric mse original.miff compare.miff
```

To create an annotated difference image use:

```sh
    compare -highlight-style assign -highlight-color purple -file diff.miff original.miff compare.miff
```

## 选项

Options are processed in command line order. Any option you specify on the command line remains in effect only for the image that follows. All options are reset to their default values after each image is read.

For a more detailed description of each option, see Options, above. GraphicsMagick(1). 

??? info "-authenticate `<string>`"

    使用密码解密图片

??? info "-colorspace `<value>`"

    色隙类型

??? info "-debug `<events>`"

    启用调试打印输出

??? info "-define `<key>`{=`<value>`},..."

    add coder/decoder specific options

??? info "-density `<width>`x`<height>`"

    horizontal and vertical resolution in pixels of the image

??? info "-depth `<value>`"

    图像深度

??? info "-display `<host:display[.screen]>`"

    specifies the X server to contact

??? info "-endian `<type>`"

    specify endianness (MSB, LSB, or Native) of image

??? info "-file `<filename>`"

    write annotated difference image to file

??? info "-help"

    print usage instructions

??? info "-highlight-color `<color>`"

    pixel annotation color

??? info "-highlight-style `<style>`"

    pixel annotation style

??? info "-interlace `<type>`"

    the type of interlacing scheme

??? info "-limit `<type>` `<value>`"

    Disk, File, Map, Memory, Pixels, Width, Height or Threads resource limit

??? info "-log `<string>`"

    Specify format for debug log

??? info "-matte"

    store matte channel if the image has one

??? info "-maximum-error `<limit>`"

    specifies the maximum amount of total image error

??? info "-metric `<metric>`"

    比较规 (MAE, MSE, PAE, PSNR, RMSE)

??? info "-monitor"

    显示进度提示

??? info "-sampling-factor `<horizontal_factor>`x`<vertical_factor>`"

    chroma subsampling factors

??? info "-size `<width>`x`<height>`{+offset}"

    图像的宽度和高度

??? info "-type `<type>`"

    图像类型

??? info "-verbose"

    打印图片详情

??? info "-version"

    打印 GraphicsMagick 版本字符

查看选项详情, 查看 GraphicsMagick(1) 选项. 
