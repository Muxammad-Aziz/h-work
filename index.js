// class Animal {
//     constructor(species, eat) {
//         this.species = species
//         this.eat = eat
//     }

//     start() {
//         return this.species + " хищник"
//     }

//     stop() {
//         return this.species + " мясо"
//     }
// }

// let species = prompt("Введите дикого животного:")


// let wildAnimals = new Animal("Хищник", "Тигр")

// console.log(
//     wildAnimals.start(), "\n",
//     wildAnimals.stop()
// );


class Animal {
    constructor(species, eat) {
        this.species = species;
        this.eat = eat;
    }

    start() {
        return this.species + " " + this.species;
    }

    stop() {
        return this.species + " " + this.eat;
    }
}

let species = prompt("Введите животного:");
let eat = prompt("Чем питается " + "?");

let wildAnimal = new Animal(species, eat);

console.log(
    wildAnimal.start(), "\n",
    wildAnimal.stop()
);
