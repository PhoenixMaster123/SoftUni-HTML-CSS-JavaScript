/////////////////////////////////////// Creating New DOM Elements ///////////////////////////////

// HTML elements are created with document.createElement (Factory Pattern)

// Example:
// let myDiv = document.createElement('div');

// => Elements are created in memory - they don't exist on the page.
// => To become visible, they must be appended to the DOM Tree

/////////////////////////////////////// Creating A Copy DOM Elements ///////////////////////////////

// Example:
// let li = document.getElementById('my-list');
// let newLi = li.cloneNode(true);

// true  => deep cloning (with the context)
// false => cloning (parent)

/////////////////////////////////////// Append Elements //////////////////////////////////////////

// appendChild => Adds a new child, as the last child

// Example:

// let p = document.createElement("p");
// let li = document.createElement("li");
// li.appendChild(p);

// prepend => Adds a new child, as the first child

// Example:

// let ul = document.getElementById("my-list");
// let li = document.createElement("li");
// ul.prepend(li);

// append => method inserts a set of Node objects or string after the last child of the element

// Diferrence between append and appendChild

// append => Allows you to also append strings, etc., has no return value, can append several nodes and strings.
// appendChild =>  only accept Node objects, returns the appended Node object, can append only one node.

/////////////////////////////////////// Delete DOM Elements //////////////////////////////////////

// removeChild => we remove the child from the parent

// remove => delete the child