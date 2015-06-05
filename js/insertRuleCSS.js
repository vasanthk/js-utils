/**
 * We all know that we can grab a NodeList from a selector (via document.querySelectorAll) and give each of them a style,
 * but what's more efficient is setting that style to a selector (like you do in a stylesheet)
 *
 * This is especially useful when working on a dynamic, AJAX-heavy site.  If you set the style to a selector,
 * you don't need to account for styling each element that may match that selector (now or in the future).
 *
 * @Reference:
 * http://davidwalsh.name/add-rules-stylesheets
 *
 */

(function () {
  var sheet = (function () {
    // Create <style> tag
    var style = document.createElement('style');

    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute('media', 'screen')
    // style.setAttribute('media', 'only screen and (max-width : 1024px)')

    // Webkit hack :-/
    style.appendChild(document.createTextNode(''));

    // Add the <style> element to the page
    document.head.appendChild(style);
    return style.sheet;
  })();

  // Usage
  sheet.insertRule('header { float: left; opacity: 0.8; }', 1);
  // Stylesheets have an insertRule method which isn't available in earlier IE's but is now the standard for rule injection.
  // The second argument, the index, represents the index at which to insert the rule.
  // This is helpful so that you can insert the same rule/code and define which wins out.
  // The default for index is -1, which means the end of the collection.

})();