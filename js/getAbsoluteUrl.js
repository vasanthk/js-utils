/**
 * getAbsoluteUrl()
 *
 * Dealing with URL formats can be a real nightmare.  Think of how just a few characters can effect a URL's absolute endpoint:
 * starting or not starting with /
 * starting with //
 * starting with ?
 * starting with #...and so on
 * What if you want an absolute URL though?  One that starts with http or https?
 * You can use an A element to get that absolute URL
 *
 * @Reference:
 * http://davidwalsh.name/get-absolute-url
 *
 */

(function () {
  var getAbsoluteUrl = (function () {
    var a;

    return function (url) {
      if (!a) {
        a = document.createElement('a');
        a.href = url;

        return a.href;
      }
    };
  })();

  // Usage
  getAbsoluteUrl('/something'); // http://localhost:3000/something

})();