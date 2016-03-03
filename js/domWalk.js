/**
 * Walk through all elements in the DOM
 *
 * @Reference:
 * https://www.kirupa.com/html5/traversing_the_dom.htm
 *
 * @param node
 */

function walkTheDOM(node) {
  if (node.nodeType == 1) {
    //console.log(node.tagName);
    node = node.firstChild;

    while (node) {
      walkTheDOM(node);
      node = node.nextSibling;
    }
  }
}

// Example usage: Process all Text nodes on the page
walkTheDOM(document.body, function (node) {
  if (node.nodeType === 3) { // Is it a Text node?
    var text = node.data.trim();
    if (text.length > 0) { // Does it have non white-space text content?
      // process text
    }
  }
});