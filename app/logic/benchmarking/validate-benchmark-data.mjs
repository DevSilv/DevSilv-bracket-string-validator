// `dataToValidate` is expected to be a JavaScript array,
//  but in fact may be anything
// The expected value of `dataToValidate`:
//  [ // `benchmarkRepeatNumber` elements, each denoting a set of benchmark cases
//      [ // `benchmarkCaseCount` elements, each denoting a benchmark case
//          <value>,
//          <value>,
//          ...
//      ],
//      ...
//  ]
// Returns `true` if the data are valid
//  and `false` otherwise
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