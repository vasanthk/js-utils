/**
 * Measure site performance using Navigation Timing API
 *
 * Note: The last event in navigation timing event is LoadEventEnd,
 * so you have to wait for the window.onload event to fire before calling any Javascript.
 * Support: IE9+, Android 4.0+, iOS 9+
 *
 * Uses:
 * Network latency (): responseEnd-fetchStart
 * Time taken for page load once the page is received from the server: loadEventEnd-responseEnd
 * Whole process of navigation and page load: loadEventEnd-navigationStart.
 *
 * There are, of course, several ways to "open a page". This is where performance.navigation comes in handy. This API has just two attributes:
 *
 * redirectCount: the number of times the document request was redirected.
 * type: the navigation that lead to the page being loaded.
 *
 * Type is an enumeration with one of three values:
 * 0: action by the user such as clicking a link or entering a URL in the browser address bar
 * 1: page reload
 * 2: navigation by moving back or forward through history
 *
 * Links:
 * http://engineering.tripadvisor.com/html5-navigation-timing/
 * http://www.html5rocks.com/en/tutorials/webperformance/basics/
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
    console.log(window.performance.navigation);
  }, 0);
};