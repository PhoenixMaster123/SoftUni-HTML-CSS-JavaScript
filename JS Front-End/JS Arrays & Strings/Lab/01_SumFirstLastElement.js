/**
 * @param {number[]} arrNumbers 
 */

// Variant 1:
function solve(arrNumbers) {
    let first = arrNumbers[0];
    let last = arrNumbers[arrNumbers.length - 1];
    console.log(first + last);
}

// Note: solve([3]) // -> 6 

// Variant 2:
function solve2(arrNumbers) {
    let first = arrNumbers.shift();
    let last = arrNumbers.pop();
    console.log(first + last);
}

// Note: solve2([3]) // -> NAN 