// DOUBLY LINKED LIST

/** Big O Complexity
 * Insertion - O(1)**  **If the value is in the middile then it's O(n)
 * Removal - O(1)**
 * Searching - O(n)
 * Access - O(n)
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Adds node to the end of the linked list
	push(value) {
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// Removes node from the end of the linked list
	pop() {
		if (!this.head) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}

	// Removes node from the beginning of the linked list
	shift() {
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	// Adds node to the beginning of the linked list
	unshift(value) {
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// Accesses node at specified index
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count, current;
		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while (count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}

	// Updates node at specified index
	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode != null) {
			foundNode.value = value;
			return true;
		}
		return false;
	}

	// Inserts node into linked list at specified index
	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(value);
		if (index === this.length) return !!this.push(value);

		let newNode = new Node(value);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;

		(beforeNode.next = newNode),
			(newNode.prev = beforeNode);
		(newNode.next = afterNode), (afterNode.prev = newNode);
		this.length++;
		return true;
	}

	// Removes node from linked list at specified index
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removedNode = this.get(index);
		let beforeNode = removedNode.prev;
		let afterNode = removedNode.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}
}
