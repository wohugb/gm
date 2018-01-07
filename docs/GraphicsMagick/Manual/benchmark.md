
# gm benchmark

## NAME

benchmark - benchmark the execution of a gm command

## Contents

Synopsis
Description
Examples
Options

## Synopsis

gm benchmark [ options ... ] command

## Description

benchmark executes an arbitrary gm utility command (e.g. convert) for one or more loops, and/or a specified execution time, and reports many execution metrics. For builds using OpenMP, a mode is provided to execute the benchmark with an increasing number of threads and provide a report of speedup and multi-thread execution efficiency. If benchmark is used to execute a command without any additional benchmark options, then the command is run once.

## Examples

To obtain benchmark information for a single execution of a command:

  % gm benchmark convert input.ppm -gaussian 0x1 output.ppm
  Results: 32 threads 1 iter 6.20s user 0.41s total 2.439 iter/s 0.161 iter/cpu
To obtain benchmark information from 100 iterations of the command:

  % gm benchmark -iterations 100 convert input.ppm -gaussian 0x1 output.ppm
  Results: 32 threads 100 iter 625.40s user 31.74s total 3.151 iter/s 0.160 iter/cpu
To obtain benchmark information by iterating the command until a specified amount of time (in seconds) has been consumed:

  % gm benchmark -duration 30 convert input.ppm -gaussian 0x1 output.ppm
  Results: 32 threads 91 iter 587.33s user 30.30s total 3.003 iter/s 0.155 iter/cpu
To obtain a full performance report with an increasing number of threads (1-32 threads, stepping the number of threads by four each time):

  % gm benchmark -duration 3 -stepthreads 4 convert input.ppm -gaussian 0x2 output.ppm
  Results: 1 threads 1 iter 8.84s user 8.84s total 0.113 iter/s 0.113 iter/cpu 1.00 speedup 1.000 karp-flatt
  Results: 4 threads 2 iter 18.37s user 4.89s total 0.409 iter/s 0.109 iter/cpu 3.62 speedup 0.035 karp-flatt
  Results: 8 threads 3 iter 29.81s user 4.09s total 0.733 iter/s 0.101 iter/cpu 6.48 speedup 0.033 karp-flatt
  Results: 12 threads 3 iter 30.81s user 3.14s total 0.955 iter/s 0.097 iter/cpu 8.45 speedup 0.038 karp-flatt
  Results: 16 threads 3 iter 35.02s user 3.01s total 0.997 iter/s 0.086 iter/cpu 8.81 speedup 0.054 karp-flatt
  Results: 20 threads 4 iter 52.92s user 3.53s total 1.133 iter/s 0.076 iter/cpu 10.02 speedup 0.052 karp-flatt
  Results: 24 threads 4 iter 60.66s user 3.39s total 1.180 iter/s 0.066 iter/cpu 10.43 speedup 0.057 karp-flatt
  Results: 28 threads 4 iter 73.10s user 3.35s total 1.194 iter/s 0.055 iter/cpu 10.56 speedup 0.061 karp-flatt
  Results: 32 threads 4 iter 82.10s user 3.09s total 1.294 iter/s 0.049 iter/cpu 11.44 speedup 0.058 karp-flatt
Here is the interpretation of the output:

threads - number of threads used.
iter - number of command iterations executed.
user - total user time consumed.
total - total elapsed time consumed.
iter/s - number of command iterations per second.
iter/cpu - amount of CPU time consumed per iteration.
speedup - speedup compared with one thread.
karp-flatt - Karp-Flatt measure of speedup efficiency.
Please note that the reported "speedup" is based on the execution time of just one thread. A preliminary warm-up pass is used before timing the first loop in order to ensure that the CPU is brought out of power-saving modes and that system caches are warmed up. Most modern CPUs provide a "turbo" mode where the CPU clock speed is increased (e.g. by a factor of two) when only one or two cores are active. If the CPU grows excessively hot (due to insufficient cooling), then it may dial back its clock rates as a form of thermal management. These factors result in an under-reporting of speedup compared to if "turbo" mode was disabled and the CPU does not need to worry about thermal management. The powertop utility available under Linux and Solaris provides a way to observe CPU core clock rates while a benchmark is running.

Back to Contents  

## Options

Options are processed from left to right and must appear before any argument.


> -duration duration

duration to run benchmark

Specify the number of seconds to run the benchmark. The command is executed repeatedly until the specified amount of time has elapsed.

> -help

Prints benchmark command help.

> -iterations loops

number of command iterations

Specify the number of iterations to run the benchmark. The command is executed repeatedly until the specified number of iterations has been reached.

> -rawcsv

Print results in CSV format

Print results in a comma-separated value (CSV) format which is easy to parse for plotting or importing into a spreadsheet or database. The values reported are threads, iterations, user_time, and elapsed_time.

> -stepthreads step

execute a per-thread benchmark ramp

Execute a per-thread benchmark ramp, incrementing the number of threads at each step by the specified value. The maximum number of threads is taken from the standard OMP_NUM_THREADS environment variable.
Back to Contents  