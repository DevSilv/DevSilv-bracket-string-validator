// Goal: maximum shortness
// "Shortness" does not include limiting the length
//  of variables' names, nor the number of lines,
//  whitespaces, parentheses and brackets
function isBracketStringValidShortest(bracketString, leftBracketCharacter = "(", rightBracketCharacter = ")") {
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

export default isBracketStringValidShortest;