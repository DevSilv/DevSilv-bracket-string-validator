# Caveats for running in different environments than advised

**_Info:_** _Because the application were tested only in the environment that it is expected to work, the caveats should be understand only as theoretical._

## Caveats for running the application in an environment that does not provide the Bash interpreter under the same path and the same version as specified in the README

The current release of this application contains of a couple of Bash scripts. All of the scripts assume that the file under `/bin/bash` is a Bash interpreter in the version mentioned in the [README](https://github.com/silvuss/silvuss-bracket-string-validator/blob/master/README.md).

The first line of each of the scripts is `#!/bin/bash`; I will call it a "shebang line". In general, this line indicates where the [loader](https://en.wikipedia.org/wiki/Loader_(computing)) should search for the interpreter for the language that the script was written in.

For some details on the cases in which the interpreter is not found, see:
- this section of this Sven Mascheck website: https://www.in-ulm.de/~mascheck/various/shebang/#errors (although I am not sure whether in this section, by the "system" the author understand UNIX, Linux, or some other system or systems)

For details on the portability of the shebang line, see:
- this section of this Wikipedia article: https://en.wikipedia.org/wiki/Shebang_(Unix)#Portability
- this StackExchange thread: https://unix.stackexchange.com/q/182869

For detatails on how systems interpret the shebang line, see:
- this Stack Overflow thread: https://stackoverflow.com/q/7268437
- this Stack Overflow thread: https://stackoverflow.com/q/12296308
- this Stack Overflow thread: https://stackoverflow.com/q/10376206

Although some or all of the scripts may be supported by other shells, they are not intended for it. Also, they are themselves not intended to support any standard such as POSIX.