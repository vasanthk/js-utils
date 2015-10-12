/**
 * Merge 2 arrays into one.
 *
 *  - Using concat()      -- Create a new toArray.
 *  - Using Array push()  -- Modifies existing array.
 */

(function () {
  // Using concat() - CREATES A NEW ARRAY
  var alpha = ['a', 'b', 'c'];
  var numeric = [1, 2, 3];

  var alphaNumeric = alpha.concat(numeric);

  console.log(alphaNumeric);
  // Result: ['a', 'b', 'c', 1, 2, 3]


  // Using Array prototye push (Efficient): DOES NOT CREATE A NEW ARRAY
  var a1 = [1, 2, 3];
  var a2 = [4, 5, 6];

  Array.prototype.push.apply(a1, a2);
  console.log(a1);
  // Result: [1, 2, 3, 4, 5, 6]


  // array_merge() as a function
  var array_merge = Function.prototype.apply.bind(Array.prototype.push);
  // USAGE
  array_merge(a1, a2);

})();
