///////////////////////////////////// stringify ////////////////////////////////////

// We can convert object into JSON string using 

// Syntax: JSON.stringify(object) // Serialization

// What we cannot serialize: functions, undefined

// Example:

let myObj = {name: 'Peter', age: 20};

let asJson = JSON.stringify(myObj);

console.log(asJson);

///////////////////////////////////// parse ////////////////////////////////////

// We can convert JSON string into object using

// Syntax: JSON.parse(text) // Deserialization

// Example:

let jsonData = '{"name":"Peter","age":20}';

let person = JSON.parse(jsonData);

console.log(person);