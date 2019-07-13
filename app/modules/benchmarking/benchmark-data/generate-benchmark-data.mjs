import generateBenchmarkCase from "./generate-benchmark-case.mjs"

function generateBenchmarkData(
    benchmarkCaseCount,
    maxBenchmarkCaseLength,
    onlyBracketProbability,
    bracketDominancePercent
) {
    const benchmarkData = new Array();

    for (let i = 0; i < benchmarkCaseCount; ++i) {
        benchmarkData.push(
            generateBenchmarkCase(
                maxBenchmarkCaseLength,
                onlyBracketProbability,
                bracketDominancePercent
            )
        );
    }

    return benchmarkData;
}

export default generateBenchmarkData;