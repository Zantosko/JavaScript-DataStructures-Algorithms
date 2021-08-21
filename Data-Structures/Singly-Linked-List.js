class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Adds node to the end of the linked list
	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// Removes node from the end of the linked list
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	// Removes node from the beginning of the linked list
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		if (this.length == 0) {
			this.tail = null;
		}

		return currentHead;
	}

	// Adds node to the beginning of the linked list
	unshift(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// Accesses node at specified index
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	// Updates node at specified index
	set(index, value) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.value = value;
			return true;
		}
		return false;
	}

	// Adds node to the linked list at specified index
	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		let newNode = new Node(value);
		let prev = this.get(index - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;

		return true;
	}
}
