try {
    // Import helpers
    const ValbrstrException = require("../../../../logic/common/testable/valbrstr-exception");
    const mocha = require("mocha");
    const assert = require("assert");

    // Import units to be tested
    const BenchmarkCaseRandomizer = require("../../../../logic/benchmarking/testable/benchmark-case-randomizer");
    const { generateBenchmarkCase } = require("../../../../logic/benchmarking/testable/generate-benchmark-case");
    const { generateBenchmarkData } = require("../../../../logic/benchmarking/testable/generate-benchmark-data");
    const { getBenchmarkDataFromFile } = require("../../../../logic/benchmarking/testable/get-benchmark-data-from-file");
    const { validateBenchmarkData } = require("../../../../logic/benchmarking/testable/validate-benchmark-data");

    mocha.describe("Testing benchmarking units", () => {
        mocha.describe(`Testing the class "${BenchmarkCaseRandomizer.name}"`, () => {
            mocha.describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength.name}"`, () => {
                const validArgument = 0;
                mocha.it(`Should throw ${ValbrstrException.name} for an argument less than 0`, () => {
                    const argument = -1;
                    assert.throws(() => BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength(argument),
                        ValbrstrException);
                });
                mocha.it("Should return a value of the type Number", () => {
                    const argument = validArgument;
                    const result = BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength(argument);
                    assert.equal(typeof result, "number");
                });
                mocha.it("Should return a value less than or equal to the argument", () => {
                    const argument = validArgument;
                    const result = BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength(argument);
                    assert.equal(result <= argument, true);
                });
            });

            mocha.describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomOnlyBracketProbability.name}"`, () => {
                mocha.it("Should return a value of the type Number", () => {
                    const result = BenchmarkCaseRandomizer.getRandomOnlyBracketProbability();
                    assert.equal(typeof result, "number");
                });
                mocha.it("Should return a value greater than or equal to 0", () => {
                    const result = BenchmarkCaseRandomizer.getRandomOnlyBracketProbability();
                    assert.equal(result >= 0, true);
                });
            });

            mocha.describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomBracketProbability.name}"`, () => {
                mocha.it("Should return a value of the type Number", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketProbability();
                    assert.equal(typeof result, "number");
                });
                mocha.it("Should return a value greater than or equal to 0", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketProbability();
                    assert.equal(result >= 0, true);
                });
            });

            mocha.describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomBracketDominancePercent.name}"`, () => {
                mocha.it("Should return a value of the type Number", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketDominancePercent();
                    assert.equal(typeof result, "number");
                });
                mocha.it("Should return a value greater than or equal to 0", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketDominancePercent();
                    assert.equal(result >= 0, true);
                });
            });

            mocha.describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomCharacter.name}"`, () => {
                mocha.it("Should return a string", () => {
                    const result = BenchmarkCaseRandomizer.getRandomCharacter();
                    assert(result.substring);
                });
                mocha.it("Should return a value of length 1", () => {
                    const result = BenchmarkCaseRandomizer.getRandomCharacter();
                    assert.equal(result.length, 1);
                });
            });
        });

        mocha.describe(`Testing the function "${generateBenchmarkCase.name}"`, () => {
            const validArgs = [0, 0.0, 0, BenchmarkCaseRandomizer];
            mocha.it(`Should throw ${ValbrstrException.name} for the first argument not of the type Number`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the first argument not an integer`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, 0.0);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the first argument less than 0`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, -1);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the second argument not of the type Number`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the second argument not a floating-point number`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, 1);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the second argument less than 0.0`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, -1.0);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the second argument greater than 1.0`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, 1.2);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the third argument not of the type Number`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the third argument not an integer`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, 1.0);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the third argument less than 0`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, -1);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the first argument greater than 100`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, 102);
                assert.throws(() => generateBenchmarkCase.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Should return a string", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkCase.apply(this, args);
                assert(result.substring);
            });
            mocha.it("Should return a value of length less or equal to the first argument", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkCase.apply(this, args);
                assert.equal(result.length <= args[0], true);
            });
        });

        mocha.describe(`Testing the function "${generateBenchmarkData.name}"`, () => {
            const validArgs = [0, 0, 0.0, 0];
            mocha.it(`Should throw ${ValbrstrException.name} for the first argument not an integer`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, 1.0);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the first argument less than 0`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, -1);
                assert.throws(() => generateBenchmarkData.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Should return a value of the type Array", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkData.apply(this, args);
                assert.equal(Array.isArray(result), true);
            });
            mocha.it("Should return a value of length less or equal to the first argument", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkData.apply(this, args);
                assert.equal(result.length <= args[0], true);
            });
            mocha.it("Should return a value with all of the elements being strings", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkData.apply(this, args);
                assert.equal(result.every(x => x.substring), true);
            });
        });

        mocha.describe(`Testing the function "${getBenchmarkDataFromFile.name}"`, () => {
            // It demands the tests to be run from within the project's root directory
            const validArgs = ["app/tests/unit-tests/mocha-tests/benchmarking/mocks/mock-filesystem/mock-file-valid-benchmark-data.json"];
            mocha.it(`Should throw ${ValbrstrException.name} for the argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                assert.throws(() => getBenchmarkDataFromFile.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the argument an empty string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "");
                assert.throws(() => getBenchmarkDataFromFile.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Should throw ${ValbrstrException.name} for the argument not a valid filesystem path`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "/a");
                assert.throws(() => getBenchmarkDataFromFile.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Should return a value equal to the file's content for a file with a valid content", () => {
                const args = validArgs.slice();
                const result = getBenchmarkDataFromFile.apply(this, args);
                // JSON.stringify is used to bypass some weird Jest output
                assert.deepEqual(result, [["A valid content of the mock-file.json"]]);
            });
            mocha.it("Should return 'null' for a file with an invalid content", () => {
                const args = validArgs.slice();
                args.splice(0, 1, "app/tests/unit-tests/mocha-tests/benchmarking/mocks/mock-filesystem/mock-file-invalid-benchmark-data.json");
                const result = getBenchmarkDataFromFile.apply(this, args);
                assert.equal(result, null);
            });
        });

        mocha.describe(`Testing the function "${validateBenchmarkData.name}"`, () => {
            const validArgs = [[[]]];
            mocha.it("Should return 'true' for valid data", () => {
                const args = validArgs.slice();
                const result = validateBenchmarkData.apply(this, args);
                assert.equal(result, true);
            });
            mocha.it("Should return 'false' for invalid data", () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                const result = validateBenchmarkData.apply(this, args);
                assert.equal(result, false);
            });
        });
    });
} catch (e) {
    throw e;
}