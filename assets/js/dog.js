// dog.js

export class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    // Méthode pour obtenir une description du chien
    getDescription() {
        return `Nom: ${this.name}, Race: ${this.breed}, Âge: ${this.age} ans`;
    }
}
