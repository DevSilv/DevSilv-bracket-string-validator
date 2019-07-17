// `dataToValidate` is expected to be a JavaScript array,
//  but in fact may be anything
// The expected value of `dataToValidate`:
//  [
//      {
//          "argument": <value>,
//          "expectedResult": true/false
//      },
//      {
//          "argument": <value>,
//          "expectedResult": true/false
//      }.
//      ...
//  ]
// Return `true` if the data are valid
//  and `false` otherwise
export default function validateUnitTestCases(dataToValidate) {
    if (Object.keys(dataToValidate).length !== 2
        || !dataToValidate.hasOwnProperty("singleBracketTestCases")
        || !dataToValidate.hasOwnProperty("bracketListTestCases")) {
        return false;
    }

    // Now, we assume that `dataToValidate` is a "proper"
    //  object. This is on the assumption that a user
    //  will not accidentally add the specified properties
    //  to another "thing" of type "object". This of course
    //  DOES NOT prevent from having them added intentionally
    //  for any reason; such cases should most probably
    //  be handled somehow in the future.

    if (!Array.isArray(dataToValidate.singleBracketTestCases)
        || !Array.isArray(dataToValidate.bracketListTestCases)) {
        return false;
    }

    // Now, we are sure that `dataToValidate.singleBracketTestCases`
    //  and `dataToValidate.bracketListTestCases` are Arrays

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