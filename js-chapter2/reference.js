// this is a short comment, as denoted with the two slashes at the beginning of the line

/* Using slashes and asterisks
like this are useful if we want
to make comments that are longer
than one line. */

// Example variable:
const message = "Hello world!"; // creates a constant called "message" (it can't be changed later)
console.log(message); // Print "Hello world!" to console (that's what we put in "message")

// Note that the following words cannot be variable names:
/*  abstract, await, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, 
    finally, float, for, function, goto, if, implements, import, in instanceof, int, interface, let, long, native, new, null, package, private, protected, public, return, 
    short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with, yield */

// These are reserved words. While not all of them are still reserved, it's best to treat them as if they are, as they are in older versions of JS. 

// Also, all lines end in a semicolon or a new line, making this possible;
console.log("Line 1"); console.log("Line 2"); /* Line 1
                                                 Line 2 */

// A block of code is denoted by curly braces:
{
    console.log("Inside block");
    console.log("Inside block 2");
}
console.log("Outside block");

// Typeof: determines the type of a Javascript data structure
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof "hello"); // string
console.log(typeof {myProperty: "myValue"}); // object
console.log(typeof [ 0, 1, 2, 3, 4, 5 ]) // object (arrays are objects in Javascript)

// typeof is a unary operator, meaning it only takes in one input.
// There are also binary operators, such as:
const answer = 2 + 2;
console.log(answer); // 4
// Once again note that if we tried to reassign answer, it won't work.
// If we would like the value of a variable to change, we should use let:
let score = 10;
console.log(score); // 10
score = score + 10; // Note: in reassignment we don't include the let statement
console.log(score); // 20

// We can use one let statement for multiple variables:
let a1 = 1, a2 = 2, a3 = 3;

// Note that constants can be CHANGED, they just can't be reassigned.
const assistantObject = { myName: "Alexa" };
assistantObject.myName = "Siri";
console.log(assistantObject.myName); // Siri

// Note: it is also possible to declare variables globally using var.
var globalVariable = "I can be seen anywhere";
// But this is rare. What are global variables?

// A global variable can be seen anywhere in the program, while a variable
// declared using "let" can only be seen in blocks.
let b = 1;
console.log(b); // 1
{
    let b = 5; // b only exists in this block
    console.log(b); // 5

} // Block ends, b no longer exists
console.log(b); // 1

{
    b = 3; // Without a let statement, b changes outside of the block.
           // This is even true if the variable hasn't been defined yet.
    console.log(b); // 3
}
console.log(b); // 3

// Also note:
{
    let inside = "inside block";
}
// inside no longer exists, and attempting to access it will result in an error.

// Naming conventions:
/*
    Variable names can contain upper and lower case letters, numbers (not as their first character),
    underscores, and dollar signs.
    
    You should avoid using _ and $ for conventional reasons. Also, it's recommended to name your
    variables in camel-case (whichIsWrittenLikeThis), as that's what Javascript's native methods
    and variables follow.
*/

// Direct assignment: primitive types
let n = 1;
n = n + 5;
// n = 6, any changes made are made directly to the number in memory.
// Assignment by reference: objects
let a = {value: "a"};
a = {value: "still a"}; // a is reassigned
let d = a;
d.value = "d";
console.log(a.value); // d - when d is modified, so is a, as both point to the same object in memory.

// Strings:
'hello'; // single quote
"hello"; // double quote
// but how do we include quotes?
"We could use whichever one isn't used in the string";
"Or we could escape them by using a backslash: \"like this\"";
"Some other escapes include \', \n (end of line), \r (carriage return), \t (tab)";

// String properties: can be accessed in a couple of ways:
"hello".length // 5
"hello"["length"] // 5
// Note that we can't change them directly.

let string = "Sample String";
// Some other properties/functions include (but aren't limited to):
string.toUpperCase();    // SAMPLE STRING
string.toLowerCase();    // sample string
string.charAt(2);        // m

// Template literals: simplify concatenation
const myName = "Sam Fruechtemeyer";
console.log(`My name is ${myName}`); // Note: this string was created using backticks.

