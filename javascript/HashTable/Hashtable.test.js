const Hashtable = require('./Hashtable');

describe('Hashtable', () => {
    let ht;

    beforeEach(() => {
        ht = new Hashtable();
    });

    test('Setting a key/value should store the value', () => {
        ht.set('key1', 'value1');
        expect(ht.get('key1')).toBe('value1');
    });

    test('Retrieving a value should return the correct value', () => {
        ht.set('key1', 'value1');
        expect(ht.get('key1')).toBe('value1');
    });

    test('Retrieving a non-existent key should return null', () => {
        expect(ht.get('nonexistent_key')).toBeNull();
    });

    test('Checking if a key exists should return true if the key is set', () => {
        ht.set('key1', 'value1');
        expect(ht.has('key1')).toBe(true);
    });

    test('Checking if a key exists should return false if the key is not set', () => {
        expect(ht.has('key1')).toBe(false);
    });

    test('Retrieving keys should return a list of unique keys', () => {
        ht.set('key1', 'value1');
        ht.set('key2', 'value2');
        ht.set('key3', 'value3');
        ht.set('key1', 'new_value'); // Overwrite key1
        expect(ht.keys()).toEqual(expect.arrayContaining(['key1', 'key2', 'key3']));
    });

    // Add more tests for collision handling, hash function, etc.
});
