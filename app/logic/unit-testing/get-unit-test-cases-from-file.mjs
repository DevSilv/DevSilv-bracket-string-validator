import fs from "fs";
import validateUnitTestCases from "./validate-unit-test-cases.mjs";

// `path` is expected to point to a JSON file
// Returns the content of the file pointed to by `path`
//  if the content is valid, `null` otherwise
export default function getUnitTestCasesFromFile(path) {
    // Get the file content
    const JSONFileContent = fs.readFileSync(path);
    const fileContent = JSON.parse(JSONFileContent);

    // Validate the content
    const valid = validateUnitTestCases(fileContent);

    // Output the result
    if (valid) {
        return fileContent;
    } else {
        return null;
    }
}