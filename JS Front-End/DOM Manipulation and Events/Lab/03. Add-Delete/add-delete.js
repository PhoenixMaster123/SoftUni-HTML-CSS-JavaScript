function addItem() {
    let input = document.getElementById('newItemText')
    let text = input.value

    if(!text) {
        return;
    }

    let newElement = document.createElement('li');
    newElement.textContent = text;

    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]'
    deleteBtn.addEventListener('click', onDelete);

    newElement.appendChild(deleteBtn);

    let list = document.getElementById('items');
    list.appendChild(newElement);

    input.value = '';

    function onDelete(event) {
        let item = event.target.parentElement;
        item.remove()
    }
}
