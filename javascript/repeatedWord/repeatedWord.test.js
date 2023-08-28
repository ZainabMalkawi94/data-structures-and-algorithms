const repeatedWord = require('./repeatedWord');

// Test cases
describe('repeatedWord function', () => {
  test.each([
    {
      input: "Once upon a time, there was a brave princess who...",
      output: "a"
    },
    {
      input: "It was the best of times, it was the worst of times...",
      output: "it"
    },
    {
      input: "It was a queer, sultry summer, the summer they electrocuted...",
      output: "summer"
    }
  ])('should find the first repeated word', (testCase) => {
    const result = repeatedWord(testCase.input);
    expect(result).toBe(testCase.output);
  });
});
