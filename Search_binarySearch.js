/*
Search algorithms: These algorithms are used to search for a particular item in a list. Some examples include linear search and binary search.

This implementation of binary search works by dividing the array in half and searching only in the half that is likely to contain the search key. It repeats this process until the search key is found or it is determined that the search key is not present in the array. This algorithm has a time complexity of O(log n), which makes it more efficient for large inputs than linear search. However, it requires that the array be sorted beforehand.
*/


function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 5)); // Output: 2
console.log(binarySearch(arr, 8)); // Output: -1
