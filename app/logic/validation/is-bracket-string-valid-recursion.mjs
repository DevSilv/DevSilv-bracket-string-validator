/**
 * @module
 */

import ValbrstrException from "../helpers/valbrstr-exception.mjs";

/**
 * @exports
 * Validate a bracket string using the "recursion" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {string} leftBracketCharacter
 *  Must be of the length one
 * @param {string} rightBracketCharacter
 *  Must be of the length one
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
export default function isBracketStringValidRecursion(
    bracketString,
    leftBracketCharacter = "(",
    rightBracketCharacter = ")"
) {
    if ((!bracketString && bracketString !== "")
        || !bracketString.substring) {
        // The argument is not a string
        throw new ValbrstrException(`The bracket string must be of the type "string", but now is: ${bracketString}`);
    }

    if (leftBracketCharacter.length > 1) {
        throw new ValbrstrException(`The left bracket character must be one-character long, but now is: ${leftBracketCharacter.length}`);
    }

    if (rightBracketCharacter.length > 1) {
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