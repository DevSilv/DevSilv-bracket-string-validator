/**
 * @module
 * @file A module for validation.
 * @requires isBracketStringValidCounter
 * @requires isBracketStringValidRecursion
 * @requires isBracketStringValidShortest
 * @requires isBracketStringValidStack
 * @requires isBracketStringValidStackList
 * @requires ValbrstrException
 */

// Import the functions implementing algorithms to be used to validate
const { isBracketStringValidCounter } = require("../testable/is-bracket-string-valid-counter");
const { isBracketStringValidRecursion } = require("../testable/is-bracket-string-valid-recursion");
const { isBracketStringValidShortest } = require("../testable/is-bracket-string-valid-shortest");
const { isBracketStringValidStack } = require("../testable/is-bracket-string-valid-stack");
const { isBracketStringValidStackList } = require("../testable/is-bracket-string-valid-stack-list");

// Import a helper
const ValbrstrException = require("../../common/testable/valbrstr-exception");

try {
    const methods = new Map(Object.entries({
        "counter": isBracketStringValidCounter,
        "recursion": isBracketStringValidRecursion,
        "shortest": isBracketStringValidShortest,
        "stack": isBracketStringValidStack,
        "stack-list": isBracketStringValidStackList
    }));

    const actualArgs = process.argv.slice(2);
    if (actualArgs.length < 2) {
        throw new ValbrstrException("To little arguments provided.");
    } else if (actualArgs.length > 2) {
        console.log("Warning: too many arguments provided. There will be used only the first two arguments.")
    }

    const methodName = actualArgs[0];
    if (!Array.from(methods.keys()).includes(methodName)) {
        throw new ValbrstrException("Unknown method provided.");
    }

    const bracketString = actualArgs[1];

    const func = methods.get(methodName);

    const result = func(bracketString);

    console.log(result);
} catch (e) {
    console.error(e.message);
    process.exit(1);
}