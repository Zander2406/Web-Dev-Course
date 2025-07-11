// let obj = {
//     a: 1,
//     b: "harry"
// };

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

// console.log(rabbit);


class Animal {
    constructor (name) {
        this.name = name;
        console.log("object is created...");
    }

    eats () {
        console.log("Khaa raha hu");
    }

    jumps () {
        console.log("Kood raha hu");
    }
}

class Lion extends Animal {
    constructor (name) {
        super(name);
        console.log("Object is created and he is a lion...")
    }

    eats () {
        super.eats();
        console.log("Khaa raha hu roar");
    }
}

// a is an object of the Animal class
let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

