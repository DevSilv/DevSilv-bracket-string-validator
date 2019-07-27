# Rules and assumptions for the code

## JavaScript code

- A file is considered to contain one and only one module. A module is considered to be contained in one and only one file.

## Error handling

- Before using a built-in property or method, nowhere in the code it is checked whether it exists. This is for simplicity and may be changed in the future.
- Exceptions are thrown at the highest level that it is meaningful for them. The assumption is, if a variable would appear to be invalid, it is better not to mess up an additional level with it.
- Exceptions are catched at the lowest level that is is meaningful for them. The assumption is, there is no need to mess up an additional level with it.

## Unit testing

A function/method must do at least one of the following things to be considered testable in terms of unit-testing in this project:
- throw exceptions;
- return a value.

For a function not being a method, there are checked three types of things:
1. whether the function throws relevant exceptions for relevant arguments;
2. whether the function returns values of relevant types for relevant arguments;
3. whether the function returns relevant values for relevant arguments.

For a function being a method, there are checked the above things and one more:
1. whether the method throws relevant exceptions for relevant states of its class; this is checked only if the class has a state.