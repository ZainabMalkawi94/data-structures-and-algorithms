'use strict';

const Queue = require('./Queue');
const Node = require('./Node');

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogQueue.enqueue(animal);
    } else if (animal.species === 'cat') {
      this.catQueue.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogQueue.dequeue();
    } else if (pref === 'cat') {
      return this.catQueue.dequeue();
    } else {
      // If pref is neither 'dog' nor 'cat', return the animal that has been waiting the longest
      if (!this.dogQueue.isEmpty() && !this.catQueue.isEmpty()) {
        const oldestDog = this.dogQueue.front.value;
        const oldestCat = this.catQueue.front.value;
        return oldestDog < oldestCat ? this.dogQueue.dequeue() : this.catQueue.dequeue();
      } else if (!this.dogQueue.isEmpty()) {
        return this.dogQueue.dequeue();
      } else if (!this.catQueue.isEmpty()) {
        return this.catQueue.dequeue();
      } else {
        throw new Error('Animal shelter is empty');
      }
    }
  }
}

module.exports = 
{
    AnimalShelter,
    Animal
};
