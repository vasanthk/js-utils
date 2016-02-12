/**
 * Object.freze() is shallow.
 * Let's make a deepFreeze() function
 */

obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';

console.log(obj1.internal.a); // aValue

// To make the object fully immutable, freeze each object in obj1
function deepFreeze(obj) {
  // Retrieve the property names defined on obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  propNames.forEach(function (name) {
    var prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop == 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  // Freeze self
  return Object.freeze(obj);
}

// Test deepFreeze
var obj2 = {
  internal: {}
};

deepFreeze(obj2);
obj2.internal.a = 'anotherValue';
console.log(obj2.internal.a); // undefined
