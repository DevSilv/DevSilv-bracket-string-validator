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
    static isString(data, mayBeEmpty = true) {
        if (mayBeEmpty !== true && mayBeEmpty !== false) {
            throw new ValbrstrException(`The second parameter must be a boolean value, but instead is: ${mayBeEmpty}`);
        }

        if (data === "") {
            return mayBeEmpty === false ? false : true;
        }

        return !!data && !!data.substring;
    }
}

module.exports = TypeChecker;