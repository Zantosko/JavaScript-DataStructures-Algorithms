// QUEUE

/** Big O Complexity
 * Insertion - O(1) (Queues prioritize insertion and removal)
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

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		let newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return this.size++;
	}

	dequeue() {
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
