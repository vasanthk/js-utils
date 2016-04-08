/**
 * Throttle Events
 *
 * Throttling is a means by which we can limit the number of times a function can be called in a given period. For instance, we may have a method that should be called no more than 5 times per second.
 *
 * @Reference:
 * http://sampsonblog.com/749/simple-throttle-function
 * http://drupalmotion.com/article/debounce-and-throttle-visual-explanation
 * https://remysharp.com/2010/07/21/throttling-function-calls
 * http://stackoverflow.com/a/27078401/1672655
 * https://css-tricks.com/debouncing-throttling-explained-examples/
 */

(function () {
  // Allow callback to run at most 1 time per 100ms
  window.addEventListener("resize", throttle(callback, 100));
  // Allow callback to run on each resize event
  window.addEventListener("resize", callback2);

  function callback() {
    console.count("Throttled");
  }

  function callback2() {
    console.count("Not Throttled");
  }

  function throttle(callback, limit) {
    var wait = false;                   // Initially, we're not waiting
    return function () {                // We return a throttled function
      if (!wait) {                      // If we're not waiting
        callback.call();                // Execute users function
        wait = true;                    // Prevent future invocations
        setTimeout(function () {        // After a period of time
          wait = false;                 // And allow future invocations
        }, limit);
      }
    }
  }
})();