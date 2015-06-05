/**
 * matchesSelector()
 *
 * Oftentimes we validate input before moving forward; ensuring a truthy value, ensuring forms data is valid, etc.
 * But how often do we ensure an element qualifies for moving forward?  You can use a matchesSelector function to
 * validate if an element is of a given selector match.
 *
 */

(function () {
  function matchesSelector(el, selector) {
    var p = Element.prototype;
    var f =
      p.matches ||
      p.webkitMatchesSelector ||
      p.mozMatchesSelector ||
      p.msMatchesSelector ||
      function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };
    return f.call(el, selector);
  }

  // Usage
  matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]');

})();