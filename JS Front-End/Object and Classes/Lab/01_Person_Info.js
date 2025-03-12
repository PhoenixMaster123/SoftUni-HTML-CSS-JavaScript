function createPerson(firstName, lastName, age) {
    return {firstName: firstName, lastName: lastName, age: age};
}

function createPerson2(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}

function createPerson3(firstName, lastName, age) {
    return {firstName, lastName, age, sayHello};
}



console.log(createPerson('Peter', 'Pan', 20));
console.log(createPerson2('Peter', 'Pan', 20));
console.log(createPerson3('Peter', 'Pan', 20));
