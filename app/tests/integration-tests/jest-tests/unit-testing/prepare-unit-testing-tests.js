try {
    // Import a helper
    const { exec } = require('child_process');

    // I have tried to use "expect.extend"
    //  but I gave up since I could not understand
    //  its behavior

    describe("Integration tests for the unit-testing module", () => {
        const mainScriptPath = "app/cli/valbrstr";
        const validArgs = ["'run-unit-tests'", "'./app/tests/integration-tests/jest-tests/unit-testing/mocks/mock-filesystem/mock-file-valid-unit-test-cases.json'"];
        test("Testing the application to exit NOT successfully when run with one, NOT valid argument", () => {
            const args = validArgs.slice();
            args.splice(0, 2, "'abc'");
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null);
            });
        });
        test("Testing the application to exit successfully when run with one, valid argument", () => {
            const args = validArgs.slice();
            args.splice(1);
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .toEqual(null);
            });
        });
        test("Testing the application to exit NOT sussessfully when run with two arguments, the first being NOT valid", () => {
            const args = validArgs.slice();
            args.splice(0, 1, "'abc'");
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null);
            });
        });
        test("Testing the application to exit NOT successfully when run with two arguments, the second being NOT a valid filesystem path", () => {
            const args = validArgs.slice();
            args.splice(1, 1, "'abc'");
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null);
            });
        });
        test("Testing the application to exit successfully when run with two valid arguments", () => {
            const args = validArgs.slice();
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .toEqual(null);
            });
        });
    });

} catch (e) {
    throw e;
}