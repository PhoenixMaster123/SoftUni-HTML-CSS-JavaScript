let regexp = /l/g;
let str = 'hello, there';

console.log(regexp.test(str)) // true
console.log(str.match(regexp)) // ['l', 'l']

// \b -> word boundary



// exec() -> works with a pointer & returns a group
const text = 'Peter: 123 Mark: 456';
const regexp2 = /([A-Z][a-z]+): (\d+)/g;
const firstMatch = regexp2.exec(text);

console.log(firstMatch[0]); // Peter: 123
console.log(firstMatch[1]); // Peter
console.log(firstMatch[2]); // 123

// replace(regexp, stringReplacement)

let matches = text.matchAll(regexp2);

console.log([...matches]);

// matchAll(regexp)
// split(regexp)