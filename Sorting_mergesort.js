/*Sorting algorithms: These algorithms are used to sort a list of items into a particular order. Some examples include bubble sort, insertion sort, and merge sort.

This implementation of merge sort works by dividing the array into smaller subarrays, sorting them, and then merging them back together. It has a time complexity of O(n log n), which makes it more efficient for large inputs than bubble sort or insertion sort.*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

let arr = [5, 3, 8, 2, 1, 4];
console.log(mergeSort(arr)); // Output: [1, 2, 3, 4, 5, 8]
