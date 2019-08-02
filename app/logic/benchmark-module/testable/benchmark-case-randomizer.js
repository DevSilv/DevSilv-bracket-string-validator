/**
 * @module
 * @file A module for the class containing methods for randomizing a benchmark case.
 * @requires 
 */

const ValbrstrException = require("../../../logic/common/testable/valbrstr-exception");

/**
 * @exports
 * @description A class serving as a container for functions for randomizing a benchmark case.
 */
class BenchmarkCaseRandomizer {
    /**
     * @static
     * @description Get a random length for a benchmark case.
     * @param {number} maxBenchmarkCaseLength
     *  An integer from `0` inclusive
     *  to `+Infinity` exclusive
     * @return {number}
     *  An integer from `maxBenchmarkCaseLength` inclusive
     *  to `+Infinity` exclusive
     */
    static getRandomBenchmarkCaseLength(maxBenchmarkCaseLength) {
        if (maxBenchmarkCaseLength < 0) {
            throw new ValbrstrException(`The maximum length for a benchmark case shall be greater or equal to zero, but now is: ${maxBenchmarkCaseLength}`);
        }

        return Math.floor(
            Math.random() * (maxBenchmarkCaseLength - 1)
        ) + 1;
    }

    /**
     * @static
     * @description Get a random only-bracket probability.
     * @return {number}
     *  A floating-point number from `0` inclusive to `1` exclusive
     */
    static getRandomOnlyBracketProbability() {
        return Math.random();
    }

    /**
     * @static
     * @description Get a random bracket probability.
     * @return {number}
     *  A floating-point number from `0` inclusive to `1` exclusive
     */
    static getRandomBracketProbability() {
        return Math.random();
    }

    /**
     * @static
     * @description Get a random percent of bracket dominance.
     * @return {number}
     *  A floating-point number from `0` inclusive to `1` exclusive
     */
    static getRandomBracketDominancePercent() {
        return Math.random();
    }

    /**
     * @static
     * @description Get random character.
     * @return {string}
     *  May not be an empty string; of length 1;
     *  a character within the code range from 161 to 255
     */
    static getRandomCharacter() {
        // See https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block),
        //  https://unicode-table.com/en/,
        //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode,
        //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        return String.fromCharCode(
            Math.floor(
                Math.random() * (255 - 161)
            ) + 161
        );
    }
}

module.exports = BenchmarkCaseRandomizer;