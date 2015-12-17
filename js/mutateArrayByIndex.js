/**
 *  Given an input array and another array that describes a new index for each
 *  element, mutate the input array so that each element ends up in their new
 *  index. Discuss the runtime of the algorithm and how you can be sure there
 *  won't be any infinite loops.
 */

// MY SOLUTION
var arr = [1, 4, 2, 3, 5];
var indexArr = [0, 2, 3, 1, 4];
var arrCopy = arr.slice();  // Copy array by value

console.log(mutateArray(arr, indexArr));

var currVal, newVal;

function mutateArray(arr, indexArr) {
  for (var i = 0; i < indexArr.length; i++) {
    currVal = arr[i];
    newVal = arrCopy[indexArr[i]];

    // If same value, no need to mutate.
    if (currVal !== newVal) {
      arr[i] = newVal;
    }
  }
  return arr;
}

// ALTERNATE SOLUTION
var arr = [1, 4, 2, 3, 5];
var indexArr = [0, 2, 3, 1, 4];

console.log(mutateArray(arr, indexArr));

function mutateArray(input, specArr) {
  var visited = []
  for (var i = 0; i < specArr.length; i++) {
    var tmp;
    //keep track of array items we've already looped through (wouldn't want to mutate twice :D)
    visited.push(specArr[i]);
    // if index hasn't changed we do nothing to input arr
    if (visited.indexOf(1) < 0) {
      // if it has changed temporarily store the value
      tmp = input[i];
      //swap input array item with spec item
      input[i] = input[specArr[i]];
      //swap specced array item with input item above
      input[specArr[i]] = tmp;
    }
  }
  return input;
}