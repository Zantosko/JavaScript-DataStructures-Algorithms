// GRAPH
// - The example shown below will implement the graph using an adjacency list.
// - Most data in the real world tends to lend itself to sparser and/or larger graphs. An adjacency list is perfect for these situations.

/** Big O Complexity - Adjacency List
 * Add Vertex - O(1)
 * Add Edge - O(1)
 * Remove Vertex - O(|V|+|E|)
 * Remove Edge - O(|E|)
 * Query - O(|V|+|E|)
 * Storage - O(|V|+|E|)
 *
 * |V| - number of vertices
 * |E| - number of edges
 */

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(v1, v2) {
		this.addVertex(v1);
		this.addVertex(v2);
		if (!this.adjacencyList[v1].includes(v2)) {
			this.adjacencyList[v1].push(v2);
		}
		if (!this.adjacencyList[v2].includes(v1)) {
			this.adjacencyList[v2].push(v1);
		}
	}

	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(
			(vertex) => vertex !== v2
		);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(
			(vertex) => vertex !== v1
		);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex =
				this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
}
