/*
Search algorithms: These algorithms are used to search for a particular item in a list. Some examples include linear search and binary search.

This implementation of linear search works by iterating over the elements of the array and returning the index of the first element that matches the search key. If the search key is not found, it returns -1. This algorithm has a time complexity of O(n), which makes it less efficient for large inputs.
*/


function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 3, 5, 7, 9];
console.log(linearSearch(arr, 5)); // Output: 2
console.log(linearSearch(arr, 8)); // Output: -1