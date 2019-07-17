import fs from "fs";
import validateBenchmarkData from "./validate-benchmark-data.mjs";

// `path` is expected to point to a JSON file
// Returns the content of the file pointed to by `path`
//  if the content is valid, `null` otherwise
export default function getBenchmarkDataFromFile(path) {
    // Get the file content
    const JSONFileContent = fs.readFileSync(path);
    const fileContent = JSON.parse(JSONFileContent);

    // Validate the content
    const valid = validateBenchmarkData(fileContent);

    // Output the result
    if (valid) {
        return fileContent;
    } else {
        return null;
    }
}