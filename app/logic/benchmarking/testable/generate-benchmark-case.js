/**
 * @module
 * @file A module for generating one benchmark case.
 * @requires ValbrstrException
 * @requires BenchmarkCaseRandomizer
 */

// Import helpers
const ValbrstrException = require("../../common/testable/valbrstr-exception");

/**
 * @exports
 * Generate a benchmark case.
 * @param {number} maxBenchmarkCaseLength
 *  An integer from `0` to `+Infinity`
 * @param {number} onlyBracketProbability
 *  A real number from `0.0` to `1.0`, both inclusive
 * @param {number} bracketDominancePercent
 *  An integer from `0` to `100`
 * @returns {string}
 *  May be an empty string; of length
 *  less than `maxBenchmarkCaseLength`
 */
function generateBenchmarkCase(
    maxBenchmarkCaseLength,
    onlyBracketProbability,
    bracketDominancePercent,
    BenchmarkCaseRandomizerClass
) {
    if (!Number.isInteger(maxBenchmarkCaseLength)) {
        throw new ValbrstrException(`The maximum length of a benchmark case must be an integer of the type "number", but instead is: ${maxBenchmarkCaseLength}`);
    }

    if (maxBenchmarkCaseLength < 0) {
        throw new ValbrstrException(`The maximum length of a benchmark case must be greater or equal to 0, but instead is: ${maxBenchmarkCaseLength}`);
    }

    if (typeof onlyBracketProbability !== "number") {
        throw new ValbrstrException(`The probability of a bracket occurrance must be of the type "number", but instead is: ${onlyBracketProbability}`);
    }

    if (onlyBracketProbability % 1 === 0
        && onlyBracketProbability !== 0) {
        throw new ValbrstrException(`The probability of the occurrance of a bracket must be a floating point number, but instead is: ${onlyBracketProbability}`);
    }

    if (onlyBracketProbability < 0.0
        || onlyBracketProbability > 1.0) {
        throw new ValbrstrException(`The probability of the occurance of a bracket must be between 0.0 and 1.0, both inclusive, but instead is: ${onlyBracketProbability}`);
    }

    if (!Number.isInteger(bracketDominancePercent)) {
        throw new ValbrstrException(`The percent of brackets in a string must be an integer of the type "number", but instead is: ${bracketDominancePercent}`);
    }

    if (bracketDominancePercent < 0
        || bracketDominancePercent > 100) {
        throw new ValbrstrException(`The percent of brackets in a string must be between 0 and 100, both inclusive, but instead is: ${bracketDominancePercent}`);
    }

    let benchmarkCase = "";
    const benchmarkCaseLength = BenchmarkCaseRandomizerClass.getRandomBenchmarkCaseLength(
        maxBenchmarkCaseLength
    );
    let character;

    if (BenchmarkCaseRandomizerClass.getRandomOnlyBracketProbability() < onlyBracketProbability) {
        // Generate only parentheses
        for (let i = 0; i < benchmarkCaseLength; ++i) {
            const bracketProbability = BenchmarkCaseRandomizerClass.getRandomBracketProbability();
            character = bracketProbability > 0.5 ? "(" : ")";
            benchmarkCase += character;
        }
    } else {
        // Generate random characters with parentheses' dominance
        for (let i = 0; i < benchmarkCaseLength; ++i) {
            if (BenchmarkCaseRandomizerClass.getRandomBracketDominancePercent() < bracketDominancePercent / 100) {
                character = BenchmarkCaseRandomizerClass.getRandomBracketProbability() > 0.5 ? "(" : ")";
            } else {
                do {
                    character = BenchmarkCaseRandomizerClass.getRandomCharacter();
                } while (character === "(" || character === ")");
            }
            benchmarkCase += character;
        }
    }
    return benchmarkCase;
};

exports.generateBenchmarkCase = generateBenchmarkCase;