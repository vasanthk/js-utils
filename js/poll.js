/**
 * Polling
 *
 * Sometimes you don't get to plug into an event to signify a desired state --
 * if the event doesn't exist, you need to check for your desired state at intervals.
 *
 * Polling isn't necessarily a consequence of async coding but it has definitely increased in usage
 * and importance due to our desire to write async code.
 *
 * @Reference:
 * http://davidwalsh.name/javascript-polling
 *
 */

// Without Deferred/Promise

(function () {
  function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    (function p() {
      // If the condition is met, we're done!
      if (fn()) {
        callback();
      }
      // If the condition isn't met but the timeout hasn't elapsed
      else if (Number(new Date()) < endTime) {
        setTimeout(p, interval);
      }
      // Didn't match and too much time -- reject!
      else {
        errback(new Error('timed out for ' + fn + ': ' + arguments));
      }
    })();
  }

  // Usage: Ensure element is visible.
  poll(
    function () {
      return document.getElementById('lightbox').offsetWidth > 0;
    },
    function () {
      // Done, success callback
    },
    function () {
      // Error, failure callback
    }
  );

})();


// With Deferred/Promises

(function () {
  function poll(fn, timeout, interval) {
    var dfd = new Deferred();
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    (function p() {
      // If the condition is met, we are done!
      if (fn()) {
        dfd.resolve();
      }
      // If the condition hasn't been met but the timout hasn't elapsed
      else if (Number(new Date() < endTime)) {
        setTimeout(p, interval);
      }
      // Didn't match the criteria and takes too much time -- reject
      else {
        dfd.reject(new Error('timed out for ' + fn + ': ' + arguments));
      }
    })();

    return dfd.promise;
  }

  // Usage: ensure element is visible
  poll(function () {
    return document.getElementById('lightbox').offsetWidth > 0;
  }, 2000, 150);

})();