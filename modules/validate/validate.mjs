import isBracketStringValidCounter from "../src/is-bracket-string-valid-counter.mjs";
import isBracketStringValidRecursion from "../src/is-bracket-string-valid-recursion.mjs";
import isBracketStringValidShortest from "../src/is-bracket-string-valid-shortest.mjs";
import isBracketStringValidStack from "../src/is-bracket-string-valid-stack.mjs";
import isBracketStringValidStackList from "../src/is-bracket-string-valid-stack-list.mjs"

const methods = new Map(Object.entries({
    "counter": isBracketStringValidCounter,
    "recursion": isBracketStringValidRecursion,
    "shortest": isBracketStringValidShortest,
    "stack": isBracketStringValidStack,
    "stack-list": isBracketStringValidStackList
}));

const actualArgs = process.argv.slice(2);
if (actualArgs.length < 2) {
    throw new Error("To little arguments provided. Exiting");
} else if (actualArgs.length > 2) {
    console.log("Warning: too many arguments provided. there will be used only the first two arguments.")
}

const method = actualArgs[0];
if (!Array.from(methods.keys()).includes(method)) {
    throw new Error("Unknown method provided. Exiting");
}

const bracketString = actualArgs[1];

const func = methods.get(method);

const result = func(bracketString);

console.log(result);