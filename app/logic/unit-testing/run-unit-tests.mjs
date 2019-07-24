/**
 * @module
 * @file A module for unit testing.
 * @requires isBracketStringValidCounter
 * @requires isBracketStringValidRecursion
 * @requires isBracketStringValidShortest
 * @requires isBracketStringValidStack
 * @requires isBracketStringValidStackList
 * @requires getUnitTestCasesFromFile
 */

// Import algorithms to be tested
import isBracketStringValidCounter from "../validation/is-bracket-string-valid-counter.mjs";
import isBracketStringValidRecursion from "../validation/is-bracket-string-valid-recursion.mjs";
import isBracketStringValidShortest from "../validation/is-bracket-string-valid-shortest.mjs";
import isBracketStringValidStack from "../validation/is-bracket-string-valid-stack.mjs";
import isBracketStringValidStackList from "../validation/is-bracket-string-valid-stack-list.mjs";

// Import predefined test cases
import * as singleBracketTestCasesJSON from "./test-cases/single-bracket-test-cases.json";
import * as bracketListTestCasesJSON from "./test-cases/bracket-list-test-cases.json";

// Import helper functions
import getUnitTestCasesFromFile from "./get-unit-test-cases-from-file.mjs";
import ValbrstrException from "../helpers/valbrstr-exception.mjs";

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

    singleBracketTestCases = Array.from(singleBracketTestCasesJSON.default);
    bracketListTestCases = Array.from(bracketListTestCasesJSON.default);
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