# I

|Previously in the file|Language|Why removed from the application sources|
|-|-|-|
|`app/logic/unit-testing/generate-raw-test-cases.mjs`|JavaScript|The raw test cases were to be generated only once.|

```javascript
/**
 * @module
 * @file A module containing scripts for generating raw test cases.
 */

/**
 * Generate a set of "raw" test cases.
 * @param {number} minCaseLength 
 * @param {number} maxCaseLength 
 * @param {array} leftBracketsList 
 * @param {array} rightBracketsList 
 * @param {array} otherCharactersList 
 * @param {array} otherValuesList 
 * @returns {JSON} 
 */
function generateRawTestCases(
    minCaseLength,
    maxCaseLength,
    leftBracketsList,
    rightBracketsList,
    otherCharactersList,
    otherValuesList
) {
    const testCases = new Array();
    const generateNLengthStringsFromArray = function (array, length) {
        const result = new Array();
        const generateNLengthStringsFromArrayRecursion = function (array, generated, length) {
            if (generated.length === length) {
                result.push(generated);
            } else {
                for (let i = 0; i < array.length; ++i) {
                    generateNLengthStringsFromArrayRecursion(array, generated + array[i], length);
                }
            }
        }
        generateNLengthStringsFromArrayRecursion(array, "", length);
        return result;
    }

    for (let i = minCaseLength; i <= maxCaseLength; ++i) {
        const testCasesOfCurrentLength = generateNLengthStringsFromArray(
            leftBracketsList.concat(rightBracketsList).concat(otherCharactersList), i
        );
        testCases.push(...testCasesOfCurrentLength.map(testCase => {
            if (i % 2 !== 0 ||
                rightBracketsList.includes(testCase[0]) ||
                leftBracketsList.includes(testCase[testCase.length - 1])
            ) {
                // The expectedResult's value may be
                //  determined beforehand (so the developer
                //  does not have to do anything later)
                return {
                    "argument": testCase,
                    "expectedResult": false
                }
            } else {
                // The developer has later to adjust
                //  expectedResult's value themselves
                return {
                    "argument": testCase,
                    "expectedResult": ""
                };
            }
        }));
    }

    testCases.push(...otherValuesList.map(testCase => {
        return {
            "argument": testCase,
            "expectedResult": false
        }
    }));

    // Return "pretty-printed" JSON (multi-line with indentation)
    return JSON.stringify(testCases, null, "\t");
}

// Generate test cases with brackets of one type
// console.log(generateRawTestCases(1, 4, ["("], [")"], ["1"], [
//     null, 0, 1, 100, 1.1, 0x501, {},
//     [], JSON.stringify("{'BBB':'A'}"), false, true
// ]));

// Generate test cases with brackets of multiple types
// console.log(generateRawTestCases(1, 4, ["(", "["], [")", "]"], ["1"], [
//     null, 0, 1, 100, 1.1, 0x501, {},
//     [], JSON.stringify("{'BBB':'A'}"), false, true
// ]));
```