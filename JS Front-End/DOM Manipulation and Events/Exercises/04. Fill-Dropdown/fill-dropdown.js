document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let button = document.querySelector('input[type="submit"]');

    button.addEventListener('click', addOption);

    function addOption(event) {
        event.preventDefault();

        let text = document.getElementById('newItemText').value;
        let value = document.getElementById('newItemValue').value;

        let option = document.createElement('option');
        option.textContent = text;
        option.value = value;

        document.getElementById('menu').appendChild(option);

        text = document.getElementById('newItemText').value = '';
        value = document.getElementById('newItemValue').value = '';
    }
}
// Variant 2:
function solve2() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        let form = event.target;
        let textElement = document.getElementById("newItemText");
        let valueElement = document.getElementById("newItemValue");
    
        let text = textElement.value.trim();
        let value = valueElement.value.trim();
    
        if (text === "" || value === "") {
            alert("Both fields must be filled!");
            return;
        }
    
        let option = document.createElement("option");
        option.textContent = text;
        option.value = value;
    
        document.getElementById("menu").appendChild(option);
    
        form.reset(); // Reset the form fields
    });
}