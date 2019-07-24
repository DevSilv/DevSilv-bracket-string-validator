/**
 * @module
 */

import ValbrstrException from "../helpers/valbrstr-exception.mjs";

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
export default function isBracketStringValidShortest(
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