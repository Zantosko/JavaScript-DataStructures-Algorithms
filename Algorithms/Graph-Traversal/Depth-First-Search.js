// DEPTH FIRST SEARCH - (Recursive and Iterative approaches)

// Recursive
function depthFirstRecursive(start) {
	const result = [];
	const visited = {};
	const adjacencyList = this.adjacencyList;

	(function dfs(vertex) {
		if (!vertex) return null;
		visited[vertex] = true;
		result.push(vertex);
		adjacencyList[vertex].forEach((neighbor) => {
			if (!visited[neighbor]) {
				return dfs(neighbor);
			}
		});
	})(start);

	return result;
}

// Iterative
function depthFirstIterative(start) {
	const stack = [start];
	const result = [];
	const visited = {};
	let currentVertex;

	visited[start] = true;
	while (stack.length) {
		currentVertex = stack.pop();
		result.push(currentVertex);

		this.adjacencyList[currentVertex].forEach(
			(neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			}
		);
	}

	return result;
}
