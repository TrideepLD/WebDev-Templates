const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['MEX', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// The Graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList);