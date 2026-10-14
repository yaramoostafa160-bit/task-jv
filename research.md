JavaScript Research: Variables, Comparisons, and Data Types
1. What are the differences between let, const, and var? When should you use each one?
JavaScript has three common keywords for declaring variables. The main differences are whether a variable can be reassigned and where it is available in the code.
- Use const when you do not plan to assign a new value to the variable. It must be initialized when declared.
- Use let when you need to assign a new value later.
- var is an older way to declare variables. Its scope can extend beyond a block of code, which may cause confusing behavior. In modern JavaScript, let and const are usually preferred.
const prevents reassignment, but it does not make an object or array immutable. You can still change an object’s properties or an array’s contents.
const username = "Mona";
// username = "Ali"; // TypeError: Assignment to constant variable

let score = 10;
score = 15; // Reassignment is allowed

const user = { name: "Mona" };
user.name = "Ali"; // Allowed: the object’s property changes

if (true) {
  var oldVariable = "I can be accessed outside this block";
  let blockVariable = "I only exist inside this block";
}

console.log(oldVariable); // "I can be accessed outside this block"
// console.log(blockVariable); // ReferenceError
Console results: "I can be accessed outside this block". The blockVariable line would produce a ReferenceError if uncommented.
2. What is the difference between == and ===? Give an example where they produce different results.
The == operator compares values after JavaScript may convert one value to another type. The === operator compares both type and value without that conversion. Using === is usually clearer and helps avoid unexpected comparisons.
console.log(5 == "5");  // true
console.log(5 === "5"); // false
Console results: true, then false. With ==, JavaScript converts the string "5" to the number 5. With ===, a number and a string are different types.
3. Why does "10" + 5 return "105", while "10" - 5 returns 5?
The + operator can either add numbers or join strings. When one operand is a string, JavaScript converts the other operand to a string and joins them. The - operator performs subtraction, so JavaScript converts "10" to the number 10 first.
console.log("10" + 5); // "105"
console.log("10" - 5); // 5
Console results: "105" (a string), then 5 (a number).
4. What is the difference between undefined and null?
undefined usually means that a value has not been assigned. For example, a declared variable without an initial value is undefined. null is a value that a programmer assigns deliberately to represent an intentional absence of a value.
They are different values, so === says they are not equal.
let favoriteColor;
const selectedColor = null;

console.log(favoriteColor); // undefined
console.log(selectedColor); // null
console.log(favoriteColor === undefined); // true
console.log(selectedColor === null); // true
console.log(favoriteColor === selectedColor); // false
Console results: undefined, null, true, true, false.
5. What are truthy and falsy values? List the falsy values and give examples of truthy values.
When JavaScript needs a Boolean value, such as in an if condition, it treats values as either truthy or falsy. Falsy values behave like false; truthy values behave like true.
The falsy values are:
- false
- 0 and -0
- 0n
- "" (the empty string)
- null
- undefined
- NaN
In browsers, document.all is also a legacy falsy value, but it is unusual and should not be used in normal code.
Examples of truthy values include nonempty strings such as "hello" and "0", nonzero numbers such as 3, and all arrays and objects, including empty ones.
console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

console.log(Boolean("hello"));  // true
console.log(Boolean("0"));      // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
Console results: false, false, false, false, false, then true, true, true, true.