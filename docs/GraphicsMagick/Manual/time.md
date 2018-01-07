
# gm time

## NAME

time - time the execution of a gm command

## Contents

Synopsis
Description
Examples
Options

## Synopsis

gm time command

## Description

time executes an arbitrary gm utility command (e.g. convert) and reports the user and elapsed time. This provides way to measure command execution times similar to the Unix 'time' command but in a portable and consistent way.

## Examples

To obtain time information for the execution of a command:

% gm time convert input.ppm -gaussian 0x2 output.ppm
convert input.ppm -gaussian 0x2 output.ppm    22.60s user 0.00s system 2354% cpu 0.960 total
Here is the interpretation of the above output:

user - the total user time consumed.
system - the total system time consumed.
total - the total elapsed time consumed.
Back to Contents  

## Options

The time command reqires no options other than the gm command to execute.

Back to Contents  