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

// Arrays - ordered list of values
const myArray = [1, 2, 3];
const emptyArray = [];
const anotherEmptyArray = new Array();
typeof myArray // object
myArray[0] // 1
myArray[1] // 2
myArray[3] // undefined, can assign
myArray[3] = 4;
delete myArray[0]; // deletes first item from myArray (1), returns true if successful

// Destructuring arrays:
const destructureMe = ["first", "second", "third", "fourth"];
const [scn, thr] = destructureMe[1,2];
console.log(scn) // second
console.log(thr) // third
// Can swap variables this way
let x = 1, y = 2;
[x,y] = [y,x]; // Now x = 2, y = 1

// Properties and methods
const properties = ["My", "word", "list", 1234]; // Note: you can mix types in arrays
properties.length; // 4
properties.length = 3; // this is MUTABLE apparently, properties = ["My", "word", "list"]
properties.pop(); // "list" - also removes last item from the list
properties.shift(); // "my" - also removes first item from the list
properties.push("list"); // adds "list" at the end, returns new length (2)
properties.push("My"); // adds "My" at the beginning, returns new length (3)
properties.concat(["with", "more", "words"]); // ["My", "word", "list", "with", "more", "words", "here"]
// Note: the above example doesn't modify the list
properties = [...properties, ...["with", "more", "words"]]; // another concatenation, reassigns list
properties.join() // "My, word, list, with, more, words", anything in parentheses = use that instead of ", "

// Slicing & Splicing
properties.slice(1, 3); // elements 1 (inclusive) to 3 (exclusive): ["word", "list"]
properties.splice(3, 6, "yay"); // replaces ["with", "more", "words"] with "yay", return words replaced
properties.reverse(); // modifies array - ["yay", "list", "word", "my"]
properties.sort() // ["list", "my", "word", "yay"] sorts alphabetically (yes, this includes numbers... thanks, Javascript)
properties.indexOf("yay") // 3

// 2D arrays - array of arrays
const matrix = [[0,1,2],
                [3,4,5],
                [6,7,8]];
matrix[0][0] // 0 - first array's first item
const flattened = [...matrix[0], ...matrix[1], ...matrix[2]];

// Sets (like mathematical sets)
const mySet = new Set();
mySet.add(2).add(3).add(5).add(7) // Set is now {2, 3, 5, 7}
const setFromArray = new Set(["my","set","elements","for","my","set"]); // Note: duplicates are removed
// Set methods
setFromArray.has("my") // true - "my" in setFromArray
setFromArray.size(); // 4 - remember that duplicates are removed
setFromArray.delete("for"); // true -> {"my", "set", "elements"} 
const arrayFromSet = [...setFromArray]; // or Array.from(setFromArray);
// Remove duplicates: Array.from(new Set(<original array>))

// Weak sets - prevent memory leaks relating to creating sets from arrays
const weakSet = new WeakSet();
// same as a set, but can only store object references

// Maps
const myMap = new Map();
myMap.set("key", "value")
myMap.get("key"); // value
myMap.get("doesn't exist"); // undefined
myMap.has("key") // true - checks keys
// Like sets, we can create maps from [[nested, lists], [like, this]]
// Also, WeakMaps : Maps :: WeakSets : Sets

// Control Flow
if (2 + 2 == 4) {
    console.log("2 + 2 = 4.")
}

// Can add else statement
if (1 + 1 == 2) {
    console.log("1 + 1 = 2.")
} else {
    console.log("Reality is broken!!");
}

// Ternary operator
let amIEven = 1;
let evenMessage = `Number is ${amIEven % 2 == 0 ? "even" : "odd"}`;

// Switch statements
switch (amIEven) {
    case 1:
        console.log("Number is one");
    case 2:
        console.log("Number is two");
    default:
        console.log("Number is something else");
}

// While loops
// Count up from 10
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}
// Will not run if condition is false. However:
do {
    console.log(count);
    count--;
} while (count > 0)
// This will run once, even if the condition is false.

// For loops
//   Initial statement; Condition; Increment 
for (let i = 0;         i < 10;    i++      ) {
    console.log(i); // Count up from 0
}
// For loops for iterables:
const iterateThroughMe = ["my", "list", "of", "words", "is", "back"];
for (let word of iterateThroughMe) {
    console.log(word); // print each word of list
}
// Looping through sets: order is the same in which they were added.
// Order for maps: can use k of map.keys(), v of map.values(), or [k,v] of map.entries()

// Callback functions
function f1(p1, callback) {
    console.log(p1);
    callback(p1);
}

function f2(p1) {
    console.log(`Callback: ${p1}`);
}

f1(5,f2)

// Sorting with callback
function byNumber(a, b) {
    return a - b; // >0 = greater, 0 = same, <0 = less
}

// iterators 
[1,2,3,4,5].forEach((n) => { console.log(`Number: ${n}`); }); // prints 1-5
[1,2,3,4,5].map( n => n * 2 ) // 2 4 6 8 10
[1,2,3,4,5].reduce((acc, val) => val + acc, 0); // sum of 1-5, second parameter comes after callback'
[1,2,3,4,5].filter((n) => n % 2 == 0) // keep only the even numbers - [2 4]

