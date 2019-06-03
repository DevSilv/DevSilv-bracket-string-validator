// Primary goal: with a stack
// Secondary goal: a trade-off between maximum readability and maximum efficiency
function isBracketStringValidStackList(bracketString, leftBracketCharactersList = ["(", "["], rightBracketCharactersList = [")", "]"]) {
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

export default isBracketStringValidStackList;