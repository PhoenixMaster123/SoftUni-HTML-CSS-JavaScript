function addItem() {
    let input = document.getElementById('newItemText')
    let text = input.value

    if(!text) {
        return;
    }

    let newElement = document.createElement('li');
    newElement.textContent = text;

    let list = document.getElementById('items');
    list.appendChild(newElement);

    input.value = '';
}
