const mergeSort = require('./MergeSort'); // Update the path

test('Empty array should stay empty', () => {
  expect(mergeSort([])).toEqual([]);
});

test('Array with one element should remain the same', () => {
  expect(mergeSort([42])).toEqual([42]);
});

test('Array should be sorted correctly', () => {
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = [3, 9, 10, 27, 38, 43, 82];

  expect(mergeSort(unsortedArray)).toEqual(sortedArray);
});
