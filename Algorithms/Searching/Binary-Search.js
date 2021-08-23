// BINARY SEARCH
// - Binary Search is more efficient than Linear Search, the only caveat being that binary search only works on sorted arrays.

/** Big O Complexity
 * Time - O(1) (Best case)
 * Time - O(log n) (Average and Worst case)
 * Space - O(1)
 */

// Takes a sorted array and value as arguments and scans the array to see if the given value exist within the array. If it does then the index where its located is returned, otherwise -1 is returned.
function binarySearch(array, value) {
	let start = 0;
	let end = array.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (array[middle] !== value && start <= end) {
		if (value < array[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return array[middle] === value ? middle : -1;
}
