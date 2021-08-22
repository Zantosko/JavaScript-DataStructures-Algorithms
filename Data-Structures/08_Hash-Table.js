// HASH TABLE
// - Modern languages already implement their own version of a Hash Table like an object in JavaScript or dictionary in Python ({})
// - It's good to know how to implement one from scratch but it won't be optimal

/** Big O Complexity
 * Insertion - O(1)
 * Deletion - O(1)
 * Access - O(1)
 * - This is Best and Average case
 * - If you have a really bad hash function where everything is stored in one index, then the time complexity changes to O(n) (Worst case).
 */

class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	// Converts keys to array indices and stores them in the hash table. The function uses a prime number to spread the keys uniformly and prevent collisions.
	hashFunction(key) {
		let total = 0;
		let PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	// Inserts new value into hash table
	set(key, value) {
		let index = this.hashFunction(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}

	// Retrieves value from hash table
	get(key) {
		let index = this.hashFunction(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}
		return undefined;
	}

	// Returns an array of all values in the table
	values() {
		let valuesArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) {
						valuesArr.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}

	// Returns an array of all keys in the table
	keys() {
		let keysArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}
}
