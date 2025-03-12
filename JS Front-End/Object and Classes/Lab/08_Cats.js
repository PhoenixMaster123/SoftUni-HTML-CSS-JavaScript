function solve(data) {
        class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let cats = [];

    for (let entry of data) {
        let [name, age] = entry.split(' ');

        let cat = new Cat(name, Number(age));

        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}