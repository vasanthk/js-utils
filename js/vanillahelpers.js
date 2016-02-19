/**
 * Vanilla JS Helpers
 */

// Backward compatible Vanilla JS
// Status constants
var url = "http://swapi.co/api/people/1/";
var DONE = 4;
var OK = 200;
var ajax = new XMLHttpRequest();

ajax.open('GET', url);
ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
ajax.responseType = 'json';
ajax.send();

ajax.onreadystatechange = function () {
  if (ajax.readyState === DONE && ajax.status === OK) {
    console.log(JSON.parse(ajax.responseText));
  }
};

// Create HTML
// Helper function to create an element with attributes
function tag(name, attrs, text) {
  var el = document.createElement(name);

  if (typeof attrs === 'object' && attrs !== null) {
    Object.keys(attrs).forEach(function (key) {
      el.setAttribute(key, attrs[key]);
    });
  }

  if (text && typeof text === 'string') {
    el.textContent = text;
  }

  return el;
}

// Now create some DOM nodes
var li = tag('li', {
  'id': 'unique123',
  'data-id': 123,
  'class': 'item active'
});

var p = tag('p');

// querySelectorAll shorthand
function $(selector) {
  return document.querySelectorAll(selector);
}

// Add text to the paragraph and append it to the list item
p.textContent = 'Lorem ipsum dolor';
li.appendChild(p);

// Append the list item to the body
document.body.appendChild(li);

// Or append it somewhere else
document.getElementById('output-div').appendChild(li);
document.querySelector('.content').appendChild(li);

// Sample: el.parentNode.children[0].classList.remove('active');
// return elem.classList && elem.classList.contains('btn');

// Other DOM methods/props you can use include:
li.innerHTML = 'some html string';
var txt = document.createTextNode('hello');

var my_text = document.createTextNode('Hello!');
var span = document.getElementById('my-span');
span.appendChild(my_text);
// OR
span.textContent = 'hello';
// and more...

// Node.cloneNode(false) - duplicate of the node on which this method was called. (Not its children)
// appendChild() or insertBefore() method to insert the node to the document (End or beginning)
// Create a new, plain <span> element
var sp1 = document.createElement("span");
// Get a reference to the element, before we want to insert the element
var sp2 = document.getElementById("childElement");
// Get a reference to the parent element
var parentDiv = sp2.parentNode;
// Insert the new element into the DOM before sp2
parentDiv.insertBefore(sp1, sp2);

// There is no insertAfter method. It can be emulated by combining the insertBefore method with nextSibling.
parentDiv.insertBefore(sp1, sp2.nextSibling);


// To convert an array-like object to an array, use Array.from()
// ES6
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);


// On ready
// Vanilla JS Version
var domReady = function (callback) {
  document.readyState === "interactive" ||
  document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function () {

});


// Event delegation
// Event delegation
document.addEventListener("click", delegate(buttonsFilter, buttonHandler));

// Common helper for event delegation.
function delegate(criteria, listener) {
  return function (e) {
    var el = e.target;
    do {
      if (!criteria(el)) {
        continue;
      }
      e.delegateTarget = el;
      listener.call(this, e);
      return;
    } while ((el = el.parentNode));
  };
}

// Custom filter to check for required DOM elements
function buttonsFilter(elem) {
  return (elem instanceof HTMLElement) && elem.matches(".btn");
  // OR
  // For < IE9
  // return elem.classList && elem.classList.contains('btn');
}

// Custom event handler function
function buttonHandler(e) {
  var button = e.delegateTarget;
  if (!button.classList.contains("active"))
    button.classList.add("active");
  else
    button.classList.remove("active");
}
// On click
btn.onclick = function () {
  modal.style.display = 'block';
};


// Get siblings
// Example: To toggle open/close in an accordion
acc.nextElementSibling.classList.toggle("show");
var otherAccordions = getSiblings(elem, '.panel');
function getSiblings(elem, matchesSelector) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling instanceof HTMLElement && sibling !== elem && sibling.matches(matchesSelector)) {
      siblings.push(sibling);
    }
  }
  return siblings;
}