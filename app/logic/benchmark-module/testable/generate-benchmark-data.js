/**
 * @module
 * @file A module for generating all benchmark data.
 * @requires generateBenchmarkCase
 * @requires ValbrstrException
 */

const { generateBenchmarkCase } = require("./generate-benchmark-case");

// Import helpers
const ValbrstrException = require("../../common/testable/valbrstr-exception");
const BenchmarkCaseRandomizerClass = require("../../benchmark-module/testable/benchmark-case-randomizer");

/**
 * @exports
 * @requires generateBenchmarkCase
 * @description Generate a set of benchmark cases.
 * @param {number} benchmarkCaseCount
 *  An integer from `0` to `+Infinity`
 * @param {number} maxBenchmarkCaseLength
 *  An integer from `0` to `+Infinity`
 * @param {number} onlyBracketProbability
 *  A real number from `0.0` to `1.0`, both inclusive
 * @param {number} bracketDominancePercent
 *  An integer from `0` to `100`
 * @returns {array}
 *  May be an empty array; elements are strings
 */
function generateBenchmarkData(
    benchmarkCaseCount,
    maxBenchmarkCaseLength,
    onlyBracketProbability,
    bracketDominancePercent
) {
    if (!Number.isInteger(benchmarkCaseCount)) {
        throw new ValbrstrException(`The number of benchmark cases must be an integer of the type "number", but instead is: ${benchmarkCaseCount}`);
    }

    if (benchmarkCaseCount < 0) {
        throw new ValbrstrException(`The number of benchmark cases must be greater or equal to 0, but instead is: ${benchmarkCaseCount}`);
    }

    const benchmarkData = new Array();

    for (let i = 0; i < benchmarkCaseCount; ++i) {
        benchmarkData.push(
            generateBenchmarkCase(
                maxBenchmarkCaseLength,
                onlyBracketProbability,
                bracketDominancePercent,
                BenchmarkCaseRandomizerClass
            )
        );
    }

    return benchmarkData;
}

exports.generateBenchmarkData = generateBenchmarkData;