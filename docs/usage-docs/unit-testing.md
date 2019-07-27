# Unit testing

Each of the validation algorithms has been unit-tested – and may be unit-tested again by the user – against custom or predefined sets of unit test cases.

## Input

The test cases may be provided by the user in a file; these are custom test cases. Path to this file is given as an argument to the application call.

If no file is given, there are used predefined test cases. There are defined two sets of them; they may be found in the following two files:
- `app/logic/unit-testing/test-cases/single-bracket-test-cases.json`;
- `app/logic/unit-testing/test-cases/bracket-list-test-cases.json`.

### The structure of the custom file and predefined files with test cases

In case of both the file with custom test cases and each of the files with predefined test cases, each file shall be a JSON file.

In case of the file with custom test cases, it may contain only one object. This object may contain only two properties: `singleBracketTestCases` and `bracketListTestCases`.

In case of the files with predefined test cases, the file `single-bracket-test-cases.json` contains the value of the property `singleBracketTestCases`, and the file `bracket-list-test-cases.json` contains the value of the property `bracketListTestCases`.

The value of each property should be an array. The value of the property `singleBracketTestCases` denotes a set of test cases making use of one type of brackets. The value of the property `bracketListTestCases` denotes a set of test cases making use of multiple types of brackets.

Each element of both of these arrays should be an object, and denotes one test case. This object should contain two properties: `argument`, which denotes the string being tested, and `expectedResult`, which denotes the expected result from testing. The value of the property `argument` may be any valid JSON value. The value of the property `expectedResult` may be either the string `true` or the string `false`, which denote, respectively, that the testing is expected to pass this test case or not.

The value of the property `argument` for each test case of the first set (making use of one type of brackets) shall make use of the following type of brackets: `()`. This set of test cases is used to unit-test all of the algorithms.

In case of predefined test cases, this set contains 40 test cases. The values of the first 30 of them are of the `string` JSON type and consists solely of bracket characters. They denotes all possible 1-, 2-, 3- and 4-element variations of the set {`(`, `)`}. The values of the last 10 test cases are different JSON values (e.g. `[]` and `null`), mostly not of the JSON `string` value.

The value of the property `argument` for each test case of the second set (making use of multiple type of brackets) shall make use of the following types of brackets: `()`, `[]` and `{}`. This set of test cases is used to unit-test only the algorithm for the "stack-list" method (since only this method allows to validate strings with multiple bracket types).

In case of predefied test cases, this set contains 791 test cases. The values of the first 780 of them are of the `string` JSON type and consists of bracket characters and the character `1`. They denotes all possible 1-, 2-, 3- and 4-element variations of the set {`(`, `)`, `[`, `]`, `{`, `}`, `1`}. The values of the last 11 test cases are different JSON values (e.g. `[]` and `null`), mostly not of the JSON `string` value.

The minimum length for arrays of both sets is zero. The maximum length depends on the JSON parser implementation limit for it. Since current release of this application runs in Node.js, it uses Node.js's JSON parser. For some details on what are this parser's limits, see this Stack Overflow thread: https://stackoverflow.com/questions/24153996/is-there-a-limit-on-the-size-of-a-string-in-json-with-node-js

### Test case examples

An example of a test case that the testing is expected to pass:
```json
{
    "argument": "()(())",
    "expectedResult": true
}
```

An example of a test case that the testing is expected not to pass:
```json
{
    "argument": { "foo": "bar" },
    "expectedResult": false
}
```

## Output

If an algorithm gives the same result as the result value of a given test, the algorithm is said to pass that test. Otherwise, it is said not to pass that test.

Testing divides the algorithms into two groups. The first contains algorithms that can handle bracket of one type, and the second contains algorithms that can handle bracket of multiple types (current release of the application contains only one such algorithm). For each group, if all of the algorithms within that group pass all of the tests within all of the sets that they were tested against, the result of testing that group should be the following string:
```
ALL TESTS PASSED
```
Otherwise, the result of testing that group should be the following string:
```
FOLLOWING TESTS NOT PASSED:
```
followed by a list of results. Each of the results denotes testing a given algorithm from the given group against a given test case, and contains the following values:
- `functionName` – the name of the function that implements the given algorithm;
- `testCase` – the test value of the test case that the given algorithm has been tested against;
- `actualResult` – the result that the algorithm produced;
- `expectedResult` – the result that the algorithm should produce (by definition, different from the `actualResult` value).