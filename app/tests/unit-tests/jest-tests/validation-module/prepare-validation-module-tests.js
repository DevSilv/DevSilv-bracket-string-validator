try {
    // Import a helper
    const ValbrstrException = require("../../../../logic/common/testable/valbrstr-exception");

    // Import units to be tested
    const { isBracketStringValidCounter } = require("../../../../logic/validation-module/testable/is-bracket-string-valid-counter");
    const { isBracketStringValidRecursion } = require("../../../../logic/validation-module/testable/is-bracket-string-valid-recursion");
    const { isBracketStringValidShortest } = require("../../../../logic/validation-module/testable/is-bracket-string-valid-shortest");
    const { isBracketStringValidStack } = require("../../../../logic/validation-module/testable/is-bracket-string-valid-stack");
    const { isBracketStringValidStackList } = require("../../../../logic/validation-module/testable/is-bracket-string-valid-stack-list");

    describe("Testing units within the validation module", () => {
        describe(`Testing the function ${isBracketStringValidCounter.name}`, () => {
            const validArgs = ["()", "(", ")"];
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => isBracketStringValidCounter.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                expect(() => isBracketStringValidCounter.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                expect(() => isBracketStringValidCounter.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                expect(() => isBracketStringValidCounter.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                expect(() => isBracketStringValidCounter.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidCounter.apply(this, args);
                expect(result).toBe(true);
            });
            test("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidCounter.apply(this, args);
                expect(result).toBe(false);
            });
        });
        describe(`Testing the function ${isBracketStringValidRecursion.name}`, () => {
            const validArgs = ["()", "(", ")"];
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => isBracketStringValidRecursion.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                expect(() => isBracketStringValidRecursion.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                expect(() => isBracketStringValidRecursion.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                expect(() => isBracketStringValidRecursion.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                expect(() => isBracketStringValidRecursion.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidRecursion.apply(this, args);
                expect(result).toBe(true);
            });
            test("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidRecursion.apply(this, args);
                expect(result).toBe(false);
            });
        });
        describe(`Testing the function ${isBracketStringValidShortest.name}`, () => {
            const validArgs = ["()", "(", ")"];
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => isBracketStringValidShortest.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                expect(() => isBracketStringValidShortest.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                expect(() => isBracketStringValidShortest.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                expect(() => isBracketStringValidShortest.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                expect(() => isBracketStringValidShortest.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidShortest.apply(this, args);
                expect(result).toBe(true);
            });
            test("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidShortest.apply(this, args);
                expect(result).toBe(false);
            });
        });
        describe(`Testing the function ${isBracketStringValidStack.name}`, () => {
            const validArgs = ["()", "(", ")"];
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => isBracketStringValidStack.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                expect(() => isBracketStringValidStack.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                expect(() => isBracketStringValidStack.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                expect(() => isBracketStringValidStack.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                expect(() => isBracketStringValidStack.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidStack.apply(this, args);
                expect(result).toBe(true);
            });
            test("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidStack.apply(this, args);
                expect(result).toBe(false);
            });
        });
        describe(`Testing the function ${isBracketStringValidStackList.name}`, () => {
            const validArgs = ["()", ["(", "["], [")", "]"]];
            test(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not an array`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument of length 0`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, []);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument containing elements not strings`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, [null]);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument containing elements not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, ["(("]);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument not an array`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument of length 0`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, []);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument containing elements not strings`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, [null]);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the third argument containing elements not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, ["(("]);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test(`Expect the function to throw ${ValbrstrException.name} for the second argument not of the same length as the third one`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, ["("]);
                expect(() => isBracketStringValidStackList.apply(this, args))
                    .toThrow(ValbrstrException);
            });
            test("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidStackList.apply(this, args);
                expect(result).toBe(true);
            });
            test("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidStackList.apply(this, args);
                expect(result).toBe(false);
            });
        });
    });
} catch (e) {
    throw e;
}