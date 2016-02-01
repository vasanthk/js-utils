/**
 * Flatten Nested array
 *
 * Eg. Input array [1, 2, [3, 4, [5, 6]]]
 * On flattening the array it should output [1, 2, 3, 4, 5, 6]
 *
 * This array can have multiple types: {}, [], "", undefined, null, 123 -- All valid types inside the array.
 *
 * Link:
 * http://stackoverflow.com/a/29158887/1672655
 * https://github.com/facebook/fbjs/blob/master/src/core/flattenArray.js
 */

//CASE 1: Simple and fast!
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function flattenArray(arr, result) {
    if (!result) {
      result = [];
    }

    for (var i = 0; i < arr.length; i++) {
      // Fastest and most efficient way to check if a variable is an array.
      if (Array.isArray(arr[i])) {
        // Note:
        // 1. arr[i].constructor === Array also works -- to check if Array.
        // 2. Constructor check for Array is without string quotes
        flattenArray(arr[i], result);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  console.log(flattenArray(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();


// CASE 2: One liner!
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function flatten(a) {
    return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : [a];
  }

  console.log(flatten(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();

// CASE 3: Compact with ES6 arrow syntax!
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];
  var flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : [a];

  console.log(flatten(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();

// CASE 4: Using ES6 yield
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function *flatten(a) {
    if (Array.isArray(a)) {
      for (var e of a) {
        yield *flatten(e);
      }
    } else {
      yield a;
    }
  }

  console.log(Array.from(flatten(arr))); // Returns [1, 2, 3, 4, 5, 6]
})();

// CASE 5: Hacky way using toString()
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function flatten(array) {
    return array.toString().split(',').map(function (n) {
      return parseInt(n, 10);
    });
  }

  console.log(flatten(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();
