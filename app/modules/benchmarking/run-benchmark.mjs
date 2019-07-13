import isBracketStringValidCounter from "../validation/is-bracket-string-valid-counter.mjs";
import isBracketStringValidRecursion from "../validation/is-bracket-string-valid-recursion.mjs";
import isBracketStringValidShortest from "../validation/is-bracket-string-valid-shortest.mjs";
import isBracketStringValidStack from "../validation/is-bracket-string-valid-stack.mjs";
import isBracketStringValidStackList from "../validation/is-bracket-string-valid-stack-list.mjs";
import * as benchmarkParametersJSON from "./benchmark-parameters.json";
import generateBenchmarkData from "./benchmark-data/generate-benchmark-data.mjs";

const benchmarkedFunctions = [
    isBracketStringValidCounter,
    isBracketStringValidRecursion,
    isBracketStringValidShortest,
    isBracketStringValidStack,
    isBracketStringValidStackList
];

// Set parameters
const benchmarkCaseCount = benchmarkParametersJSON.default.benchmarkCaseCount;
const maxBenchmarkCaseLength = benchmarkParametersJSON.default.maxBenchmarkCaseLength;
const onlyBracketProbability = benchmarkParametersJSON.default.onlyBracketProbability;
const bracketDominancePercent = benchmarkParametersJSON.default.bracketDominancePercent;

const benchmarkRepeatNumber = 10;
const averageTimes = new Object();
benchmarkedFunctions.forEach(func => Object.defineProperty(averageTimes, func.name, {
    value: [],
    enumerable: true,
    writable: true
}));
for (let k = 0; k < benchmarkRepeatNumber; ++k) {
    benchmarkedFunctions.forEach(func => {
        let oneDataSetTotalTime = 0; // miliseconds

        // Generate benchmark data
        const benchmarkData = generateBenchmarkData(
            benchmarkCaseCount,
            maxBenchmarkCaseLength,
            onlyBracketProbability,
            bracketDominancePercent
        );

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

console.log(averageTimes);