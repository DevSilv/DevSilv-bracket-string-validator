/**
 * @module
 */

/**
 * @exports
 * Validate a bracket string using the "stack-list" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {array{string}} leftBracketCharactersList
 *  Must be of the same length as the length of the list
 *  passed as the parameter `rightBracketCharactersList`;
 *  each element of the type "string", one character
 * @param {array{string}} rightBracketCharactersList
 *  Must be of the same length as the length of the list
 *  passed as the parameter `leftBracketCharactersList`;
 *  each element of the type "string", one character
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
export default function isBracketStringValidStackList(
    bracketString,
    leftBracketCharactersList = ["(", "["],
    rightBracketCharactersList = [")", "]"]
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
        if (leftBracketCharactersList.includes(bracketString[i])) {
            stack.push(bracketString[i]);
        } else if (rightBracketCharactersList.includes(bracketString[i])) {
            if (stack.length === 0) {
                // We cannot pop from an empty stack,
                //  therefore we have to return before
                return false;
            }

            const matchingCharacter = leftBracketCharactersList[
                rightBracketCharactersList.findIndex(y => y === bracketString[i])
            ];
            if (stack[stack.length - 1] !== matchingCharacter) {
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