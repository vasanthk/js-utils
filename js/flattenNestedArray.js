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
 * http://www.jstips.co/en/flattening-multidimensional-arrays-in-javascript/
 *
 * Iterative Solution works good for large arrays as it prevents the stack from overflowing
 * http://stackoverflow.com/questions/29991016/iterative-solution-for-flattening-n-th-nested-arrays-in-javascript
 * http://blog.benoitvallon.com/tips/flattening-arrays-in-javascript/
 *
 * Tail call optimization
 * http://programmers.stackexchange.com/questions/194646/what-methods-are-there-to-avoid-a-stack-overflow-in-a-recursive-algorithm
 */

//CASE 1: Recursive Solution: Simple and fast!
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

// CASE 2: Iterative solution - For large arrays it avoids stack overflow caused by recursive calls
// Link: http://stackoverflow.com/a/29991836/1672655
(function () {
  var input = [1, {a: 2}, [3], [[4, 5], 6], 7];

  function flatten(input) {
    var placeholder = [input];
    var lastIndex = [-1];
    var output = [];
    var i;

    while (placeholder.length) {
      input = placeholder.pop();
      i = lastIndex.pop() + 1;

      for (; i < input.length; i++) {
        if (Array.isArray(input[i])) {
          placeholder.push(input);
          lastIndex.push(i);
          input = input[i];
          i = -1;
        } else {
          output.push(input[i]);
        }
      }
    }
    return output;
  }

  console.log('Flattened array: ', flatten(input));
})();

// CASE 3: Clever iterative solution (Less performant than Case 2)
// Link: http://stackoverflow.com/a/29991996/1672655
(function() {
  var input = [1, {a: 2}, [3], [[4, 5], 6], 7];
  var output = input;

  while(output.some(Array.isArray)) {
    output = [].concat.apply([], output);
    // Array tricks: http://www.2ality.com/2012/07/apply-tricks.html
  }

  console.log('Flattened array: ', output);
})();

// CASE 4: One liner!
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function flatten(a) {
    return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : [a];
  }

  console.log(flatten(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();

// CASE 5: Compact with ES6 arrow syntax!
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];
  var flatten = a => Array.isArray(a) ? [].concat(...a.map(flatten)) : [a];

  console.log(flatten(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();

// CASE 6: Using ES6 yield
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

// CASE 7: Hacky way using toString()
(function () {
  var arr = [1, 2, [3, 4, [5, 6]]];

  function flatten(array) {
    return array.toString().split(',').map(function (n) {
      return parseInt(n, 10);
    });
  }

  console.log(flatten(arr)); // Returns [1, 2, 3, 4, 5, 6]
})();
