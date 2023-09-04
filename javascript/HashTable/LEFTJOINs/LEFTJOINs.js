function leftJoin(synonymsHash, antonymsHash) {
    const result = [];
  
    for (const key in synonymsHash) {
      const synonym = synonymsHash[key];
      const antonym = antonymsHash[key] || null;
      result.push([key, synonym, antonym]);
    }
  
    return result;
  }

  
  
  // Test cases
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
  
  console.log(result);
  
  module.exports = leftJoin;
