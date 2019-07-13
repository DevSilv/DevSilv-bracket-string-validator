// Primary goal: with a counter
// Secondary goal: a trade-off between maximum readability and maximum efficiency
function isBracketStringValidCounter(bracketString, leftBracketCharacter = "(", rightBracketCharacter = ")") {
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

export default isBracketStringValidCounter;