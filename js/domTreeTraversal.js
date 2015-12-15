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
 * http://jsfiddle.net/kpq8thxc/2/
 * http://jsfiddle.net/domenlightenment/xw68Q/
 */

(function () {
  var givenNode;       // Given node.
  var givenDomRoot;     // Given DOM tree root.
  var identicalDomRoot; // Identical DOM tree root.

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
  // getDoppelgangerNode(givenNode, givenDomRoot, identicalDomRoot);
})();