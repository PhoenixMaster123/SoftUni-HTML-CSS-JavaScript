function sum(a, b) {
    alert(a + b);
}
function edit() {
   let input = document.getElementById('message'); // get by ID
   let message = input.value
   let element = document.getElementById('title');
   element.textContent += ' ' + message;
}

// getElementsByClassName -> get by class
// getElementsByTagName   -> get by tag