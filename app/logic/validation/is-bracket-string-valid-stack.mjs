/**
 * @module
 */

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
export default function isBracketStringValidStack(
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