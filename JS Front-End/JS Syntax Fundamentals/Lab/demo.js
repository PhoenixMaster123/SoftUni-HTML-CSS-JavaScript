// Type coercion

// If we have equality or addition and one operand is a string -> cast other operand to string

console.log(1 == '1'); // -> true (type coercion)
console.log(1 === '1'); // value + type -> false

console.log(String(1) == '1'); // String -> casting

// if we have arithmetic (which is not addition +) or comparison -> cast both operand to number

console.log(1 < '0.5');

// Logical Operators:

// Note: They function like the other languages, example: Java

// New things: They return result

let result = 5 || false || 'hello'; // -> 5

let falsy = null || 0 || false; // -> false

// falsy values (When they are casted to Boolean):

// false
// null
// undefined
// 0
// 0n
// ''
// NaN

// nagative numbers return true


// typeof operator:
console.log({}); // return {}

let a = 5;

console.log(typeof a); // -> number
console.log(typeof 'hello'); // -> string
console.log(typeof [1, 2, 3]); // -> object
console.log(typeof false); // -> boolean
console.log(typeof 15n); // -> bigint
console.log(typeof null); // -> object
console.log(typeof undefined); // -> undefined

// Example:

let myVar = 5;

if(typeof myVar == 'number') {
    //
} else {
    myVar == Number(myVar) // casting. Note: if it's not a number = NaN
}

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)) // check if sth is NaN (true)
console.log(Math.sqrt(-1)) // check if sth is NaN (NaN)

console.log(null == undefined) // true
console.log(null === undefined) // false


