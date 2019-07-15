# Unit testing

Each of the validation algorithms has been unit-tested, and may be unit-tested, against a set of predefined unit test cases.

The algorithms implementations are written in the [JavaScript](https://en.wikipedia.org/wiki/JavaScript) programming language, thus below they are partially described in terms of this language.

## Input

There are predefined two sets of unit test cases. They may be found in the following two files:
- the first set: `app/logic/unit-testing/test-cases/single-bracket-test-cases.json`;
- the second set: `app/logic/unit-testing/test-cases/bracket-list-test-cases.json`.

In case of both sets, a test case consists of two values: the test value (called `argument` in the file) and the result value (called `expectedResult` in the file). The test value of a test cases are different for each test case within a set, and the value of the result value are either `true` or `false`. Example of a test case (in the JSON notation):
```json
{
    "argument": "(1))",
    "expectedResult": false
}
```

The first set makes use of only one type of brackets: `()`, and contains 40 test cases. The values of the first 30 of them are of the `string` JavaScript type and consists solely of bracket characters. They denotes all possible 1-, 2-, 3- and 4-element variations of the set {`(`, `)`}. The values of the last 10 test cases are different JavaScript values (e.g. `[]` and `null`), mostly not of the `string` JavaScript type. This set of test cases is used to unit-test all of the algorithms.

The second set makes use of multiple types of brackets: `()`, `[]` and `{}`, and contains 791 test cases. The values of the first 780 of them are of the `string` JavaScript type and consists of bracket characters and the character `1`. They denotes all possible 1-, 2-, 3- and 4-element variations of the set {`(`, `)`, `[`, `]`, `{`, `}`, `1`}. The values of the last 11 test cases are different JavaScript values (e.g. `[]` and `null`), mostly not of the `string` JavaScript type. This set of test cases is used to unit-test only the algorithm for the "stack-list" method (since only this method allows to validate strings with multiple bracket types).

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