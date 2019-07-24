/**
 * @module
 * @file A module for running benchmark.
 */

// Import algorithms to be benchmarked
import isBracketStringValidCounter from "../validation/is-bracket-string-valid-counter.mjs";
import isBracketStringValidRecursion from "../validation/is-bracket-string-valid-recursion.mjs";
import isBracketStringValidShortest from "../validation/is-bracket-string-valid-shortest.mjs";
import isBracketStringValidStack from "../validation/is-bracket-string-valid-stack.mjs";
import isBracketStringValidStackList from "../validation/is-bracket-string-valid-stack-list.mjs";

// Import benchmark parameters
import * as benchmarkParametersJSON from "./benchmark-parameters.json";

// Import function to generate benchmark data
import generateBenchmarkData from "./generate-benchmark-data.mjs";

// Import helper functions
import getBenchmarkDataFromFile from "./get-benchmark-data-from-file.mjs";
import ValbrstrException from "../helpers/valbrstr-exception.mjs";

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

const benchmarkCaseCount = benchmarkParametersJSON.default.benchmarkCaseCount;
const maxBenchmarkCaseLength = benchmarkParametersJSON.default.maxBenchmarkCaseLength;
const onlyBracketProbability = benchmarkParametersJSON.default.onlyBracketProbability;
const bracketDominancePercent = benchmarkParametersJSON.default.bracketDominancePercent;
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

        let benchmarkData;
        if (customBenchmarkData === null) {
            // There are not custom benchmark data, generate them

            benchmarkData = generateBenchmarkData(
                benchmarkCaseCount,
                maxBenchmarkCaseLength,
                onlyBracketProbability,
                bracketDominancePercent
            );
        } else {
            // There are custom benchmark data, use them

            // slice() is used only to guarantee immutability
            //  for cases that might arise in the future
            //  (i.e., it is used "just in case")
            benchmarkData = customBenchmarkData.slice();
        }

        benchmarkData.forEach(benchmarkCase => {
            // Thanks to https://blog.abelotech.com/posts/measure-execution-time-nodejs-javascript/
            // const start = new Date(); // For Node.js and a browser
            const start = process.hrtime(); // For Node.js only
            func(benchmarkCase);
            // const end = new Date(); // For Node.js and a browser
            const end = process.hrtime(start); // For Node.js only
            // oneDataSettotalTime += (end - start); // For Node.js and a browser
            oneDataSetTotalTime += end[1] / 1000; // For Node.js only
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