const Hashtable = require('../HashTable/Hashtable')

function repeatedWord(str) {
  const words = str.toLowerCase().split(/\W+/);
  const wordHashtable = new Hashtable();

  for (const word of words) {
    if (wordHashtable.has(word)) {
      return word;
    }
    wordHashtable.set(word, true);
  }

  return null;
}

module.exports = repeatedWord;
