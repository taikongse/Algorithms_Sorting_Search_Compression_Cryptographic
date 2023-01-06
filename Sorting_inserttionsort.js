/*Sorting algorithms: These algorithms are used to sort a list of items into a particular order. Some examples include bubble sort, insertion sort, and merge sort.

This implementation of insertion sort works by iterating over the elements of the array and inserting each element into its correct position in a sorted subarray. It has a time complexity of O(n^2), which makes it less efficient for large inputs.

*/


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr = [5, 3, 8, 2, 1, 4];
console.log(insertionSort(arr)); // Output: [1, 2, 3, 4, 5, 8]

