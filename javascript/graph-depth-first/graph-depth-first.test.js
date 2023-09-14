const { Graph } = require("../Graphs/Graphs");

describe('depth first', () => {
  let myGraph;

  beforeEach(() => {
    myGraph = new Graph();
  });

  it('should perform depth-first traversal on a single-node graph', () => {
    const vertexA = myGraph.addVertex('A');
    const result = myGraph.depthFirst(vertexA);
    const expected = ['A'];
    expect(result).toEqual(expected);
  });

  it('should perform depth-first traversal on a graph with disconnected components', () => {
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
    const vertexX = myGraph.addVertex('X');

    myGraph.addEdge(vertexA, vertexB);
    myGraph.addEdge(vertexC, vertexX);

    const result = myGraph.depthFirst(vertexA);
    const expected = ['A', 'B'];
    expect(result).toEqual(expected);
  });

  it('should perform depth-first traversal starting from the middle of the graph', () => {
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
    const vertexD = myGraph.addVertex('D');

    myGraph.addEdge(vertexA, vertexB);
    myGraph.addEdge(vertexB, vertexC);
    myGraph.addEdge(vertexC, vertexD);

    const result = myGraph.depthFirst(vertexB);
    const expected = ['B', 'A', 'C', 'D'];
    expect(result).toEqual(expected);
  });

  it('should perform depth-first traversal on a large graph', () => {
    // Create a large graph with multiple branches.
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
    const vertexD = myGraph.addVertex('D');
    const vertexE = myGraph.addVertex('E');
    const vertexF = myGraph.addVertex('F');
  
    myGraph.addEdge(vertexA, vertexB);
    myGraph.addEdge(vertexA, vertexC);
    myGraph.addEdge(vertexB, vertexD);
    myGraph.addEdge(vertexB, vertexE);
    myGraph.addEdge(vertexC, vertexF);
  
    const result = myGraph.depthFirst(vertexA);
    const expected = ['A', 'B', 'D', 'E', 'C', 'F'];
  
    expect(result).toEqual(expected);
  });
  
  it('should perform depth-first traversal on a linear graph', () => {
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
    const vertexD = myGraph.addVertex('D');
  
    myGraph.addEdge(vertexA, vertexB);
    myGraph.addEdge(vertexB, vertexC);
    myGraph.addEdge(vertexC, vertexD);
  
    const result = myGraph.depthFirst(vertexA);
    const expected = ['A', 'B', 'C', 'D'];
  
    expect(result).toEqual(expected);
  });
  

  it('should perform depth-first traversal on a graph with cycles', () => {
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
    const vertexD = myGraph.addVertex('D');
  
    myGraph.addEdge(vertexA, vertexB);
    myGraph.addEdge(vertexB, vertexC);
    myGraph.addEdge(vertexC, vertexD);
    myGraph.addEdge(vertexD, vertexA);
  
    const result = myGraph.depthFirst(vertexA);
    const expected = ['A', 'B', 'C', 'D'];
  
    expect(result).toEqual(expected);
  });
  

  it('should perform depth-first traversal on a star-shaped graph', () => {
    const centralNode = myGraph.addVertex('Central');
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
  
    myGraph.addEdge(centralNode, vertexA);
    myGraph.addEdge(centralNode, vertexB);
    myGraph.addEdge(centralNode, vertexC);
  
    const result = myGraph.depthFirst(centralNode);
    const expected = ['Central', 'A', 'B', 'C'];
  
    expect(result).toEqual(expected);
  });
  

  

  it('should handle duplicate edges and perform depth-first traversal', () => {
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
  
    myGraph.addEdge(vertexA, vertexB);
    myGraph.addEdge(vertexA, vertexC);
    myGraph.addEdge(vertexA, vertexB); // Duplicate edge
  
    const result = myGraph.depthFirst(vertexA);
    const expected = ['A', 'B', 'C'];
  
    expect(result).toEqual(expected);
  });
  


  
});
