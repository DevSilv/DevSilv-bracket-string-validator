try {
    // Import a helper
    const { exec } = require('child_process');

    // I have tried to use "expect.extend"
    //  but I gave up since I could not understand
    //  its behavior

    describe("Integration tests for the validation module", () => {
        const mainScriptPath = "app/cli/valbrstr";
        const validArgs = ["'validate'", "'counter-method'", "'()'"];
        test("Testing the application to exit NOT successfully when run with one, valid argument", () => {
            const args = validArgs.slice();
            args.splice(1);
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null);
            });
        });
        test("Testing the application to exit NOT successfully when run with one, NOT valid argument", () => {
            const args = validArgs.slice();
            args.splice(0, 3, "'abc'");
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null);
            });
        });
        test("Testing the application to exit NOT sussessfully when run with two arguments, the first being NOT valid", () => {
            const args = validArgs.slice();
            args.splice(0, 1, "'abc'");
            args.splice(2, 1);
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null);
            });
        });
        test("Testing the application to exit NOT sussessfully when run with two arguments, the second being the valid name of a validation method", () => {
            const args = validArgs.slice();
            args.splice(1, 2, "'counter-method'");
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null);
            });
        });
        test("Testing the application to exit sussessfully when run with two arguments, the second being NOT the valid name of a validation method", () => {
            const args = validArgs.slice();
            args.splice(1, 2, "'abc'");
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .toEqual(null);
            });
        });
        test("Testing the application to exit sussessfully when run with three valid arguments", () => {
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