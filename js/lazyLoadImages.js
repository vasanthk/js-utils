/**
 * Simple Vanilla JS implementation to lazy load images.
 *
 * @Reference:
 * http://developer.telerik.com/featured/lazy-loading-images-on-the-web/
 */


// Step 1
//
// The first thing is to make sure the images do not load by specifying the image source
// using a data-src attribute rather than placing it in the src.
// <img data-src="images/Robin.jpg" alt="" />
// Note that you may want to add a width and height to your images to ensure that
// they take up the appropriate space. For our sample that isn’t completely necessary.


// Step 2
//
// Test if an image is within the viewport.
// Hint: Use `getBoundingClientRect`
// To use this function, we’d pass an image or an image container and the function will return
// true if the passed element is within the viewport, or false if it is not.

function isElementInViewPort(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Step 3
//
// We need to get all of the images we want to lazy load and then test them
// against this function every time a scroll or change to the viewport occurs.

var throttledLazyLoad = debounce(lazyLoadImages);

//these handlers will be removed once the images have loaded
window.addEventListener("DOMContentLoaded", throttledLazyLoad);
window.addEventListener("load", throttledLazyLoad);
window.addEventListener("resize", throttledLazyLoad);
window.addEventListener("scroll", throttledLazyLoad);

function lazyLoadImages() {
  var images = document.querySelectorAll("img[data-src]");

  images.forEach(function (item) {
    if (isElementInViewPort(item)) {
      item.setAttribute("src", item.getAttribute("data-src"));
      item.removeAttribute("data-src");
    }
  });

  // if all the images are loaded, stop calling the handler
  if (images.length == 0) {
    window.removeEventListener("DOMContentLoaded", throttledLazyLoad);
    window.removeEventListener("load", throttledLazyLoad);
    window.removeEventListener("resize", throttledLazyLoad);
    window.removeEventListener("scroll", throttledLazyLoad);
  }
}

// Helper function to throttle events
function throttle(fn, interval) {
  var wait = false;

  return function () {
    var context = this;
    var args = Array.prototype.slice.call(arguments);
    if (!wait) {
      fn.apply(context, args);
      wait = true;

      setTimeout(function () {
        wait = false;
      }, interval);
    }
  };
}