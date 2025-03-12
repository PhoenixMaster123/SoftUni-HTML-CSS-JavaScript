let myMap = new Map();

console.log(myMap);

// The Keys in the map can be every type but in Assiciative Arrays only strings

myMap.set('John Snow', '+3123123231');
myMap.set('John Smith', '+eqw12312');
myMap.set('Anne Frank', '+12easd12123');

console.log(myMap.get('Anne Frank')); // get value

console.log(myMap.has('Anne Frank')); // true

console.log(myMap.size); // Map has size but Assiciative Arrays not

// iterate with for...of

for (let [name, phone] of myMap) {
    console.log(name, phone);
}

console.log(myMap.keys()) // return MapIterator (undefined)
console.log([...myMap.entries()][1]);

// clear: clear everything

// delete: delete the key + value