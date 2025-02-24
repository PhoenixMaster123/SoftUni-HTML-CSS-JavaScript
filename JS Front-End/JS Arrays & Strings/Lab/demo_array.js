// Create an empty array
let myArray = []; // list-like object -> It is dynamical | the size and the types are not fixed

console.log(myArray); // restult: (0) [] -> 0 elements

// Functions:

// myArray.length
// myArray[myArray.length - 1]

myArray = [10, 20, 30, {name: 'Peter'}, 50]; // if we open the terminal the object will be shown

console.log(myArray);

console.log(myArray[7]) // undefined
myArray[9] = 44; // position 9 it will be placed 44

console.log(myArray); // the length will be now 10 | the fields that we skipped will be undefined

let newArray = [10, 20];
newArray.push(30); // it will add the element end of the array

console.log(newArray);

newArray.push(50, 60, 70); // we can more than one element with push command

console.log(newArray);

/////////////////////////////////// Crazy Things ////////////////////////////////////

let crazyArray = [10, 20, 30];
crazyArray[-1] = 40; // go to the last index but not as a number but as string

console.log(crazyArray); // [10, 20, 30, 40, ...] 

/////////////////////////////////// Different Syntax ////////////////////////////////////

let array = [10, 20, 30, 40, 50];

let [a, b] = array;

console.log(a); // copy 10
console.log(b); // copy 20

let [c, d, ...param] = array; 

console.log(param); // [30, 40, 50]

let [e, f, g] = array; // <=>

// let e = 10;
// let f = 20;
// let g = 30;

// array.slice <=> ... (rest)    


/////////////////////////////////// Combine two arrays: ////////////////////////////////////

// array1.puch(...array2)
// let concat = [...array1, ...array2]
// array1.concat(array2);


/////////////////////////////////// Iteration //////////////////////////////////////////////

let arr = [10, 20, 30, 40];

// For...OF:
for(let element of arr) {
    console.log(element);
}

// With Lambda:
myArray.forEach((ele) => console.log(ele));

/////////////////////////////////// Methods //////////////////////////////////////////////

// Pop -> remove last element
let arr2 = [10, 20, 30, 40];
let lastElement = arr2.pop();
console.log(lastElement);

// Push -> add element on the last position | Note: we can add more than one element

arr2.push(40, 50);

// Shift -> remove the first element and return the removed element
let firstElement = arr2.shift();

console.log(firstElement); // 10

// Unshift -> add on the element on the first position
arr2.unshift(10);

// Combination -> push + shift | pop + unshift

// Splice -> removing or replacing existing element
let output = arr2.splice(2);  // start from 2 index
console.log(arr2); // [10, 20]
console.log(output); // [30, 40, 50]

arr2 = [10, 20, 30, 40];

let output2 = arr2.splice(2, 1); // remove only one (start from index2)
console.log(arr2); // 10, 20, 40
console.log(output2); // [30]

// reverse -> reverse array

// join() -> make the array in string | concatanate the array

arr2 = [10, 20, 30, 40];
console.log(arr2.join('-')); // -> 10-20-30-40

// slice -> method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple'];
let citrus = fruits.slice(1, 3); // ['Orange', 'Lemon']
let fruitsCopy = fruits.slice(); // ['Banana', 'Orange', 'Lemon', 'Apple'];

// includes -> Determines whether an array contains a certain element, return TRUE or FALSE as appropriate

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

let symbols = ['a', 'b', 'c'];
arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false

// indexOf -> method returns the first index which a given element can be found in the array

// find -> returns the first found value in the array, if an eleemnt in the array satisfies the provided testing function or undefined if not found

let array1 = [5, 12, 8, 30, 44];
let found = array1.find(n => n % 3 == 0 && n % 5 == 0);
console.log(found);

// filter -> every