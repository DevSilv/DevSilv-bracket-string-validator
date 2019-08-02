/**
 * @module
 * @file A module for unit testing.
 * @requires isBracketStringValidCounter
 * @requires isBracketStringValidRecursion
 * @requires isBracketStringValidShortest
 * @requires isBracketStringValidStack
 * @requires isBracketStringValidStackList
 * @requires singleBracketTestCasesJSON
 * @requires bracketListTestCasesJSON
 * @requires getUnitTestCasesFromFile
 * @requires ValbrstrException
 */

// Import the functions implementing the algorithms to be tested
const { isBracketStringValidCounter } = require("../../validation-module/testable/is-bracket-string-valid-counter");
const { isBracketStringValidRecursion } = require("../../validation-module/testable/is-bracket-string-valid-recursion");
const { isBracketStringValidShortest } = require("../../validation-module/testable/is-bracket-string-valid-shortest");
const { isBracketStringValidStack } = require("../../validation-module/testable/is-bracket-string-valid-stack");
const { isBracketStringValidStackList } = require("../../validation-module/testable/is-bracket-string-valid-stack-list");

// Import predefined test cases
const singleBracketTestCasesJSON = require("../../unit-testing-module/non-testable/test-cases/single-bracket-test-cases.json");
const bracketListTestCasesJSON = require("../../unit-testing-module/non-testable/test-cases/bracket-list-test-cases.json");

// Import helpers
const { getUnitTestCasesFromFile } = require("../testable/get-unit-test-cases-from-file");
const ValbrstrException = require("../../common/testable/valbrstr-exception");

try {
    // Prepare algorithms to be tested

    const singleBracketTestedFunctions = [
        isBracketStringValidCounter,
        isBracketStringValidRecursion,
        isBracketStringValidShortest,
        isBracketStringValidStack
    ];

    const bracketListTestedFunctions = [
        isBracketStringValidStackList
    ];

    // Prepare test cases

    let singleBracketTestCases = [];
    let bracketListTestCases = [];
    if (process.argv.length > 2) {
        // There is a custom file, use it

        const path = process.argv[2];
        const allCustomTestCases = getUnitTestCasesFromFile(path);

        if (allCustomTestCases !== null) {
            // Custom data are good
            singleBracketTestCases = allCustomTestCases.singleBracketTestCases;
            bracketListTestCases = allCustomTestCases.bracketListTestCases;
        } else {
            // Custom data are bad
            throw new ValbrstrException("The provided data contain at least one test case in an invalid form");
        }
    } else {
        // There is no custom file, use the predefined sets of test cases

        singleBracketTestCases = Array.from(singleBracketTestCasesJSON);
        bracketListTestCases = Array.from(bracketListTestCasesJSON);
    }

    // Prepare containers for the testing results

    const singleBracketResults = new Array();
    const bracketListResults = new Array();

    // Test

    singleBracketTestedFunctions.forEach(f => {
        singleBracketTestCases.forEach(c => {
            singleBracketResults.push({
                "functionName": f.name,
                "testCase": c.argument,
                "actualResult": (() => {
                    try {
                        return f(c.argument);
                    } catch (e) {
                        if (e instanceof ValbrstrException) {
                            return "ValbrstrException";
                        } else {
                            throw e;
                        }
                    }
                })(),
                "expectedResult": c.expectedResult
            });
        });
    });

    bracketListTestedFunctions.forEach(f => {
        singleBracketTestCases.forEach(c => {
            singleBracketResults.push({
                "functionName": f.name,
                "testCase": c.argument,
                "actualResult": (() => {
                    try {
                        return f(c.argument);
                    } catch (e) {
                        if (e instanceof ValbrstrException) {
                            return "ValbrstrException";
                        } else {
                            throw e;
                        }
                    }
                })(),
                "expectedResult": c.expectedResult
            });
        });

        bracketListTestCases.forEach(c => {
            bracketListResults.push({
                "functionName": f.name,
                "testCase": c.argument,
                "actualResult": (() => {
                    try {
                        return f(c.argument);
                    } catch (e) {
                        if (e instanceof ValbrstrException) {
                            return "ValbrstrException";
                        } else {
                            throw e;
                        }
                    }
                })(),
                "expectedResult": c.expectedResult
            });
        });
    });

    // Return testing results

    console.log("Results of unit tests including brackets of single types:");
    const singleBracketTestsResults = bracketListResults.filter(r => r.actualResult !== r.expectedResult);
    console.log(singleBracketTestsResults.length === 0 ?
        "ALL TESTS PASSED" :
        `FOLLOWING TESTS NOT PASSED:\n`
    );
    console.log(singleBracketTestsResults);

    console.log("\nResults of unit tests including brackets of multiple types:");
    const bracketListTestsResults = singleBracketResults.filter(r => r.actualResult !== r.expectedResult);
    console.log(bracketListTestsResults.length === 0 ?
        "ALL TESTS PASSED" :
        `FOLLOWING TESTS NOT PASSED:\n`
    );
    console.log(bracketListTestsResults);
} catch (e) {
    console.error(e.message);
    process.exit(1);
}