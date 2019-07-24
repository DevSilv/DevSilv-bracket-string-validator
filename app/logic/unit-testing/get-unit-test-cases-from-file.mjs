/**
 * @module
 */

import fs from "fs";
import validateUnitTestCases from "./validate-unit-test-cases.mjs";

/**
 * @exports
 * @requires fs
 * @requires validateUnitTestCases
 * Get benchmark data from a file.
 * @param {string} path
 *  May not be an empty string; a filesystem path
 *  that points to a JSON file
 * @returns If the content of the file pointed to
 *  by the parameter `path` is valid benchmark data,
 *  this content (of the type String, may be empty);
 *  otherwise, `null`
 */
export default function getUnitTestCasesFromFile(path) {
    // Get the file content
    const JSONFileContent = fs.readFileSync(path);
    const fileContent = JSON.parse(JSONFileContent);

    // Validate the content
    const valid = validateUnitTestCases(fileContent);

    if (valid) {
        return fileContent;
    } else {
        return null;
    }
}