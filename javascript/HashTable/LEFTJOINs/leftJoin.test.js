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

  // Add more test cases as needed
});
