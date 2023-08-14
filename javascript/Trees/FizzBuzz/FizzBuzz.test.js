const { Node, KaryTree, fizzBuzzTree } = require('./fizzBuzzTree'); // Replace 'your-file-name.js' with the actual file name containing the implementation.

describe('fizzBuzzTree', () => {
  it('should transform the k-ary tree according to FizzBuzz rules', () => {
    // Create the original k-ary tree
    const originalRoot = new Node(15);
    const node3 = new Node(3);
    const node5 = new Node(5);
    const node2 = new Node(2);
    const node4 = new Node(4);
    const node30 = new Node(30);

    originalRoot.children = [node3, node5, node2, node4, node30];

    const originalTree = new KaryTree(originalRoot);

    // Create the expected k-ary tree after transformation
    const expectedRoot = new Node('FizzBuzz');
    const expectedNodeFizz = new Node('Fizz');
    const expectedNodeBuzz = new Node('Buzz');
    const expectedNode2 = new Node('2');
    const expectedNode4 = new Node('4');
    const expectedNodeFizzBuzz = new Node('FizzBuzz');

    expectedRoot.children = [expectedNodeFizz, expectedNodeBuzz, expectedNode2, expectedNode4, expectedNodeFizzBuzz];

    const expectedTree = new KaryTree(expectedRoot);

    // Call the fizzBuzzTree function to transform the original tree
    const transformedTree = fizzBuzzTree(originalTree);

    expect(transformedTree).toEqual(expectedTree);
  });

  it('should return an empty k-ary tree for an empty input tree', () => {
    const emptyTree = new KaryTree();

    const transformedTree = fizzBuzzTree(emptyTree);

    expect(transformedTree.root).toBeNull();
  });

  it('should throw an error for non-KaryTree input', () => {
    const notAKaryTree = { root: { value: 1, children: [] } };

    expect(() => fizzBuzzTree(notAKaryTree)).toThrow('Input must be a KaryTree.');
  });
});
