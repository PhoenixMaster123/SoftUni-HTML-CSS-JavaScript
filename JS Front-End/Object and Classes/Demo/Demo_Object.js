// Create an object:
const myObj = {name: 'Peter', age: 21};

console.log(myObj);

// Take the element:

console.log(myObj.name);

// Change the property element:

myObj.name = 'John';

console.log(myObj.name);

// New property is created
myObj.occupation = 'Teacher';

console.log(myObj);

// delete: (return always true)

delete myObj.occupation

console.log(myObj);

// Composition:

function createPerson(firstName, lastName, age) {
    return {firstName, lastName, age};
}
console.log(createPerson('Peter', 'Pan', 20));

function createPerson2(firstName, lastName, age) {
    return {
        firstName, 
        lastName, 
        age, 
        sayHello
    };
}

function sayHello() {
    console.log('Hello World')
}

myObj.sayHello = function() {
    console.log('Hello there');
}

console.log(createPerson('Peter', 'Pan', 20, sayHello));


////////////////////////////////// keys method /////////////////////////

let keys = Object.keys(myObj);

console.log(keys);

for (let key of keys) {
    console.log(key + ' -> ', myObj[key]);
}

////////////////////////////////// values method /////////////////////////


let values = Object.values(myObj);

console.log(values);

for (let value of values) {
    console.log(value + ' -> ', myObj[value]);
}

////////////////////////////////// entries method /////////////////////////

let entries = Object.entries(myObj);

for (let entry of entries) {
   let key = entry[0];
   let value = entry[1];
   console.log(key + ' -> ' + value);
}

// Short version:
for (let [key, value] of entries) {
    console.log(key + ' -> ' + value);
 }