function extractText() {
    // Find all list items
    // Read text content of each list item
    // Accumalate text 
    // Find output element
    // Set result in output element
   let list = document.getElementById('items');
   let childrenElements = list.children;

   let result = [];

   for (let li of childrenElements) {
    result.push(li.textContent);
   }

   let output = document.getElementById('result');
   output.value = result.join('\n');
}