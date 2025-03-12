// Create class
class Person {
    // We don't need this properties | It's optional
    //firstName; 
    //lastName;
    // age;

    // Create a constructor
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHello() {
        console.log(`My name is FirstName: ${this.firstName}, LastName: ${this.lastName}, Age: ${this.age}`);
    };
    static formated(person) {
        return `${person.lastName}, ${person.firstName}`
    }
}

let myPerson = new Person('Peter', 'Johnson', 32); // create an instance

myPerson.sayHello();

console.log(myPerson instanceof Person); // return true

console.log(Person.formated(myPerson));


// Without constructor
/*
let myPerson = new Person();
//console.log(myPerson); // Person {firstName: undefined, lastName: undefined, age: undefined}
myPerson.firstName = 'Peter';
myPerson.lastName = 'Johnson';
myPerson.age = 32;
//myPerson.occupation = 'teacher'; We can add/delete elements
*/

//console.log(myPerson); // Person {firstName: 'Peter', lastName: 'Johnson', age: 32}