// Symbols: primitives that don't have a literal form
const uniqueID = Symbol('each symbol contains a unique identifier');
typeof uniqueID; // 'symbol'
console.log(uniqueID); // Symbol(each symbol contains a unique identifier)
// It is possible for two variables to share the same symbol:
const symbol1 = Symbol.for("one");
const alsoSymbolOne = Symbol.for("one");

// Numbers: can be integers or floating point numbers.
1; 3.5; -7;
// Number class: can construct numbers and do stuff with them
let myNumber = new Number(100);
Number.isInteger(1) // true
// Can also be declared as octal, hex, or exponential:
    0o77; 0xff; 1e50;    2.6E-2;
//    63,  255, 1*10^50, 0.026
// Numbers have methods too, but if you want to use them directly, you need to make it clear
// that the . is not a decimal point.
// myNumber.toExponential() // 1e+2
// (100).toExponential()     // 1e+2
// (5).toString();          // "5"
// Math.PI.toFixed(4);      // 3.1416

// Arithmetic operations;
2 + 2; // 4
4 - 2; // 2
6 * 6; // 36
49 / 7; // 7
8 % 6; // 2 - modulus

// Compound assignment
myNumber // 100
myNumber += 50; // 150
myNumber *= 4; // 600
// Increment/decrement
myNumber++; // 601
myNumber--; // 600
console.log(myNumber++); // prints 600, but sets myNumber to 601
console.log(++myNumber); // sets myNumber to 602, then prints myNumber

// Infinity/NaN
2e308 // larger than Javascript's biggest number, so it's set to infinity
-2e308 // -Infinity
1/0; // Infinity
NaN // not a number, returned by things like 'hello'*5 (typeof NaN = number for some reason)
Number.isFinite(2e308) // false
Number.isNaN(NaN) // true

// Type coercion - when operands are of two different types, JavaScript will try to convert one into
// another
'4' * 6 // -> 24
'4' + 6 // -> 46 ('4' + '6')

// Conversions
Number('105') // 105
Number('ljhgjhasjdlkfhasdf') // NaN
String(105) // "105"
// parseInt(string, base)
parseInt("23", 10); // 23
parseInt("1111", 2) // 15
parseInt("ff", 16)  // 255
parseInt("123ignores all of this", 10) // 123
parseInt("2.2", 10) // 2 (ignores float)
parseFloat("2.2", 10) // 2.2

// undefined - JavaScript can't find a value for this variable
10 + undefined // NaN
// null      - no value
10 + null // 10

// booleans
Boolean('hello') // true - string isn't empty
Boolean(42) // true - number isn't zero or NaN
// the only other "falsy" values include false, null, or undefined

// Logical operands
!true // false, not true
!!3 // true (not not 3) - !! can convert a value into a boolean
true || true // or - either one is true <-> true
true && true // and - both are true <-> true
let lazyEvaluationTest = 0;
true && (lazyEvaluationTest = 5); // lazy evaluation - second part of && only evaluated if first part is true
console.log(lazyEvaluationTest); // 5
true || (lazyEvaluationTest = 1); // second part of || is evaluated 
console.log(lazyEvaluationTest); // 5

// Bitwise operators
~0b1100 // 0011 - bitwise not
~0b1010 // 0101
0b1010 | 0b1100 // 1110 - bitwise or
0b1010 & 0b1100 // 1000 - bitwise and
0b1010 ^ 0b1100 // 0110 - bitwise xor
0b0011 << 2 // 1100 - shift left 2
0b1100 >> 2 // 0011 - shift right 2

// Equality
const theBestNumber = 73;
theBestNumber ==   73  // true
theBestNumber ==  "73" // true?! == is "soft equality" and doesn't check types
theBestNumber === "73" // false, === is "hard equality" and checks types
NaN === NaN            // false - NaN is a weird edge case that isn't equal to itself! (use Number.isNaN)
16 != 12    // true, not equal
16 != '16'  // false, soft inequality
16 !== '16' // true, hard inequality
2 > 1 // true, 2 is greater than 1
1 > 2 // false
1 > 1 // false, 1 is not greater than 1
1 >= 1 // true, 1 is greater than or equal to 1 (note that this uses soft inequality)
1 < 2 // true
2 < 1 // false
1 < 1 // false
1 <= 1 // true