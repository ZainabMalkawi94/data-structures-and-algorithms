'use strict';

const {AnimalShelter, Animal} = require('./lib/AnimalClass');

const shelter = new AnimalShelter();

shelter.enqueue(new Animal('dog', 'Max'));
shelter.enqueue(new Animal('cat', 'Whiskers'));
shelter.enqueue(new Animal('dog', 'Buddy'));
shelter.enqueue(new Animal('cat', 'Oscar'));

console.log(shelter.dequeue('dog')); // Output: Animal { species: 'dog', name: 'Max' }
console.log(shelter.dequeue('cat')); // Output: Animal { species: 'cat', name: 'Whiskers' }
// console.log(shelter.dequeue('bird')); // Output: Animal { species: 'dog', name: 'Buddy' }
console.log(shelter.dequeue()); // Output: Animal { species: 'cat', name: 'Oscar' }

