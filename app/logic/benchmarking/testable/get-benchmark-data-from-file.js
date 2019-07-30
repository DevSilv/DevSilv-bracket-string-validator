/**
 * @module
 * @file A module for getting benchmark data from a file.
 */

// Import helpers
const fs = require("fs");
const { validateBenchmarkData } = require("./validate-benchmark-data");
const ValbrstrException = require("../../common/testable/valbrstr-exception");
const TypeChecker = require("../../common/testable/type-checker");

/**
 * @exports
 * @requires fs
 * @requires validateBenchmarkData
 * @requires ValbrstrException
 * Get benchmark data from a file.
 * @param {string} path
 *  May not be an empty string; a filesystem path
 *  that points to a JSON file
 * @returns If the content of the file pointed to
 *  by the parameter `path` is valid benchmark data,
 *  this content (a string, may be empty);
 *  otherwise, `null`
 */
function getBenchmarkDataFromFile(path) {
    if (!path || !TypeChecker.isString(path, true)) {
        // This check is not necessary for this function's logic,
        //  but for the next check to be valid
        throw new ValbrstrException(`The path should be a string, but now is: ${typeof path}`);
    }

    if (path.length === 0) {
        throw new ValbrstrException(`The path's length should be greater than 0, but now is: ${path.length}`);
    }

    if (!fs.existsSync(path)) {
        // Necessary since "readFileSync"'s documentation does not mention
        //  whether it returns/throws any error in case of an invalid path
        throw new ValbrstrException(`The argument should be a valid filesystem path, but now is: ${path}`);
    }

    // Get the file content
    const JSONFileContent = fs.readFileSync(path);
    const fileContent = JSON.parse(JSONFileContent);

    // Validate the content
    const valid = validateBenchmarkData(fileContent);

    if (valid) {
        return fileContent;
    } else {
        return null;
    }
}

exports.getBenchmarkDataFromFile = getBenchmarkDataFromFile;