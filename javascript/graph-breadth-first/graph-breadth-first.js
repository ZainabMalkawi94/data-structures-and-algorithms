const {Graph} = require("../Graphs/Graphs");
// Test assertions
const graph = new Graph();
const pandora = graph.addVertex('Pandora');
const arendelle = graph.addVertex('Arendelle');
const metroville = graph.addVertex('Metroville');
const monstropolis = graph.addVertex('Monstropolis');
const narnia = graph.addVertex('Narnia');
const naboo = graph.addVertex('Naboo');

graph.addEdge(pandora, arendelle);
graph.addEdge(arendelle, metroville);
graph.addEdge(arendelle, monstropolis);
graph.addEdge(metroville, monstropolis);
graph.addEdge(metroville, narnia);
graph.addEdge(metroville, naboo);
graph.addEdge(monstropolis, naboo);
graph.addEdge(narnia, naboo);

const bfsResult = graph.breadthFirst(pandora);
console.log(bfsResult); // Output: ["Pandora", "Arendelle", "Metroville", "Monstropolis", "Narnia", "Naboo"]