/**
 * @module
 */

/**
 * @exports
 * Validate a bracket string using the "shortest" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {string} leftBracketCharacter
 *  May be an empty string; if non-empty,
 *  must be of the length one
 * @param {string} rightBracketCharacter
 *  May be an empty string; if non-empty,
 *  must be of the length one
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
export default function isBracketStringValidShortest(
    bracketString,
    leftBracketCharacter = "(",
    rightBracketCharacter = ")"
) {
    let sum = ((!bracketString || !bracketString.substring) ? -1 : 0);
    return sum >= 0 && Array.from(bracketString).every(element => {
        // The following line automatically prevents "string"
        //  from containing characters other than parentheses
        //  because if so, "sum" will be all the more negative
        // If the inner function returns false, every()
        //  immediatelly returns
        return (sum += (element === leftBracketCharacter ? 1 : element === rightBracketCharacter ? -1 : -2)) >= 0;
    }) && sum === 0;
}