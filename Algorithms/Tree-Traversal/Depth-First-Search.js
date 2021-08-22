// DEPTH FIRST SEARCH (PreOrder, InOrder, PostOrder)

// PreOrder
// Great for "exporting" a tree structure for reuse
function DFSPreOrder() {
	let data = [];

	function traverse(node) {
		data.push(node.value);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	}

	traverse(this.root);
	return data;
}

// InOrder
// Great if you want sorted data
function DFSInOrder() {
	let data = [];

	function traverse(node) {
		if (node.left) traverse(node.left);
		data.push(node.value);
		if (node.right) traverse(node.right);
	}

	traverse(this.root);
	return data;
}

// PostOrder
function DFSPostOrder() {
	let data = [];

	function traverse(node) {
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
		data.push(node.value);
	}

	traverse(this.root);
	return data;
}
