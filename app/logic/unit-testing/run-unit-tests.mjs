import isBracketStringValidCounter from "../validation/is-bracket-string-valid-counter.mjs";
import isBracketStringValidRecursion from "../validation/is-bracket-string-valid-recursion.mjs";
import isBracketStringValidShortest from "../validation/is-bracket-string-valid-shortest.mjs";
import isBracketStringValidStack from "../validation/is-bracket-string-valid-stack.mjs";
import isBracketStringValidStackList from "../validation/is-bracket-string-valid-stack-list.mjs";
import * as singleBracketTestCasesJSON from "./test-cases/single-bracket-test-cases.json";
import * as bracketListTestCasesJSON from "./test-cases/bracket-list-test-cases.json";

const singleBracketTestedFunctions = [
    isBracketStringValidCounter,
    isBracketStringValidRecursion,
    isBracketStringValidShortest,
    isBracketStringValidStack
];

const bracketListTestedFunctions = [
    isBracketStringValidStackList
];

const singleBracketTestCases = Array.from(singleBracketTestCasesJSON.default);
const bracketListTestCases = Array.from(bracketListTestCasesJSON.default);

const singleBracketResults = new Array();
const bracketListResults = new Array();

singleBracketTestedFunctions.forEach(f => {
    singleBracketTestCases.forEach(c => {
        singleBracketResults.push({
            "functionName": f.name,
            "testCase": c.argument,
            "actualResult": f(c.argument),
            "expectedResult": c.expectedResult
        });
    });
});

bracketListTestedFunctions.forEach(f => {
    singleBracketTestCases.forEach(c => {
        singleBracketResults.push({
            "functionName": f.name,
            "testCase": c.argument,
            "actualResult": f(c.argument),
            "expectedResult": c.expectedResult
        });
    });

    bracketListTestCases.forEach(c => {
        bracketListResults.push({
            "functionName": f.name,
            "testCase": c.argument,
            "actualResult": f(c.argument),
            "expectedResult": c.expectedResult
        });
    });
});

console.log("Results of unit tests including brackets of single types:");
const singleBracketTestsResults = bracketListResults.filter(r => r.actualResult !== r.expectedResult);
console.log(singleBracketTestsResults.length === 0 ?
    "ALL TESTS PASSED" :
    `FOLLOWING TESTS NOT PASSED:\n${singleBracketTestsResults}`
);

console.log("\nResults of unit tests including brackets of multiple types:");
const bracketListTestsResults = singleBracketResults.filter(r => r.actualResult !== r.expectedResult);
console.log(bracketListTestsResults.length === 0 ?
    "ALL TESTS PASSED" :
    `FOLLOWING TESTS NOT PASSED:\n${bracketListTestsResults}`
);