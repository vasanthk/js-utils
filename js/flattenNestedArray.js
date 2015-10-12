/**
 * Flatten Nested array
 *
 * Eg. Input array [1, 2, [3, 4, [5, 6]]]
 * On flattening the array it should output [1, 2, 3, 4, 5, 6]
 *
 * Link: http://stackoverflow.com/a/29158887/1672655
 */

//CASE 1: Simple and fast!
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function flattenArray(arr, result) {
    if (!result) {
      result = [];
    }

    for (var i = 0; i < arr.length; i++) {
      // Fastest and most effecient way to check if a variable is an array.
      if (arr[i].constructor === Array) {
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

// CASE 3: Compact with ES6 syntax!
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];
  var flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : [a];

  console.log(flatten(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();

// CASE 4: Using ES7 async function (yield)
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