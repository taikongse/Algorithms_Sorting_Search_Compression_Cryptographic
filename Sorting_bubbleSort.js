/*Sorting algorithms: These algorithms are used to sort a list of items into a particular order. Some examples include bubble sort, insertion sort, and merge sort.

This implementation of bubble sort works by comparing adjacent elements in the array and swapping them if they are out of order. It repeats this process until the array is sorted. This algorithm has a time complexity of O(n^2), which makes it less efficient for large inputs.*/

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [5, 3, 8, 2, 1, 4];
console.log(bubbleSort(arr)); // Output: [1, 2, 3, 4, 5, 8]