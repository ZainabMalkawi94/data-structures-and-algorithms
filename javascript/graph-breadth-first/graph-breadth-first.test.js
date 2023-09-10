const {Graph,Vertex,Edge } = require("../Graphs/Graphs");

describe('Graph breadthFirst method', () => {
  let graph;
  let pandora, arendelle, metroville, monstropolis, narnia, naboo;

  beforeEach(() => {
    graph = new Graph();
    pandora = graph.addVertex('Pandora');
    arendelle = graph.addVertex('Arendelle');
    metroville = graph.addVertex('Metroville');
    monstropolis = graph.addVertex('Monstropolis');
    narnia = graph.addVertex('Narnia');
    naboo = graph.addVertex('Naboo');

    graph.addEdge(pandora, arendelle);
    graph.addEdge(arendelle, metroville);
    graph.addEdge(arendelle, monstropolis);
    graph.addEdge(metroville, monstropolis);
    graph.addEdge(metroville, narnia);
    graph.addEdge(metroville, naboo);
    graph.addEdge(monstropolis, naboo);
    graph.addEdge(narnia, naboo);
  });

  it('should return the correct breadth-first traversal order starting from Pandora', () => {
    const bfsResult = graph.breadthFirst(pandora);
    expect(bfsResult).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo']);
  });

//   it('should return the correct breadth-first traversal order starting from Monstropolis', () => {
//     const bfsResult = graph.breadthFirst(graph.getVertices()[3]); // Start from Monstropolis
//     const validOrders = ['Monstropolis', 'Arendelle', 'Naboo', 'Metroville', 'Pandora', 'Narnia'];
//     console.log(validOrders);
//     const isValidOrder = validOrders.some(order => JSON.stringify(order) === JSON.stringify(bfsResult));
//     expect(isValidOrder).toBe(true);
//   });
  

  it('should throw an error for a non-existent start node', () => {
    const nonExistentNode = new Vertex('Atlantis');
    expect(() => graph.breadthFirst(nonExistentNode)).toThrowError('Start node does not exist in the graph.');
  });

  beforeEach(() => {
    emptyGraph = new Graph();
  });
  it('should return an empty array for an empty graph', () => {
    const emptyGraph = new Graph();
    const startNode = emptyGraph.addVertex('Start');
    const bfsResult = emptyGraph.breadthFirst(startNode);
    expect(bfsResult).toHaveLength(1);
  });
  
  it('should handle a graph with a single node', () => {
    const singleNodeGraph = new Graph();
    const startNode = singleNodeGraph.addVertex('Single');
    const bfsResult = singleNodeGraph.breadthFirst(startNode);
    expect(bfsResult).toEqual(['Single']);
  });
  
  it('should handle a graph with no edges', () => {
    const noEdgesGraph = new Graph();
    const node1 = noEdgesGraph.addVertex('Node1');
    const node2 = noEdgesGraph.addVertex('Node2');
    const bfsResult = noEdgesGraph.breadthFirst(node1);
    expect(bfsResult).toEqual(['Node1']);
  });
  
  it('should handle a disconnected graph', () => {
    const disconnectedGraph = new Graph();
    const node1 = disconnectedGraph.addVertex('Node1');
    const node2 = disconnectedGraph.addVertex('Node2');
    const node3 = disconnectedGraph.addVertex('Node3');
    const bfsResult = disconnectedGraph.breadthFirst(node1);
    expect(bfsResult).toEqual(['Node1']);
  });
  
  it('should return the correct order when there is only one path', () => {
    const singlePathGraph = new Graph();
    const node1 = singlePathGraph.addVertex('Node1');
    const node2 = singlePathGraph.addVertex('Node2');
    const node3 = singlePathGraph.addVertex('Node3');
    singlePathGraph.addEdge(node1, node2);
    singlePathGraph.addEdge(node2, node3);
    const bfsResult = singlePathGraph.breadthFirst(node1);
    expect(bfsResult).toEqual(['Node1', 'Node2', 'Node3']);
  });
  
  it('should return the correct order when there are multiple paths', () => {
    const multiPathGraph = new Graph();
    const node1 = multiPathGraph.addVertex('Node1');
    const node2 = multiPathGraph.addVertex('Node2');
    const node3 = multiPathGraph.addVertex('Node3');
    multiPathGraph.addEdge(node1, node2);
    multiPathGraph.addEdge(node1, node3);
    multiPathGraph.addEdge(node3, node2);
    const bfsResult = multiPathGraph.breadthFirst(node1);
    expect(bfsResult).toEqual(['Node1', 'Node2', 'Node3']);
  });
  });
