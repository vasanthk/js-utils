/**
 * Reverse a String
 *
 * @Reference:
 * 10 ways to Reverse a string: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
 * http://ilikekillnerds.com/2015/07/reversing-a-string-in-javascript-3-different-ways/
 * http://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
 */

// In ES6
var str = 'racecar';
var reversedString = [...str].reverse().join('');

// In ES5
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];
  }
  return o;
}
