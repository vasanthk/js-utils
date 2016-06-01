/**
 * once()
 *
 * The function ensure that a given function can be called once and only once, thus preventing duplicate initialization
 *
 * Link: http://sinonjs.org/
 */

// Implementation 1
(function () {
  function once(fn) {
    var returnValue, called = false;
    return function () {
      if (!called) {
        called = true;
        returnValue = fn.apply(this, arguments);
      }
      return returnValue;
    };
  }
})();

// Implementation 2
(function () {
  function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        fn.apply(context || this, arguments);
        fn = null;
      }
      return result;
    };
  }

  // Usage
  var canOnlyFireOnce = once(function () {
    console.log('Fired!');
  });

  canOnlyFireOnce();  // Fired!
  canOnlyFireOnce();  // undefined

})();
