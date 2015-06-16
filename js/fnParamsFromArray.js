/**
 * A function has 3 params.
 * The values to be passed to the params, are in an array.
 *
 * What is a simple trick to pass the parameters to the function from an array
 *
 * Short Answer: Use fn.apply(null, array);
 *
 */

// In ES5 -- You can use fn.apply()
(function () {
  var arr = [1, 2, 3]; // The array values need to passed to params a, b, c.
  function testFn(a, b, c) {
    // Some logic
  }

  // Use apply() to pass array values as parameters.
  testFn.apply(null, arr);

})();

// In ES6 -- You can use the spread operator (..var)
(function() {
  var arr = [1, 2, 3]; // The array values need to passed to params a, b, c.
  function testFn(a, b, c) {
    // Some logic
  }

  // Use the spread operator (...) in ES6 to pass array values as parameters.
  testFn(...arr);
})();