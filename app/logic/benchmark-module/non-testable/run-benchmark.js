/**
 * @module
 * @file A module for benchmarking.
 * @requires isBracketStringValidCounter
 * @requires isBracketStringValidRecursion
 * @requires isBracketStringValidShortest
 * @requires isBracketStringValidStack
 * @requires isBracketStringValidStackList
 * @requires getUnitTestCasesFromFile
 * @requires benchmarkParametersJSON
 * @requires generateBenchmarkData
 * @requires getBenchmarkDataFromFile
 * @requires ValbrstrException
 */

// Import the functions implementing the algorithms to be benchmarked
const { isBracketStringValidCounter } = require("../../validation-module/testable/is-bracket-string-valid-counter");
const { isBracketStringValidRecursion } = require("../../validation-module/testable/is-bracket-string-valid-recursion");
const { isBracketStringValidShortest } = require("../../validation-module/testable/is-bracket-string-valid-shortest");
const { isBracketStringValidStack } = require("../../validation-module/testable/is-bracket-string-valid-stack");
const { isBracketStringValidStackList } = require("../../validation-module/testable/is-bracket-string-valid-stack-list");

// Import the benchmark parameters
const benchmarkParametersJSON = require("../non-testable/benchmark-parameters.json");

// Import the function to generate benchmark data
const { generateBenchmarkData } = require("../testable/generate-benchmark-data");

// Import helpers
const { getBenchmarkDataFromFile } = require("../testable/get-benchmark-data-from-file");
const ValbrstrException = require("../../common/testable/valbrstr-exception");

try {
    // Prepare algorithms to be benchmarked

    const benchmarkedFunctions = [
        isBracketStringValidCounter,
        isBracketStringValidRecursion,
        isBracketStringValidShortest,
        isBracketStringValidStack,
        isBracketStringValidStackList
    ];

    // Prepare benchmarking parameters

    const benchmarkCaseCount = benchmarkParametersJSON.benchmarkCaseCount;
    const maxBenchmarkCaseLength = benchmarkParametersJSON.maxBenchmarkCaseLength;
    const onlyBracketProbability = benchmarkParametersJSON.onlyBracketProbability;
    const bracketDominancePercent = benchmarkParametersJSON.bracketDominancePercent;
    const benchmarkRepeatNumber = 10;

    // Prepare benchmark data

    let customBenchmarkData = null;
    if (process.argv.length > 2) {
        // There is a custom file, use it

        const path = process.argv[2];
        customBenchmarkData = getBenchmarkDataFromFile(path);
        if (customBenchmarkData === null) {
            // Custom data are bad
            throw new ValbrstrException("The provided data contain benchmark data in an invalid form");
        }
    }

    // Prepare container for the benchmarking result

    const averageTimes = new Object();
    benchmarkedFunctions.forEach(func => Object.defineProperty(averageTimes, func.name, {
        value: [],
        enumerable: true,
        writable: true
    }));

    // Benchmark

    for (let k = 0; k < benchmarkRepeatNumber; ++k) {
        benchmarkedFunctions.forEach(func => {
            let oneDataSetTotalTime = 0; // miliseconds

            // Get the benchmark data

            let benchmarkData = [];
            if (customBenchmarkData === null) {
                // There are not custom benchmark data, generate them

                // Monkey patch for making the variable "benchmarkData"
                //  a single set of benchmark data (according to spec)
                benchmarkData.push(
                    generateBenchmarkData(
                        benchmarkCaseCount,
                        maxBenchmarkCaseLength,
                        onlyBracketProbability,
                        bracketDominancePercent
                    )
                );
            } else {
                // There are custom benchmark data, use them

                // slice() is used only to guarantee immutability
                //  for cases that might arise in the future
                //  (i.e., it is used "just in case")
                benchmarkData = customBenchmarkData.slice();
            }

            benchmarkData.forEach(benchmarkDataSet => {
                benchmarkDataSet.forEach(benchmarkCase => {
                    // Thanks to https://blog.abelotech.com/posts/measure-execution-time-nodejs-javascript/
                    // const start = new Date(); // For Node.js and a browser
                    const start = process.hrtime(); // For Node.js only
                    func(benchmarkCase);
                    // const end = new Date(); // For Node.js and a browser
                    const end = process.hrtime(start); // For Node.js only
                    // oneDataSettotalTime += (end - start); // For Node.js and a browser
                    oneDataSetTotalTime += end[1] / 1000; // For Node.js only
                });
            });

            averageTimes[func.name].push({
                "datasetID": k,
                "timeNs": oneDataSetTotalTime / benchmarkData.length
            });
        });
    }

    // Output benchmarking result

    console.log(averageTimes);
} catch (e) {
    console.error(e.message);
    process.exit(1);
}