try {
    // Import a helper
    const { exec } = require('child_process');

    // I have tried to use "expect.extend"
    //  but I gave up since I could not understand
    //  its behavior

    describe("General integration tests", () => {
        const mainScriptPath = "app/cli/valbrstr";
        const validArgs = [];
        expect.extend({
            toEqual(actualResult, expectedResult, commandToExecute, err, stdout, stderr) {
                let pass = this.equals(actualResult, expectedResult);
                if (pass) {
                    return {
                        message: () => `\nExpected: ${expectedResult}\nRelation: deep equality\nReceived: ${actualResult}\nAdditional information:\n${commandToExecute}\nERR: ${err}\nSTDOUT: ${stdout}\nSTDERR: ${stderr}`,
                        pass: true
                    };
                } else {
                    return {
                        message: () => `\nExpected: not ${expectedResult}\nRelation: deep equality\nReceived: ${actualResult}\nAdditional information:\n${commandToExecute}\nERR: ${err}\nSTDOUT: ${stdout}\nSTDERR: ${stderr}`,
                        pass: false
                    };
                }
            }
        });
        test("Testing the application to exit NOT successfully when run without arguments", () => {
            const args = validArgs.slice();
            const commandToExecute = [mainScriptPath, ...args].join(" ");
            exec(commandToExecute, (err, stdout, stderr) => {
                expect(err)
                    .not.toEqual(null, commandToExecute, err, stdout, stderr);
            });
        });
    });

} catch (e) {
    throw e;
}