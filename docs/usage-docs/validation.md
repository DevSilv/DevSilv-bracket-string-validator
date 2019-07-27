# Validation

You can validate a string using one of five methods. Each of them provides different algorithm (= different implementation), although they perform the same task (validating the string).

Four algorithms handle brackets of only one type, and one handles brackets of several types.

All of the algorithms were unit-tested with semi-automatically generated unit tests. For details on the unit tests, see the page "[Unit-testing](https://github.com/silvuss/silvuss-bracket-string-validator/wiki/Unit-testing)" of the wiki.

|No|Name|Available validation method IDs|Description|Why the algorithm is provided|
|-|-|-|-|-|
|1|The "counter" method|`counter-method` or `c`|This alogirithm uses a counter to validate the string. It accepts only the `()` bracket type in the string.|The base for other provided algorithms.|
|2|The "recursion" method|`recursion-method` or `r`|This algorithm also uses a counter to validate the string, but additionally is recursive. It accepts only the `()` bracket type in the string.|To test whether the author of the application is able to write a recursive version.|
|3|The "shortest" method|`shortest-method` or `sh`|This algorithm also uses a counter to validate the string, but additionally its author tried to make it as short as possible (not regarding readability, of course). Its "shortness" does not include limiting the length of variables' names, nor the number of lines, whitespaces, parentheses and brackets. It accepts only the `()` bracket type in the string.|To test how much short version the author of the application is able to write.|
|4|The "stack" method|`stack-method` or `st`|This algorithm uses a stack to validate the string. It accepts only the `()` bracket type in the string.|To test whether the author of the application is able to write a version with the stack.|
|5|The "stack-list" method|`stack-list-method` or `stl`|This algorithm also uses a stack to validate the string. It accepts the following bracket types in the string: `()`, `[]` and `{}`.|To handle multiple bracket types.|