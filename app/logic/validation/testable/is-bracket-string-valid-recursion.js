/**
 * @module
 * @file A module for the "recursion" validation algorithm.
 * @requires ValbrstrException
 */

// Import helpers
const ValbrstrException = require("../../common/testable/valbrstr-exception");
const TypeChecker = require("../../common/testable/type-checker");

/**
 * @exports
 * @description Validate a bracket string using the "recursion" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {string} leftBracketCharacter
 *  Must be of the length one
 * @param {string} rightBracketCharacter
 *  Must be of the length one
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
function isBracketStringValidRecursion(
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

    const x = function (sum, i) {
        if (sum < 0) {
            return false;
        }

        if (i < bracketString.length) {
            // We are not not yet at the end of the string,
            //  therefore we can continue

            const currentCharacter = bracketString[i];
            let currCharNumberValue;
            if (currentCharacter === leftBracketCharacter) {
                currCharNumberValue = 1;
            } else if (currentCharacter === rightBracketCharacter) {
                currCharNumberValue = -1;
            } else {
                return false;
            }

            ++i;
            sum += currCharNumberValue;

            return x(sum, i);
        }

        if (sum === 0) {
            return true;
        } else {
            return false;
        }
    };

    return x(0, 0);
}

exports.isBracketStringValidRecursion = isBracketStringValidRecursion;