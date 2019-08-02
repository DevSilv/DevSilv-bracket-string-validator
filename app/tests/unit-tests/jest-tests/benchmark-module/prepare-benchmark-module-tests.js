try {
    // Import helpers
    const ValbrstrException = require("../../../../logic/common/testable/valbrstr-exception");
    const TypeChecker = require("../../../../logic/common/testable/type-checker");

    // Import units to be tested
    const BenchmarkCaseRandomizer = require("../../../../logic/benchmark-module/testable/benchmark-case-randomizer");
    const { generateBenchmarkCase } = require("../../../../logic/benchmark-module/testable/generate-benchmark-case");
    const { generateBenchmarkData } = require("../../../../logic/benchmark-module/testable/generate-benchmark-data");
    const { getBenchmarkDataFromFile } = require("../../../../logic/benchmark-module/testable/get-benchmark-data-from-file");
    const { validateBenchmarkData } = require("../../../../logic/benchmark-module/testable/validate-benchmark-data");

    describe("Testing units within the benchmark module", () => {
        describe(`Testing the class "${BenchmarkCaseRandomizer.name}"`, () => {
            describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength.name}"`, () => {
                test(`Expect the method to throw ${ValbrstrException.name} for an argument less than 0`, () => {
                    const argument = -1;
                    expect(() => BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength(argument))
                        .toThrow(ValbrstrException);
                });
                test("Expect the result to be of the type Number", () => {
                    const argument = 0;
                    const result = BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength(argument);
                    expect(typeof result).toBe("number");
                });
                test("Expect the result to be less than or equal to the argument", () => {
                    const argument = 0;
                    const result = BenchmarkCaseRandomizer.getRandomBenchmarkCaseLength(argument);
                    expect(result).toBeLessThanOrEqual(argument);
                });
            });

            describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomOnlyBracketProbability.name}"`, () => {
                test("Expect the result to be of the type Number", () => {
                    const result = BenchmarkCaseRandomizer.getRandomOnlyBracketProbability();
                    expect(typeof result).toBe("number");
                });
                test("Expect the result to be greater than or equal to 0", () => {
                    const result = BenchmarkCaseRandomizer.getRandomOnlyBracketProbability();
                    expect(result).toBeGreaterThanOrEqual(0);
                });
            });

            describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomBracketProbability.name}"`, () => {
                test("Expect the result to be of the type Number", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketProbability();
                    expect(typeof result).toBe("number");
                });
                test("Expect the result to be greater than or equal to 0", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketProbability();
                    expect(result).toBeGreaterThanOrEqual(0);
                });
            });

            describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomBracketDominancePercent.name}"`, () => {
                test("Expect the result to be of the type Number", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketDominancePercent();
                    expect(typeof result).toBe("number");
                });
                test("Expect the result to be greater than or equal to 0", () => {
                    const result = BenchmarkCaseRandomizer.getRandomBracketDominancePercent();
                    expect(result).toBeGreaterThanOrEqual(0);
                });
            });

            describe(`Testing the method "${BenchmarkCaseRandomizer.getRandomCharacter.name}"`, () => {
                test("Expect the result to be a string", () => {
                    const result = BenchmarkCaseRandomizer.getRandomCharacter();
                    expect(TypeChecker.isString(result))
                        .toStrictEqual(true);
                });
                test("Expect the result's length to be 1 character long", () => {
                    const result = BenchmarkCaseRandomizer.getRandomCharacter();
                    expect(result).toHaveLength(1);
                });
            });
        });

        describe(`Testing the function "${generateBenchmarkCase.name}"`, () => {
            const validArgs = [0, 0.0, 0, BenchmarkCaseRandomizer];
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not of the type Number`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not an integer`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, 0.0);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument less than 0`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, -1);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not of the type Number`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not a floating-point number`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, 1);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument less than 0.0`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, -1.0);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument greater than 1.0`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, 1.2);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not of the type Number`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not an integer`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, 1.0);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument less than 0`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, -1);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument greater than 100`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, 102);
                expect(() => generateBenchmarkCase.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be a string", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkCase.apply(this, args);
                expect(TypeChecker.isString(result))
                    .toStrictEqual(true);
            });
            test("Expect the result's length to be less or equal to the first argument", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkCase.apply(this, args);
                expect(result.length).toBeLessThanOrEqual(args[0]);
            });
        });

        describe(`Testing the function "${generateBenchmarkData.name}"`, () => {
            const validArgs = [0, 0, 0.0, 0];
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not an integer`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, 1.0);
                // According to my current knowledge, this is not possible in JavaScript
                //  if the number from the beginning was NOT a string;
                //  e.g., 1 and 1.0, if both of the type Number, seem to be treated the same
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument less than 0`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, -1);
                expect(() => generateBenchmarkData.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be of the type Array", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkData.apply(this, args);
                expect(Array.isArray(result)).toBe(true);
            });
            test("Expect the result's length to be less or equal to the first argument", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkData.apply(this, args);
                expect(result.length).toBeLessThanOrEqual(args[0]);
            });
            test("Expect all of the result's elements to be a string", () => {
                const args = validArgs.slice();
                const result = generateBenchmarkData.apply(this, args);
                expect(result.every(x => TypeChecker.isString(x))).toBe(true);
            });
        });

        describe(`Testing the function "${getBenchmarkDataFromFile.name}"`, () => {
            // It demands the tests to be run from within the project's root directory
            const validArgs = ["app/tests/unit-tests/jest-tests/benchmark-module/mocks/mock-filesystem/mock-file-valid-benchmark-data.json"];
            test(`Expect the function to throw ${ValbrstrException.name} for the argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => getBenchmarkDataFromFile.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the argument an empty string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "");
                expect(() => getBenchmarkDataFromFile.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the argument not a valid filesystem path`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "/a");
                expect(() => getBenchmarkDataFromFile.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be equal to a file's content for a file with a valid content", () => {
                const args = validArgs.slice();
                const result = getBenchmarkDataFromFile.apply(this, args);
                expect(result).toStrictEqual([["A valid content of the mock-file.json"]]);
            });
            test(`Expect the result to be "null" for a file with an invalid content`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "app/tests/unit-tests/jest-tests/benchmark-module/mocks/mock-filesystem/mock-file-invalid-benchmark-data.json");
                const result = getBenchmarkDataFromFile.apply(this, args);
                expect(result).toBeNull();
            });
        });

        describe(`Testing the function "${validateBenchmarkData.name}"`, () => {
            const validArgs = [[[]]];
            test("Expect the result to be true for valid data", () => {
                const args = validArgs.slice();
                const result = validateBenchmarkData.apply(this, args);
                expect(result).toBe(true);
            });
            test("Expect the result to be false for invalid data", () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                const result = validateBenchmarkData.apply(this, args);
                expect(result).toBe(false);
            });
        });
    });
} catch (e) {
    throw e;
}