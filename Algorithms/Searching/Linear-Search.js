// LINEAR SEARCH

/** Big O Complexity
 * Time - O(1) (Best case)
 * Time - O(n) (Average and Worst case)
 * Space - O(1)
 */

// Takes array and value as arguments and scans the array to see if the given value exist within the array. If it does then the index where its located is returned, otherwise -1 is returned.
function linearSearch(array, value) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === value) return i;
	}
	return -1;
}
