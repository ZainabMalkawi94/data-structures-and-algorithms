const {AnimalShelter,Animal} = require('../lib/AnimalClass');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should return the dog animal if preference is dog', () => {
    shelter.enqueue({ species: 'dog', name: 'Max' });
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });
  
    expect(shelter.dequeue('dog')).toEqual({ species: 'dog', name: 'Max' });
  });
  


  test('should return the oldest animal if preference is not provided', () => {
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });
    shelter.enqueue({ species: 'dog', name: 'Max' });
  
    expect(shelter.dequeue()).toEqual({ species: 'cat', name: 'Whiskers' });
  });
  

  test('should throw an error if trying to dequeue from an empty shelter', () => {
    expect(() => {
      shelter.dequeue('dog');
    }).toThrow('Animal shelter is empty');
  });
});
