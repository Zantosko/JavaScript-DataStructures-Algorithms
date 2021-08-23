// BUBBLE SORT

/** Big O Complexity
 * Time - O(n) (Best case)
 * Time - O(n^2) (Average and Worst case)
 * Space - O(1)
 */

function bubbleSort(array) {
	let noSwaps;
	for (let i = array.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
		if (noSwaps) break;
	}
	return array;
}
