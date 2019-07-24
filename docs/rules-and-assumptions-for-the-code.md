# Rules and assumptions for the code

## Error handling

- Before using a built-in property or method, nowhere in the code it is checked whether it exists. This is for simplicity and may be changed in the future.
- Exceptions are thrown at the highest level that it is meaningful for them. The assumption is, if a variable would appear to be invalid, it is better not to mess up an additional level with it.
- Exceptions are catched at the lowest level that is is meaningful for them. The assumption is, there is no need to mess up an additional level with it.

<!-- ??? It would be meaningful to throw an exception at a given level e.g. when a variable is used at that level in a way different from being an argument to a function (it also may be used as an argument, but that does not matter now). ??? -->