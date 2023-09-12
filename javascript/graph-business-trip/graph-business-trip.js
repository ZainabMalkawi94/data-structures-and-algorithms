const { Graph } = require('../Graphs/Graphs'); 

function businessTrip(graph, cities) {
    if (!graph instanceof Graph || !Array.isArray(cities) || cities.length < 2) {
        return null; 
    }

    let totalCost = 0;

    for (let i = 0; i < cities.length - 1; i++) {
        const currentCity = cities[i];
        const nextCity = cities[i + 1];
        const currentVertex = graph.getVertices().find((vertex) => vertex.value === currentCity);

        if (!currentVertex) {
            return null; 
        }

        const neighborEdge = graph.getNeighbors(currentVertex).find(
            (edge) => edge.vertex.value === nextCity
        );

        if (!neighborEdge) {
            return null; 
        }

        totalCost += neighborEdge.weight;
    }

    return totalCost;
}

const graph = new Graph();
const cityA = graph.addVertex('City A');
const cityB = graph.addVertex('City B');
const cityC = graph.addVertex('City C');
const cityD = graph.addVertex('City D');
const cityE = graph.addVertex('City E');

// Add edges (flights) between cities with corresponding costs
graph.addEdge(cityA, cityB, 50);
graph.addEdge(cityB, cityC, 75);
graph.addEdge(cityC, cityD, 100);
graph.addEdge(cityA, cityD, 200);

console.log('Valid trip with direct flights:');
console.log(businessTrip(graph, ['City A', 'City B', 'City C'])); // Should print 125

console.log('Valid trip with a different order of cities:');
console.log(businessTrip(graph, ['City C', 'City B', 'City A'])); // Should print 125

console.log('Invalid trip with missing city:');
console.log(businessTrip(graph, ['City A', 'City E'])); // Should print null

console.log('Invalid trip with no direct flight:');
console.log(businessTrip(graph, ['City A', 'City C', 'City E'])); // Should print null

console.log('Valid trip with multiple direct flights:');
console.log(businessTrip(graph, ['City A', 'City B', 'City C', 'City D'])); // Should print 225

console.log('Valid trip with a direct flight between the first and last city:');
console.log(businessTrip(graph, ['City A', 'City D'])); // Should print 200

module.exports = businessTrip;
