/**
 * @module
 * @file A module for the "stack" validation algorithm.
 * @requires ValbrstrException
 */

// Import helpers
const ValbrstrException = require("../../common/testable/valbrstr-exception");
const TypeChecker = require("../../common/testable/type-checker");

/**
 * @exports
 * Validate a bracket string using the "stack" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {string} leftBracketCharacter
 *  Must be of the length one
 * @param {string} rightBracketCharacter
 *  Must be of the length one
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
function isBracketStringValidStack(
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

    // JavaScript does not have the stack implemented as such,
    //  therefore here it is substituted with Array
    const stack = new Array();

    for (let i = 0; i < bracketString.length; ++i) {
        if (bracketString[i] === leftBracketCharacter) {
            stack.push(bracketString[i]);
        } else if (bracketString[i] === rightBracketCharacter) {
            if (stack.length === 0) {
                // We cannot pop from an empty stack,
                //  therefore we have to return before
                return false;
            }

            stack.pop();
        } else {
            return false;
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

exports.isBracketStringValidStack = isBracketStringValidStack;