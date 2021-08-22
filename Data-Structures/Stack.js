// STACK

/** Big O Complexity
 * Insertion - O(1) (Stacks prioritize insertion and removal)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// Adds new value to the top of the stack
	push(value) {
		let newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return this.size++;
	}

	// Removes value from the top of the stack
	pop() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
