/**
 * @module
 */

/**
 * @exports
 * Validate benchmark data.
 * @param {any} dataToValidate
 *  Any JavaScript value
 * @returns {boolean}
 *  If the data are valid benchmark data, `true`;
 *  otherwise, `false`
 */
export default function validateBenchmarkData(dataToValidate) {
    if (!Array.isArray(dataToValidate)) {
        return false;
    }

    // Now we are sure that `dataToValidate` is an array
    //  (but still – is it of the Array type?)

    return dataToValidate.every(x => {
        return Array.isArray(x);
    });
}