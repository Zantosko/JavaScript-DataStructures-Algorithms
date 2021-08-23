// DIJKSTRA'S ALGORITHM
// - This algorithm is used for finding the shortest path between two nodes on a weighted graph

// This is a simple version of the priority queue, for better performance implement this using a Binary Heap instead.
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		this.values.push({ value, priority });
		this.sort();
	}

	dequeue() {
		return this.values.shift();
	}

	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex])
			this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({
			node: vertex2,
			weight,
		});
		this.adjacencyList[vertex2].push({
			node: vertex1,
			weight,
		});
	}

	// Dijkstra's algorithm implementation
	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [];
		let smallest;

		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		while (nodes.value.length) {
			smallest = nodes.dequeue().value;
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
		}

		if (smallest || distances[smallest] !== Infinity) {
			for (let neighbor in this.adjacencyList[smallest]) {
				let nextNode =
					this.adjacencyList[smallest][neighbor];
				let candidate =
					distances[smallest] + nextNode.weight;
				let nextNeighbor = nextNode.node;

				if (candidate < distances[nextNeighbor]) {
					distances[nextNeighbor] = candidate;
					previous[nextNeighbor] = smallest;
					nodes.enqueue(nextNeighbor, candidate);
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}
