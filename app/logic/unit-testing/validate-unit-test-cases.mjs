/**
 * @module
 */

/**
 * @exports
 * Validate unit test cases.
 * @param {any} dataToValidate
 *  Any JavaScript value
 * @returns {boolean}
 *  If the data are valid unit test cases, `true`;
 *  otherwise, `false`
 */
export default function validateUnitTestCases(dataToValidate) {
    if (typeof dataToValidate !== "object"
        || typeof dataToValidate === null
        || Object.keys(dataToValidate).length !== 2
        || !dataToValidate.hasOwnProperty("singleBracketTestCases")
        || !dataToValidate.hasOwnProperty("bracketListTestCases")) {
        return false;
    }

    // Now, we assume that the data to validate is a proper
    //  object with test cases. This is on the assumption
    //  that a user will not accidentally add the specified
    //  properties to another "thing" of the type `object`.
    //  This of course DOES NOT prevent from having them
    //  added intentionally for any reason; such cases should
    //  most probably be handled somehow in the future

    if (!Array.isArray(dataToValidate.singleBracketTestCases)
        || !Array.isArray(dataToValidate.bracketListTestCases)) {
        return false;
    }

    // Now, we are sure that both properties
    //  are of the type `array`

    function isDataValidTestCase(data) {
        if (!data) {
            // Filter out `undefined` and `null`
            //  in order not to have the error
            //  `TypeError: can't convert ... to object`
            return false;
        }

        return Object.keys(data).length === 2
            && data.hasOwnProperty("argument")
            && data.hasOwnProperty("expectedResult")
            && (data.expectedResult === true
                || data.expectedResult === false);
    }

    return dataToValidate.singleBracketTestCases.every(isDataValidTestCase)
        && dataToValidate.bracketListTestCases.every(isDataValidTestCase);
}