import isBracketStringValidCounter from "../validation/is-bracket-string-valid-counter.mjs";
import isBracketStringValidRecursion from "../validation/is-bracket-string-valid-recursion.mjs";
import isBracketStringValidShortest from "../validation/is-bracket-string-valid-shortest.mjs";
import isBracketStringValidStack from "../validation/is-bracket-string-valid-stack.mjs";
import isBracketStringValidStackList from "../validation/is-bracket-string-valid-stack-list.mjs"

const methods = new Map(Object.entries({
    "counter": isBracketStringValidCounter,
    "recursion": isBracketStringValidRecursion,
    "shortest": isBracketStringValidShortest,
    "stack": isBracketStringValidStack,
    "stack-list": isBracketStringValidStackList
}));

const actualArgs = process.argv.slice(2);
if (actualArgs.length < 2) {
    throw new Error("To little arguments provided.");
} else if (actualArgs.length > 2) {
    console.log("Warning: too many arguments provided. There will be used only the first two arguments.")
}

const methodName = actualArgs[0];
if (!Array.from(methods.keys()).includes(methodName)) {
    throw new Error("Unknown method provided.");
}

const bracketString = actualArgs[1];

const func = methods.get(methodName);

const result = func(bracketString);

console.log(result);