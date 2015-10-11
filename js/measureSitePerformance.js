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
 * http://developer.telerik.com/featured/introduction-navigation-timing-api/
 * http://engineering.tripadvisor.com/wp-content/uploads/2015/08/timing-overview.png
 *
 * Library:
 * https://github.com/addyosmani/timing.js/blob/master/timing.js
 */

window.onload = function () {
  // Check for browser support
  if (!(window.performance && window.performance.timing)) {
    return;
  }
  // Wrap it around a setTimeout to make sure to get it after the load event has ended.
  setTimeout(function () {
    console.log(window.performance.timing);
    console.log(window.performance.navigation);
  }, 0);
};

/**
 * User Timing API
 * Support: IE10+, Android 4.4+
 *
 * Links:
 * http://www.noupe.com/design/using-html5-apis-measure-performance-with-user-and-navigation-timing-87346.html
 * http://www.html5rocks.com/en/tutorials/webperformance/usertiming/
 *
 * "window.performance.now()” method, you can start measurement at any place of the web application,
 * for example, within a script that runs a computationally intensive function.
 * In contrast to the “Date(0)” object, which provides system timing as a time stamp,
 * the User Timing API gives you millisecond accuracy with several decimal places.
 * Analyzing the loading performance of an image.
 */

var measuring_start = window.performance.now();
var measuring_end;
document.getElementsByTagName('img')[0].addEventListener('load', function() {
  measuring_end = window.performance.now();
  console.log('Image load time: ', measuring_end - measuring_start);
}, false);

/**
 * Instead of setting marks with the “now()” method and allocating them a variable,
 * you can use the “mark()” method and give each mark a specific name.
 *
 * “measure()” method then calculates the difference between the two marks.
 */

window.performance.mark('start');
window.performance.mark('end');
window.performance.measure('difference', 'start', 'end');

// To read out the measuring data use the “getEntriesByType()” method. With this method you can determine
// the names as well as the measured, or rather calculated, timings for the marks set with “mark()” and “measure()”.

var marks = window.performance.getEntriesByType('mark');
var measuring_differences = window.performance.getEntriesByType('measure');

console.log(mark[0].name + ': ' + mark[0].startTime);
console.log(mark[1].name + ': ' + mark[1].startTime);
console.log(measuring_differences[0].name + ': ' + measuring_differences[0].duration);