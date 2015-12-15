/**
 * Given a node from a DOM tree find the node in the same position from an identical DOM tree.
 * Diagrammatic representation below:
 *
 * A         B
 *
 * O        O
 * |\       |\
 * O O      O O
 * /|\      /|\
 * O O O    O O O
 * \        \
 * O        O
 *
 * Link:
 * http://stackoverflow.com/a/19779708/1672655
 *
 * DOM traversal
 * Implementation 1: http://jsfiddle.net/3u8o9twp/2/
 * Implementation 2: http://jsfiddle.net/kpq8thxc/2/
 * Other: http://jsfiddle.net/domenlightenment/xw68Q/
 */

/**
 * Implementation 1
 */

(function () {
  var givenNode = document.getElementById("node1");       // Given node.
  var givenDomRoot = document.getElementById("dom1");     // Given DOM tree root.
  var identicalDomRoot = document.getElementById("dom2"); // Identical DOM tree root.
  var result;

  // Given a node and a tree, extract the nodes path.
  function getPath(node, domRoot) {
    var path = [];
    var current = node;

    while (current !== domRoot) {
      path.unshift(getIndexOf(current.parentNode.childNodes, current));
      current = current.parentNode;
    }
    return path;
  }

  // Given a tree and a path, let's locate a node
  function locateNodeFromIdenticalDom(domRoot, path) {
    var current = domRoot;
    for (var i = 0; i < path.length; i++) {
      current = current.childNodes[path[i]];
    }
    return current;
  }

  // Helper function
  function getIndexOf(arr, val) {
    // call(this, param)
    Array.prototype.indexOf.call(arr, val);
  }

  // Returns the node in the same position as the target node, but in the new tree.
  function getDoppelgangerNode(givenNode) {
    return locateNodeFromIdenticalDom(identicalDomRoot, getPath(givenNode, givenDomRoot));
  }

  // Call it!
  result = getDoppelgangerNode(givenNode, givenDomRoot, identicalDomRoot);
  console.log(result);
})();