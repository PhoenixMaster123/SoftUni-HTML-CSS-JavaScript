window.addEventListener("load", solve);

function solve() {
  let addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', onAdd);

  let deleteBtn = document.querySelector('.btn.clear');
  deleteBtn.addEventListener('click', onClear);

  function onAdd(ev) {
    ev.preventDefault();

    let laptopModel = document.getElementById('laptop-model').value;
    let storage = document.getElementById('storage').value;
    let price = document.getElementById('price').value;

    let list = document.getElementById('check-list');

    if(!laptopModel || !storage || !price) {
      return;
    } 

      let editBtn = create('button', ['edit'], 'btn edit');
      editBtn.addEventListener('click', () => onEdit(laptopModel, storage, price, element));

      let okBtn = create('button', ['ok'], 'btn ok');
      okBtn.addEventListener('click', () => onOk(element));

    let element = create('li', [
      create('article', [
        create('p', laptopModel),
        create('p', `Memory: ${Number(storage)} TB`),
        create('p', `Price: ${Number(price)}$`)
      ]),
      editBtn,
      okBtn
    ], 'laptop-item');

    list.appendChild(element);

    document.querySelector('form').reset();

    addBtn.disabled = true;
  }

  function onEdit(laptopModel, storage, price, element) {
    document.getElementById('laptop-model').value = laptopModel;
    document.getElementById('storage').value = storage;
    document.getElementById('price').value = price;

    element.remove();

    addBtn.disabled = false;
  }

  function onOk(element) {
    let list = document.getElementById('laptops-list');

    let article = element.querySelector('article')
    element.replaceChildren();
    element.appendChild(article);

    list.appendChild(element);

    addBtn.disabled = false;
  }

  function onClear() {
    document.getElementById('laptops-list').replaceChildren();
  }

  function create(tagName, content = [], className) {
    let element = document.createElement(tagName);

    for(let item of content) {
        if(typeof item != 'object') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    if(className) {
        element.className = className;
    }
    return element;
  }
}
  