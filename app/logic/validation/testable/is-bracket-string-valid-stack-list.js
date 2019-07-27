/**
 * @module
 * @file A module for the "stack-list" validation algorithm.
 * @requires ValbrstrException
 */

const ValbrstrException = require("../../common/testable/valbrstr-exception");

/**
 * @exports
 * Validate a bracket string using the "stack-list" method.
 * @param {string} bracketString
 *  May be an empty string
 * @param {array{string}} leftBracketCharactersList
 *  Must be of the same length as the length of the list
 *  passed as the parameter `rightBracketCharactersList`;
 *  each element is a string, one character
 * @param {array{string}} rightBracketCharactersList
 *  Must be of the same length as the length of the list
 *  passed as the parameter `leftBracketCharactersList`;
 *  each element is a string, one character
 * @returns {boolean} If `bracketString` is a valid
 *  bracket string, `true`; otherwise, `false`
 */
function isBracketStringValidStackList(
    bracketString,
    leftBracketCharactersList = ["(", "["],
    rightBracketCharactersList = [")", "]"]
) {
    if ((!bracketString && bracketString !== "")
        || !bracketString.substring) {
        // The argument is not a string
        throw new ValbrstrException(`The bracket string must be a string, but now is: ${bracketString}`);
    }

    if (!Array.isArray(leftBracketCharactersList)) {
        throw new ValbrstrException(`The list with left bracket characters must be an array`);
    }

    if (!Array.isArray(rightBracketCharactersList)) {
        throw new ValbrstrException(`The list with right bracket characters must be an array`);
    }

    if (leftBracketCharactersList.length !== rightBracketCharactersList.length) {
        throw new ValbrstrException(`The lists must have the same length`);
    }

    if (leftBracketCharactersList.length === 0) {
        throw new ValbrstrException(`The list with left bracket characters must not be empty`);
    }

    if (rightBracketCharactersList.length === 0) {
        throw new ValbrstrException(`The list with right bracket characters must not be empty`);
    }

    if (!leftBracketCharactersList.every(x => x.substring)) {
        throw new ValbrstrException(`Each element of the list of left bracket characters must be a string`);
    }

    if (!leftBracketCharactersList.every(x => x.length === 1)) {
        throw new ValbrstrException(`Each string with a left bracket character must be one-character long`);
    }

    if (!rightBracketCharactersList.every(x => x.substring)) {
        throw new ValbrstrException(`Each element of the list of right bracket characters must be a string`);
    }

    if (!rightBracketCharactersList.every(x => x.length === 1)) {
        throw new ValbrstrException(`Each string with a right bracket character must be one-character long`);
    }

    if (bracketString.length === 0) {
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

exports.isBracketStringValidStackList = isBracketStringValidStackList;