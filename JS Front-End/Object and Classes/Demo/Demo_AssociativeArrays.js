// The key can have intervals

let phoneBook = {};

phoneBook['John Smith'] = '+1-555-7965';
phoneBook['Anne Frank'] = '+1-345-5324';
phoneBook['Mark Stone'] = '+1-123-2131';

console.log(phoneBook); // return all 
console.log(phoneBook['Anne Frank']); // return the value;

// Other option to write it:
let phoneBook2 = {
    'John Smith': '+1-555-7965',
    'Anne Frank': '+1-345-5324',
    'Mark Stone': '+1-123-2131'
};

// Other option to write it:

let key = 'Anne Frank'

let phoneBook3 = {
    'John Smith': '+1-555-7965',
    [key]: '+1-345-5324',
    'Mark Stone': '+1-123-2131'
};

// If we don't know all elements:
function createPerson(name, lastName, age, propName, data) {
    let person = {
        name, 
        lastName,
        age,
        [propName] : data
    };
    return person;
}

// We can use for-in loop to iterate through the keys

for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
}

// hasOwnProperty -> return if true or false if the key exists or not

console.log(phoneBook.hasOwnProperty('Anne Frank')); // true


/*
Objects cannot be sorted; they must be converted first

Convert to array for sorting, filtering and mapping:
*/

let myObj = {};

myObj.name = 'Peter';
myObj.age = 21;
myObj.occupation = 'teacher';
myObj['3'] = 'brown'; // It will go on the first position

// 3 name age occupation

let phoneBookForSort = {};

phoneBookForSort['John Smith'] = '+1-555-7965';
phoneBookForSort['Anne Frank'] = '+1-345-5324';
phoneBookForSort['Mark Stone'] = '+1-123-2131';

let enties = Object.entries(phoneBookForSort);

enties.sort(); // sort by ASCII

console.log(enties); // check Terminal

enties.sort(compareEntities); // sort by ASCII

console.log(enties); // check Terminal

// Save the sorted in a new object
const sortedBook = Object.fromEntries(enties);

console.log(sortedBook);

function compareEntities(a, b) {
    return a[0].localeCompare(b[0]);
}
