/**
 * Measure site performance using Navigation Timing API
 *
 * Note: The last event in navigation timing event is LoadEventEnd,
 * so you have to wait for the window.onload event to fire before calling any Javascript.
 * Support: IE9+, Android 4.0+, iOS 9+
 *
 * Links:
 * http://engineering.tripadvisor.com/html5-navigation-timing/
 * http://engineering.tripadvisor.com/wp-content/uploads/2015/08/timing-overview.png
 */

window.onload = function () {
  // Check for browser support
  if (!(window.performance && window.performance.timing)) {
    return;
  }
  // Wrap it around a setTimeout to make sure to get it after the load event has ended.
  setTimeout(function() {
    console.log(window.performance.timing);
  }, 0);
};