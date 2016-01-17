/**
 * Native JavaScript implementation of getElementsByClassName() -- Polyfill
 *
 * @param node
 * @param classname
 * @returns {*}
 */

function getElementsByClassName(classname) {
  var results = [];
  var elemsUnderCurrNode = this.getElementsByTagName("*"); // 'this' value is the current node referenced
  var r = new RegExp('\\b' + classname + '\\b');  // \b is word separator

  for (var i = 0; i < elemsUnderCurrNode.length; i++) {
    var classNames = elemsUnderCurrNode[i].className;
    if (classNames && r.test(classNames)) {
      results[results.length] = elemsUnderCurrNode[i];
    }
  }
  return results;
}