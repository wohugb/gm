# 批量处理

## 名称

batch - execute multiple gm commands as a script

## 内容

- 概要
- 描述
- 示例
- 选项

## 概要

gm batch [ options ... ] [ script ]

## 描述

batch executes an arbitary number of the utility commands (e.g. convert) in the form of a simple linear batch script in order to improve execution efficiency, and/or to allow use as a subordinate co-process under the control of an arbitrary script or program.

## 示例

To drive 'gm batch' using a shell script (or a program written in any language), have the script/program send commands to 'gm batch' via its standard input. Specify that standard input should be used by using '-' as the file name. The following example converts all files matching '*.jpg' to TIFF format while rotating each file by 90 degrees and stripping all embedded profiles. The shell script syntax is standard Unix shell:

```sh
  for file in *.jpg
  do
    outfile=`basename $file .jpg`.tiff
    echo convert -verbose "'$file'" -rotate 90 \
    +profile "'*'" "'$outfile'"
  done | gm batch -echo on -feedback on -
```

We can accomplish the same as the previous example by putting all the commands in a text file and then specifying the name of the text file as the script to execute:

```sh
  for file in *.jpg
  do
    outfile=`basename $file .jpg`.tiff
    echo convert -verbose "'$file'" -rotate 90 \
    +profile "'*'" "'$outfile'"
  done > script.txt
  gm batch -echo on -feedback on script.txt
```

## 选项

Options are processed from left to right and must appear before any filename argument.


??? info "-echo on|off"

    ```sh
      command echo on or off
    ```
    Specify on to enable echoing commands to standard output as they are read or off to disable. The default is off.


??? info "-escape unix|windows"

    Parse using unix or windows syntax
    Commands must be parsed from the input stream and escaping needs to be used to protect spaces or quoting characters in the input. Specify unix to use unix-style command line parsing or windows for Microsoft Windows command shell style parsing. The default depends on if the software is compiled for Microsoft Windows or for a Unix-type system (including Cygwin on Microsoft Windows). It is recommended to use unix syntax because it is more powerful and more portable.

??? info "-fail text"

    text to print if a command fails
    When feedback is enabled, this specifies the text to print when the command fails. The default text is FAIL.

??? info "-feedback on|off"

    enable error feedback
    Print text (see -pass and -fail options) feedback after each command to indicate the result, the default is off.

??? info "-help"

    Prints batch command help.

??? info "-pass text"

    text to print if a command passes
    When feedback is enabled, this specifies the text to print when the command passes. The default text is PASS.

??? info "-prompt text"

    Prompt text to use for command line
    If no filename argument was specified, a simple command prompt appears where you may enter GraphicsMagick commands. The default prompt is GM>. Use this option to change the prompt to something else.

??? info "-stop-on-error on|off"

    Specify if command processing stops on error
    Normally command processing continues if a command encounters an error. Specify -stop-on-error on to cause processing to quit immediately on error.