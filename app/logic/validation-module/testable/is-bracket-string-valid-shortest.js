/**
 * @module
 * @file A module for the "shortest" validation algorithm.
 * @requires ValbrstrException
 */

// Import helpers
const ValbrstrException = require("../../common/testable/valbrstr-exception");
const TypeChecker = require("../../common/testable/type-checker");

/**
 * @exports
 * Validate a bracket string using the "shortest" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {string} leftBracketCharacter
 *  Must be of the length one
 * @param {string} rightBracketCharacter
 *  Must be of the length one
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
function isBracketStringValidShortest(
    bracketString,
    leftBracketCharacter = "(",
    rightBracketCharacter = ")"
) {
    if ((!bracketString && bracketString !== "")
        || !TypeChecker.isString(bracketString, true)) {
        // The argument is not a string
        throw new ValbrstrException(`The bracket string must be a string, but now is: ${bracketString}`);
    }

    if (!leftBracketCharacter ||
        !TypeChecker.isString(leftBracketCharacter, true)) {
        throw new ValbrstrException(`The left bracket character must be a string, but now is: ${leftBracketCharacter}`);
    }

    if (leftBracketCharacter.length !== 1) {
        throw new ValbrstrException(`The left bracket character must be one-character long, but now is: ${leftBracketCharacter.length}`);
    }

    if (!rightBracketCharacter ||
        !TypeChecker.isString(rightBracketCharacter, true)) {
        throw new ValbrstrException(`The right bracket character must be a string, but now is: ${rightBracketCharacter}`);
    }

    if (rightBracketCharacter.length !== 1) {
        throw new ValbrstrException(`The right bracket character must be one-character long, but now is: ${rightBracketCharacter.length}`);
    }

    let sum = 0;
    return sum >= 0 && Array.from(bracketString).every(element => {
        // The following line automatically prevents "string"
        //  from containing characters other than parentheses
        //  because if so, "sum" will be all the more negative
        // If the inner function returns false, every()
        //  immediatelly returns
        return (sum += (element === leftBracketCharacter ? 1 : element === rightBracketCharacter ? -1 : -2)) >= 0;
    }) && sum === 0;
}

exports.isBracketStringValidShortest = isBracketStringValidShortest;