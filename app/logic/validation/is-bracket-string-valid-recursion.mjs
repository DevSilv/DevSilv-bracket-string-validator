/**
 * @module
 */

/**
 * @exports
 * Validate a bracket string using the "recursion" method.
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
export default function isBracketStringValidRecursion(
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