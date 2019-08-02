try {
    // Import a helper
    const ValbrstrException = require("../../../../logic/common/testable/valbrstr-exception");

    // Import units to be tested
    const { validateUnitTestCases } = require("../../../../logic/unit-testing-module/testable/validate-unit-test-cases");
    const { getUnitTestCasesFromFile } = require("../../../../logic/unit-testing-module/testable/get-unit-test-cases-from-file");

    describe("Testing units of the unit-testing module", () => {
        describe(`Testing the function ${getUnitTestCasesFromFile.name}`, () => {
            // It demands the tests to be run from within the project's root directory
            const validArgs = ["app/tests/unit-tests/jest-tests/unit-testing-module/mocks/mock-filesystem/mock-file-valid-unit-test-cases.json"];
            test(`Expect the function to throw ${ValbrstrException.name} for the argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => getUnitTestCasesFromFile.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the argument an empty string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "");
                expect(() => getUnitTestCasesFromFile.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the argument not a valid filesystem path`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "/a");
                expect(() => getUnitTestCasesFromFile.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be equal to a file's content for a file with a valid content", () => {
                const args = validArgs.slice();
                const result = getUnitTestCasesFromFile.apply(this, args);
                const temp = {
                    singleBracketTestCases: [
                        {
                            argument: "",
                            expectedResult: true
                        }
                    ], bracketListTestCases: [
                        {
                            argument: "",
                            expectedResult: false
                        }
                    ]
                };
                expect(result).toStrictEqual(temp);
            });
            test(`Expect the result to be "null" for a file with an invalid content`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, "app/tests/unit-tests/jest-tests/unit-testing-module/mocks/mock-filesystem/mock-file-invalid-unit-test-cases.json");
                const result = getUnitTestCasesFromFile.apply(this, args);
                expect(result).toBeNull();
            });
        });
        describe(`Testing the function ${validateUnitTestCases.name}`, () => {
            const validArgs = [{
                singleBracketTestCases: [
                    {
                        argument: "",
                        expectedResult: true
                    }
                ], bracketListTestCases: [
                    {
                        argument: "",
                        expectedResult: false
                    }
                ]
            }];
            test("Expect the result to be true for valid data", () => {
                const args = validArgs.slice();
                const result = validateUnitTestCases.apply(this, args);
                expect(result).toBe(true);
            });
            test("Expect the result to be false for invalid data", () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                const result = validateUnitTestCases.apply(this, args);
                expect(result).toBe(false);
            });
        });
    });
} catch (e) {
    throw e;
}