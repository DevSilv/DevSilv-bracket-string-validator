/**
 * @module
 */

/**
 * @exports
 * Validate a bracket string using the "counter" method.
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
export default function isBracketStringValidCounter(
    bracketString,
    leftBracketCharacter = "(",
    rightBracketCharacter = ")"
) {
    if (!bracketString) {
        // The argument is a falsy value
        //  (which includes being an empty string)
        // See https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        return false;
    }

    if (!bracketString.substring) {
        // The argument is not a string
        return false;
    }

    let counter = 0;

    for (let i = 0; i < bracketString.length; ++i) {
        if (bracketString[i] === leftBracketCharacter) {
            ++counter;
        } else if (bracketString[i] === rightBracketCharacter) {
            --counter;

            if (counter < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    if (counter === 0) {
        return true;
    } else {
        return false;
    }
}