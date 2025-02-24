// Functions:

// concat()
let greet = 'Hello, ';
let name = 'John';
let result = greet.concat(name);
console.log(result);

// indexOf(substr)

// lastIndexOf(substr)

// substring(startIndex, lastIndex)
let myStr = 'Hello There';
console.log(myStr.substring(3, -3)); // hel | -> substring(3, 0) -> substring(0, 3)
console.log(myStr.slice(3, -3)); // lo Th

// replace(string, stringToReplace) -> replace first occurance
// replaceAll() -> replace all occurances

// split()

// includes()

// repeat(how many times)

// startsWith

// padStart() -> to add to the current string another substring at the start until a length is reached
let text = '010';
console.log(text.padStart(8, '0')); // -> 00000010