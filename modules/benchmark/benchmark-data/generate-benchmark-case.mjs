const generateBenchmarkCase = function (
    maxBenchmarkCaseLength,
    onlyBracketProbability,
    bracketDominancePercent
) {
    let benchmarkCase = "";
    const benchmarkCaseLength = Math.floor(Math.random() * (maxBenchmarkCaseLength - 1)) + 1; // Start inclusive, end exclusive
    let character;

    if (Math.random() < onlyBracketProbability) {
        // Generate only parentheses
        for (let i = 0; i < benchmarkCaseLength; ++i) {
            const bracketProbability = Math.random();
            character = bracketProbability > 0.5 ? "(" : ")";
            benchmarkCase += character;
        }
    } else {
        // Generate random Latin-1 characters with parentheses' dominance
        for (let i = 0; i < benchmarkCaseLength; ++i) {
            if (Math.random() < bracketDominancePercent / 100) {
                character = Math.random() > 0.5 ? "(" : ")";
            } else {
                do {
                    // See https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block),
                    //  https://unicode-table.com/en/,
                    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode,
                    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
                    character = String.fromCharCode(Math.floor(Math.random() * (255 - 161)) + 161);
                } while (character === "(" || character === ")");
            }
            benchmarkCase += character;
        }
    }
    return benchmarkCase;
};

export default generateBenchmarkCase;