// DOM manipulation
document.getElementById("element-id");
document.getElementsByTagName("p"); // array of all p tags
document.getElementsByClassName("myclass") // get elements by class name

// query selectors are better for this
document.querySelector("#element-id");
document.querySelectorAll("p"); // querySelectorAll for multiple
document.querySelectorAll(".myclass");
document.querySelectorAll("p.myclass"); // p elements with class myclass
document.querySelectorAll("li:last-child"); // last list item in document

// elements can have properties
/* <ul id="my-element" class="myclass">
 *   <li>One</li>
 *   <li>Two</li>
 *   <li>Three</li>
 *   <li>Four</li>
 * </ul>
 */
const myElement = document.querySelector("#my-element");
myElement.children; // all children of the element with id my-element, myElement also has properties firstChild and lastChild
myElement.firstChild.nextSibling; // second child (Two)
myElement.firstChild.textContent; // return the text within first child, "One"

// getting & setting attributes
myElement.getAttribute("class"); // "myclass"
myElement.setAttribute("class", "not-myclass");
myElement.className = "myclass"; // set class name back, can be used as a getter
myElement.classList; // a class list - can add a class, remove a class, toggle a class, or see if it contains a class
// the class list is a LIVE collection and modifying it will modify the element on the original page.
// this also applies to document.getElementsByClassName, document.getElementsById, document.querySelector, etc..

// dynamic markup
const newLi = document.createElement('li'); // returns a new element
const newText = document.createTextNode('Text Here'); // returns a new text node
newLi.appendChild(newText); // li now has text 'Text here'
const newerLi = document.createElement('li');
newLi.parentElement.insertBefore(
    newerLi,
    newLi
); // adds another new list item before newLi
newLi.parentElement.removeChild(newerLi); // remove textNode

// Replace an element
// <h1 id="header">Old Text</h1>
const headerElement = document.querySelector("#header");
const oldHeaderText = headerElement.firstChild;
const newHeaderText = document.createTextNode("New Text");
headerElement.replaceChild(newHeaderText, oldHeaderText);

// another method that works:
headerElement.innerHTML = "<span>Newer Text</span>";
// NOTE: modifying innerHTML is not recommended for security reasons, especially with anything relating to user input.

// modifying style
// <span id="myspan" style="color: red;">Style Me</span>
const mySpan = document.querySelector("#myspan");
mySpan.style.display = 'none'; // make mySpan disappear
mySpan.style.display = 'inline'; // put it back
getComputedStyle(mySpan).color; // make it red
// Note: when possible, prefer adding/removing classes over adding styles like this

// Async
function timeoutCallback() {
    console.log("Time's up!")
}
setTimeout(callback, 1000); // calls timeoutCallback after exactly one second (1000 ms)
// Note: callbacks are functions passed as parameters that are called when something is completed.
// In this case, after 1 second has finished passing.
console.log("This will be called while the timer is still running, since setTimeout is asynchronous");

// "Callback hell": when the program depends on a lot of callbacks and the code gets complicated.
// Luckily, there's a solution - promises.

const promise = new Promise( function handle(resolve, reject) {
    let value = someLongComplicatedAsynchronousTask();
    if (taskWasSuccessful) {
        resolve(value);
    } else {
        reject(value);
    }
});
// resolve() and reject() should return a value that we can do something with
// Alternatively,
promise.then(data => onSuccess(data), data => onFail(data));
promise.then(data => onSuccess(data)).catch(data => onFail(data));
// Note: promises.then and promises.catch are blocking, meaning that the rest of the code WILL wait for the promise to finish.
// To settle callback hell:
doFirstThing()
    .then(doSecondThing)
    .then(doThirdThing)
    .catch(throwError);

// Async functions: use "async" keyword before a function
async function loadUrl(data) {
    try {
        const result = await longAsyncFunction(); // waits inside function, but doesn't cause function to block code
        // do stuff with result
    }
    catch (error) {
        // uh oh!
        throw error;
    }
}

// Generalized functions
// Normal function:
function mean(x,y) {
    return (x+y)/2;
}

function mean(x,y,callback=null) {
    let res = (x+y)/2;
    if (callback) {
        return callback(res);
    }
    return res;
}

mean(1, 3) // 2
mean(1, 3, (x) => x + 1); // (1+3)/2 + 1 = 3

// Functions that return functions
function a(x) {
    const z = 5;
    function b(y) {
        return x + y + z;
    }
    return b;
}
let func = a(5);
func(5); // 15
func(1); // 11

// NOTE: the above function is a closure. The inner function has access to all three variables, even though z and x are in the outer function.
// None of the three variables can be accessed outside of the closure.

// Functions can modify values too:
function multiplyBy2Outer() {
    let i = 1;
    function inside() {
        i *= 2;
        return i;
    }
    return inside;
}

const multiplyBy2 = multiplyBy2Outer();
multiplyBy2(); // 2
multiplyBy2(); // 4
multiplyBy2(); // 8