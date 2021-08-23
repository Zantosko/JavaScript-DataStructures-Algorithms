// INSERTION SORT

/** Big O Complexity
 * Time - O(n) (Best case)
 * Time - O(n^2) (Average and Worst case)
 * Space - O(1)
 */

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let currentValue = array[i];
		for (
			let j = i - 1;
			j >= 0 && array[j] > currentValue;
			j--
		) {
			array[j + 1] = array[j];
		}
		array[j + 1] = currentValue;
	}
	return array;
}
