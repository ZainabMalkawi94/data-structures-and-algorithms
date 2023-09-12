const Hashtable = require('../Hashtable')
const leftJoin = require('./LEFTJOINs');

describe('leftJoin function', () => {
  let synonymsHash;
  let antonymsHash;

  beforeEach(() => {
    // Initialize new Hashtable instances before each test
    synonymsHash = new Hashtable();
    antonymsHash = new Hashtable();
  });

  it('should perform a left join operation and return the expected result', () => {
    // Populate the Hashtable instances
    const synonymsHash = {
        diligent: 'employed',
        fond: 'enamored',
        guide: 'usher',
        outfit: 'garb',
        wrath: 'anger',
      };
      
      const antonymsHash = {
        diligent: 'idle',
        fond: 'averse',
        guide: 'follow',
        flow: 'jam',
        wrath: 'delight',
      };

    const result = leftJoin(synonymsHash, antonymsHash);
console.log(result.length);
    // Assert the result
    expect(result).toHaveLength(5);
    expect(result[0]).toEqual(['diligent', 'employed', 'idle']);
    expect(result[1]).toEqual(['fond', 'enamored', 'averse']);
    expect(result[2]).toEqual(['guide', 'usher', 'follow']);
    expect(result[3]).toEqual(['outfit', 'garb', null]);
    expect(result[4]).toEqual(['wrath', 'anger', 'delight']);
  });

  it('should return an empty array when both input objects are empty', () => {
    const synonymsHash = {};
    const antonymsHash = {};
    const result = leftJoin(synonymsHash, antonymsHash);
    expect(result).toEqual([]);
  });

  it('should return an array of key-value pairs with synonyms and null antonyms', () => {
    const synonymsHash = {
      happy: 'joyful',
      sad: 'unhappy',
    };
    const antonymsHash = {};
    const result = leftJoin(synonymsHash, antonymsHash);
    expect(result).toEqual([
      ['happy', 'joyful', null],
      ['sad', 'unhappy', null],
    ]);
  });

  it('should return an array of key-value pairs with synonyms and matching antonyms', () => {
    const synonymsHash = {
      hot: 'warm',
      cold: 'cool',
    };
    const antonymsHash = {
      hot: 'cold',
      cold: 'hot',
    };
    const result = leftJoin(synonymsHash, antonymsHash);
    expect(result).toEqual([
      ['hot', 'warm', 'cold'],
      ['cold', 'cool', 'hot'],
    ]);
  });

  it('should return an array of key-value pairs with synonyms and null antonyms for missing keys in antonyms', () => {
    const synonymsHash = {
      apple: 'fruit',
      car: 'vehicle',
    };
    const antonymsHash = {
      apple: 'orange',
    };
    const result = leftJoin(synonymsHash, antonymsHash);
    expect(result).toEqual([
      ['apple', 'fruit', 'orange'],
      ['car', 'vehicle', null],
    ]);
  });

});
