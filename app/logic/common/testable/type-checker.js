/**
 * @module
 * @file A module for the type checker class.
 */

// Import helpers
const ValbrstrException = require("./valbrstr-exception");

/**
 * @exports
 * @description A class serving as a container for functions for checking types.
 */
class TypeChecker {
    /**
     * @static
     * @description Check whether something is a string or not.
     * @param {any} data 
     * @param {boolean} mayBeEmpty 
     * @return {boolean}
     *  `true` if `data` is a string;
     *  otherwise, `false`
     */
    static isString(data, mayBeEmpty = undefined) {
        if (![true, false, undefined].includes(mayBeEmpty)) {
            throw new ValbrstrException(`The second parameter must be undefined or a boolean value, but instead is: ${mayBeEmpty}`);
        }

        switch (mayBeEmpty) {
            case undefined:
                // If the argument "mayBeEmpty" is undefined
                //  and there has been passed a string,
                //  it means that it shall not matter
                //  whether the string is empty or not
                return ![false, 0, null, undefined].includes(data)
                    && !Number.isNaN(data)
                    && !!data.substring;

            case true:
                return data === "" || !!data && !!data.substring;

            case false:
                return data !== "" && !!data && !!data.substring;
        }
    }
}

module.exports = TypeChecker;