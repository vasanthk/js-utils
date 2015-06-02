/**
 * Flatten Nested array
 *
 * Eg. Input array [1, 2, [3, 4, [5, 6]]]
 * On flattening the array it should output [1, 2, 3, 4, 5, 6]
 *
 */

(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function flattenArray(arr, result) {
    if (!result) {
      result = [];
    }

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].constructor === Array) { // Fastest and most effecient way to check if a variable si an array.
        flattenArray(arr[i], result);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  console.log(flattenArray(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();
