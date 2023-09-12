const { Graph } = require('../Graphs/Graphs'); 
const businessTrip = require('./graph-business-trip'); 

describe('businessTrip function', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    it('should return the cost of a valid trip with direct flights', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        
        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);

        expect(businessTrip(graph, ['City A', 'City B', 'City C'])).toEqual(125);
    });

    it('should return null for an invalid trip with a missing city', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');

        graph.addEdge(cityA, cityB, 50);

        expect(businessTrip(graph, ['City A', 'City E'])).toBeNull();
    });

    it('should return null for an invalid trip with no direct flight', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityC, cityB, 75);

        expect(businessTrip(graph, ['City A', 'City C', 'City D'])).toBeNull();
    });

    it('should handle a different graph and return the cost of a valid trip with direct flights', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City B', 'City C'])).toEqual(125);
    });

    it('should handle a different graph and return the cost of a valid trip with a different order of cities', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City C', 'City B', 'City A'])).toEqual(125);
    });

    it('should handle a different graph and return null for an invalid trip with a missing city', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City E'])).toBeNull();
    });

    it('should handle a different graph and return null for an invalid trip with no direct flight', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City C', 'City E'])).toBeNull();
    });

    it('should handle a different graph and return the cost of a valid trip with multiple direct flights', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City B', 'City C', 'City D'])).toEqual(225);
    });

    it('should handle a different graph and return the cost of a valid trip with a direct flight between the first and last city', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City D'])).toEqual(200);
    });
});
