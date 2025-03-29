// Event object

// Calls its associated function

// Passes a single argumentto the function - a reference to the event object

// Contains properties that describe the event
// => Which element triggered the event 
// => Screen coordinates where it occurred
// => What is the type of the event  


///////////////////////////////////// Event Types in DOM API///////////////////////////////////////

// Mouse events:
// click, mouseover, mouseout, mousedown, mouseup

// Touch events:
// touchstart, touchend, touchmove, touchcancel

// DOM / UI events 
// load, unload, resize, dragstart / drop

// Keyboards events:
// keydown, keyup, keypress

// Focus events:
// focus (got focus), blur (lost focus)

// Form events:
// input, change, submit, reset

// and more....

// Event Handler:

// => Event Listener:

// addEventListener() => create an event

// Example:
// htmlRef.addEventListener('click', handler); click = event, handler = function

// removeEventListener() => remove event

//////////////////////////////////////////////////////////////////////////////////////////////////

// In event handlers, this refers to the event source element

// Example:

// element.addEventListener('click', function(e)) {
// consolo.log(this == e.currentTarget); // Always true
//});

///////////////////////////////////////////// Event Propagation //////////////////////////////////
//<div class="orange">
// <div class="green">
// <div class="yellow">He-he</div>
// </div>
//</div>

//.orange { background: orange; }
//.green { background: green; }
//.yellow { background: yellow; }

//const divElements = document.querySelectorAll("div");
//function logText(e) {
// console.log(this, "clicked"); // currentTarget element
//}
//divElements.forEach((el) => el.addEventListener("click", logText));