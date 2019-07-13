# bracket-string-validator

bracket-string-validator is an application that can check whether a given string is a so-called bracket string.

A "bracket string" is a string that consists only of properly closed brackets (be it `()`, `[]` or `{}`); what is more, brackets of each type must be closed properly in relation to all of the other types that exist in the string. Examples of bracket strings: `()` or `({()})[]`. Examples of "non-bracket strings": `)(` or `([)]`.

I have found the idea of "bracket strings" on the forum 4programmers.net. It also seems to occur across the internet, at least on Polish websites. For details on that term, see the page "[The term bracket string](https://github.com/silvuss/silvuss-bracket-string-validator-4p/wiki/The-term-bracket-string)" of the wiki.

**Read before use:** This application **is not** intended to be used according to the purpose described above. You may use it **only** to test whether the code is written the way it is expected (i.e. it produces expected results) and **only** when you know what the code will really do. For details, see the section "[Disclaimers](#disclaimers)" of this README.

## Table of contents

- [Copyright note](#copyright-note)
- [Disclaimers](#disclaimers)
- [How does this application work (in general)?](#how-does-this-application-work-in-general)
- [How to install this application?](#how-to-install-this-application)
- [How to run this application?](#how-to-run-this-application)
- [Environment, tools and technologies used](#environment-tools-and-technologies-used)
- [Sources](#sources)
- [Credits](#credits)

## Copyright note

Note that this "bracket-string-validator" project (this repository) has currently **no license**, as explained in [this GitHub guide on licensing projects](https://choosealicense.com/no-permission/).

For your convenience, I am including below a quote from that site:
> When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can use, copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.

Also note that I can add a licese in the future if it would be relevant to the needs of this project.

## Disclaimers

**This application is an example application that is not intended to be run.** Its purpose is only to show code that is known to work. While probably nothing dangerous would happen, you may run it only under your own responsibility.

Although I have made efforts to make it work as intended and described, it is not a "professional" application. It was tested only with an amateur set of unit tests and only on one platform. For details on the platform, see the section "[Environment, tools and technologies used](#environment-tools-and-technologies-used)" of this README.

## How does this application work (in general)?

This application is able to do three things:
- to check whether the given string is a bracket string;
- to benchmark particular validation methods that it facilitates;
- to unit-test particular validation methods that it facilitates.

Checking the string (speaking differently, validating the string) may be performed using one of several methods that this application facilitates. Nonetheless, each of them shall return the same results for the same parameter, i.e., they have the same logic.

**_Info:_** _The purpose of implementing multiple methods with the same logic is to show that the author of this repository is able to write the same logic in different ways in JavaScript._

In case of benchmarking and unit-testing, the user may optionally provide their own file with, respectively, benchmarking data or unit test cases. For information about the format of those files, see the pages "[Benchmarking](https://github.com/silvuss/silvuss-bracket-string-validator-4p/wiki/Benchmarking)" and "[Unit testing](https://github.com/silvuss/silvuss-bracket-string-validator-4p/wiki/Unit-testing)" of the wiki.

## How to install this application?

**_Info:_** _Current release of this application neither can be installed (onto neither operating system), nor require it. For information about whether installation will be possible, or also required, in future releases, see the [corresponding issue](https://github.com/silvuss/silvuss-bracket-string-validator-4p/issues/2#issue-467473279)._

## How to run this application?

**_Info:_** _It is adviced to run this application in the same environment as it has been tested. In case of other environments this application may work properly, or its usage may cause unknown side effects, or it may not work at all. For details on the environment, see the section "[Environment, tools and technologies used](#environment-tools-and-technologies-used)" of this README. For more information about possible side effects, see the page "[Caveats for running in different environments than advised](https://github.com/silvuss/silvuss-bracket-string-validator-4p/wiki/Caveats-for-running-in-different-environments-than-advised)" of the wiki. For information about possibilities of other environments in future releases, see the [corresponding issue](https://github.com/silvuss/silvuss-bracket-string-validator-4p/issues/3#issue-467474906)._

### What does this application require to run?

This application requires the following software to be installed:
- the [Node.js environment](https://en.wikipedia.org/wiki/Node.js); its version should be 10.16.0 (optimal), or higher compatible (i.e. with compatible public API); it must be in the `PATH` variable under the name `node`;
- the [Bash interpreter](https://en.wikipedia.org/wiki/Bash_(Unix_shell)); its version should be `5.0.7(1)-release (x86_64-redhat-linux-gnu)` (optimal), or higher compatible (i.e. with compatible public API); it must be in the `PATH` variable under the name `bash` AND must be available under the path `/bin/bash`.

### Running possibilities

**_Info:_** _Current release of this application can be run only in the console. For information about running possibilities in future releases, see the [corresponding issue](https://github.com/silvuss/silvuss-bracket-string-validator-4p/issues/4)._

This application may be run in the following ways:

- To **validate** a string:
    ```
    valbrstr validate [validation method ID] ["string to validate"]
    ```
    or equally
    ```
    valbrstr v [validation method ID] ["string to validate"]
    ```

    If no argument is given, the application assumes that the validation method is the stack list  method, and that the string to validate is an empty string.

    If only the validation method ID is given, the application assumes that the string to validate is an empty string.

    If only the string to validate is given, the application assumes that the validation method is the stack list method.

- To **benchmark** a certain validation method that the application provides:
    ```
    valbrstr run-benchmark [/path/to/a/file]
    ```
    or equally
    ```
    valbrstr b [/path/to/a/file]
    ```

    If no argument is given, the application will generate benchmark data on the fly.

    _For details on benchmarking, see the page "[Benchmarking](https://github.com/silvuss/silvuss-bracket-string-validator-4p/wiki/Benchmarking)" of the wiki._

- To **unit-test** a certain validation method that the application provides:
    ```
    valbrstr run-unit-tests [/path/to/a/file]
    ```
    or equally
    ```
    valbrstr t [/path/to/a/file]
    ```

    If no argument is given, the application uses its own file with test cases.

    **_Info:_** _For details on unit-testing, see the page "[Unit testing](https://github.com/silvuss/silvuss-bracket-string-validator-4p/wiki/Unit-testing)" of the wiki._

**_Info:_** _For the list of all available validation methods and their IDs, see the page "[Validation methods](https://github.com/silvuss/silvuss-bracket-string-validator-4p/wiki/Validation-methods)" of the wiki._

## Environment, tools and technologies used

### Environment

This application was tested in the following environment:
- Operating system: Fedora 30 64-bit
- Linux kernel version: `5.1.15-300.fc30.x86_64`
- Bash version: `5.0.7(1)-release (x86_64-redhat-linux-gnu)`
- Node.js version: `v10.16.0`
- The [`LANG` variable](https://www.ibm.com/support/knowledgecenter/en/SSPREK_7.0.0/com.ibm.isam.doc_70/gsk_capicmd_user19.htm): `en_US.utf8`

### Tools and technologies

1. This application is written partially in the [Bash language](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) and partially in the [JavaScript language](https://en.wikipedia.org/wiki/JavaScript).
2. This application makes use of the [Node.js runtime environment](https://en.wikipedia.org/wiki/Node.js).
    - In particular, it makes use of [Node.js's experimental ECMAScript modules support](https://nodejs.org/api/esm.html).
3. This application makes use of the [JSON format](https://en.wikipedia.org/wiki/JSON).
4. This application's validation algorithm is taken from [this post on the 4programmers.net forum](https://4programmers.net/Forum/C_i_C++/327138-sprawdzenie_czy_wyrazenie_jest_nawiasowe?p=1594101#id1594101).

## Sources

Below are some of the sources that was helpful for me when writing this application. They are presented in no particular order.

- Lifewire:
    - https://www.lifewire.com/pass-arguments-to-bash-script-2200571

- the Stack Exchange network:
    - https://unix.stackexchange.com/a/29620/238409
    - https://stackoverflow.com/a/8467449/4752834
    - https://askubuntu.com/a/503129
    - https://stackoverflow.com/a/192337/4752834
    - https://unix.stackexchange.com/a/188191/238409
    - https://unix.stackexchange.com/a/168259/238409
    - https://stackoverflow.com/a/36644558
    - https://stackoverflow.com/a/34358661
    - https://unix.stackexchange.com/questions/210602/how-to-determine-if-current-locale-uses-utf-8-encoding

- the Linux Documentation Project (LDP):
    - https://www.tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_03.html
    - http://tldp.org/LDP/abs/html/here-docs.html
    - http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_01.html
    - http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-8.html

- Computer Hope:
    - https://www.computerhope.com/jargon/r/regular-file.htm

- the NixCraft online community:
    - https://www.cyberciti.biz/tips/bash-shell-parameter-substitution-2.html
    - https://www.cyberciti.biz/faq/bash-get-basename-of-filename-or-directory-name/

- the Linux Information Project (LINFO):
    - http://www.linfo.org/find_kernel_version.html

- the Linux `info` pages:
    - `info bash`

- various Linux `man` pages.

## Credits

- Thanks to the user [Mr.YaHooo](https://4programmers.net/Profile/70446), the author of [this post on the 4programmers.net forum](https://4programmers.net/Forum/C_i_C++/327138-sprawdzenie_czy_wyrazenie_jest_nawiasowe?p=1594101#id1594101), for providing the validation algorithm (originally written in C).
- Thanks to a user of the forum 4programmers.net for providing the idea of handling multiple bracket types (instead of brackets of one type, as I have read the original idea). Unfortunately, I do not remember their nickname. Sorry. :| If you think that you might be this user, please create an issue.