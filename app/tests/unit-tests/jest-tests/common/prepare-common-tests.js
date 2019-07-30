try {
    // Import helpers
    const ValbrstrException = require("../../../../logic/common/testable/valbrstr-exception");

    // Import units to be tested
    const TypeChecker = require("../../../../logic/common/testable/type-checker");

    describe("Testing common units", () => {
        describe(`Testing the class "${TypeChecker.name}"`, () => {
            describe(`Testing the method "${TypeChecker.isString.name}"`, () => {
                const validArgs = [null, true];
                test(`Expect the method to throw ${ValbrstrException.name} for the argument "mayBeEmpty" not a boolean value"`, () => {
                    const args = validArgs.slice();
                    args.splice(1, 1, null);
                    expect(() => TypeChecker.isString.apply(this, args))
                        .toThrow(ValbrstrException);
                });
                test("Expect the result to be a boolean value", () => {
                    const args = validArgs.slice();
                    expect([true, false])
                        .toContain(TypeChecker.isString.apply(this, args));
                });
                test("Expect the result to be 'true' for an empty string given as the argument 'data', and the argument 'mayBeEmpty' being omitted", () => {
                    const args = validArgs.slice();
                    args.splice(0, 1, "");
                    args.splice(1, 1);
                    expect(TypeChecker.isString.apply(this, args))
                        .toStrictEqual(true);
                });
                test("Expect the result to be 'true' for an empty string given as the argument 'data', and 'true' given as the argument 'mayBeEmpty'", () => {
                    const args = validArgs.slice();
                    args.splice(0, 1, "");
                    args.splice(1, 1, true);
                    expect(TypeChecker.isString.apply(this, args))
                        .toStrictEqual(true);
                });
                test("Expect the result to be 'false' for an empty string given as the argument 'data', and an 'false' given as the argument 'mayBeEmpty'", () => {
                    const args = validArgs.slice();
                    args.splice(0, 1, "");
                    args.splice(1, 1, false);
                    expect(TypeChecker.isString.apply(this, args))
                        .toStrictEqual(false);
                });
                test("Expect the result to be 'false' for a non-string given as the argument 'data'", () => {
                    const args = validArgs.slice();
                    args.splice(0, 1, null);
                    expect(TypeChecker.isString.apply(this, args))
                        .toStrictEqual(false);
                });
            });
        });
    });
} catch (e) {
    throw e;
}