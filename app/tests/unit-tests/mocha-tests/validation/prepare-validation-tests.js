try {
    // Import helpers
    const ValbrstrException = require("../../../../logic/common/testable/valbrstr-exception");
    const mocha = require("mocha");
    const assert = require("assert");

    // Import units to be tested
    const { isBracketStringValidCounter } = require("../../../../logic/validation/testable/is-bracket-string-valid-counter");
    const { isBracketStringValidRecursion } = require("../../../../logic/validation/testable/is-bracket-string-valid-recursion");
    const { isBracketStringValidShortest } = require("../../../../logic/validation/testable/is-bracket-string-valid-shortest");
    const { isBracketStringValidStack } = require("../../../../logic/validation/testable/is-bracket-string-valid-stack");
    const { isBracketStringValidStackList } = require("../../../../logic/validation/testable/is-bracket-string-valid-stack-list");

    mocha.describe("Testing validation units", () => {
        mocha.describe(`Testing the function ${isBracketStringValidCounter.name}`, () => {
            const validArgs = ["()", "(", ")"];
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                assert.throws(() => isBracketStringValidCounter.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                assert.throws(() => isBracketStringValidCounter.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                assert.throws(() => isBracketStringValidCounter.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                assert.throws(() => isBracketStringValidCounter.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                assert.throws(() => isBracketStringValidCounter.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidCounter.apply(this, args);
                assert.equal(result, true);
            });
            mocha.it("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidCounter.apply(this, args);
                assert.equal(result, false);
            });
        });
        mocha.describe(`Testing the function ${isBracketStringValidRecursion.name}`, () => {
            const validArgs = ["()", "(", ")"];
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                assert.throws(() => isBracketStringValidRecursion.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                assert.throws(() => isBracketStringValidRecursion.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                assert.throws(() => isBracketStringValidRecursion.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                assert.throws(() => isBracketStringValidRecursion.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                assert.throws(() => isBracketStringValidRecursion.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidRecursion.apply(this, args);
                assert.equal(result, true);
            });
            mocha.it("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidRecursion.apply(this, args);
                assert.equal(result, false);
            });
        });
        mocha.describe(`Testing the function ${isBracketStringValidShortest.name}`, () => {
            const validArgs = ["()", "(", ")"];
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                assert.throws(() => isBracketStringValidShortest.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                assert.throws(() => isBracketStringValidShortest.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                assert.throws(() => isBracketStringValidShortest.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                assert.throws(() => isBracketStringValidShortest.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                assert.throws(() => isBracketStringValidShortest.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidShortest.apply(this, args);
                assert.equal(result, true);
            });
            mocha.it("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidShortest.apply(this, args);
                assert.equal(result, false);
            });
        });
        mocha.describe(`Testing the function ${isBracketStringValidStack.name}`, () => {
            const validArgs = ["()", "(", ")"];
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                assert.throws(() => isBracketStringValidStack.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                assert.throws(() => isBracketStringValidStack.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, "((");
                assert.throws(() => isBracketStringValidStack.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                assert.throws(() => isBracketStringValidStack.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, "))");
                assert.throws(() => isBracketStringValidStack.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidStack.apply(this, args);
                assert.equal(result, true);
            });
            mocha.it("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidStack.apply(this, args);
                assert.equal(result, false);
            });
        });
        mocha.describe(`Testing the function ${isBracketStringValidStackList.name}`, () => {
            const validArgs = ["()", ["(", "["], [")", "]"]];
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the first argument not a string`, () => {
                const args = validArgs.slice();
                args.splice(0, 1, null);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not an array`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, null);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument of length 0`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, []);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument containing elements not strings`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, [null]);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument containing elements not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, ["(("]);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument not an array`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, null);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument of length 0`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, []);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument containing elements not strings`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, [null]);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the third argument containing elements not of length 1`, () => {
                const args = validArgs.slice();
                args.splice(2, 1, ["(("]);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it(`Expect the function to throw ${ValbrstrException.name} for the second argument not of the same length as the third one`, () => {
                const args = validArgs.slice();
                args.splice(1, 1, ["("]);
                assert.throws(() => isBracketStringValidStackList.apply(this, args),
                    ValbrstrException);
            });
            mocha.it("Expect the result to be 'true' for a valid bracket string", () => {
                const args = validArgs.slice();
                const result = isBracketStringValidStackList.apply(this, args);
                assert.equal(result, true);
            });
            mocha.it("Expect the result to be 'false' for an invalid bracket string", () => {
                const args = validArgs.slice();
                args.splice(0, 1, ")(");
                const result = isBracketStringValidStackList.apply(this, args);
                assert.equal(result, false);
            });
        });
    });
} catch (e) {
    throw e;
}