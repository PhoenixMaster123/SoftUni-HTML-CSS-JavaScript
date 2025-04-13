window.addEventListener("load", solve);

function solve() {

document.getElementById('add_btn').addEventListener('click', onAdd);
    
function onAdd(ev) {
    ev.preventDefault();

    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let phone = document.getElementById('phone').value;

    if(!first_name || !last_name || !phone) {
        return;
    }

    let list = document.getElementById('pending_contact_list');

    let editBtn = create('button', ['Edit'], 'edit_btn');
    editBtn.addEventListener('click', () => onEdit(first_name, last_name, phone, element));

    let verifyBtn = create('button', ['Verify'], 'verify_btn');
    verifyBtn.addEventListener('click', () => onVerify(element));

    let element = create('li', [
        create('span', [`${first_name} ${last_name}`], 'names'),
        create('span', [phone], 'phone_number'),
        editBtn,
        verifyBtn,
    ], 'contact');

    list.appendChild(element);

    document.querySelector('form').reset();
}

function onEdit(first_name, last_name, phone, element) {
    document.getElementById('first_name').value = first_name;
    document.getElementById('last_name').value = last_name;
    document.getElementById('phone').value = phone;

    element.remove();
}

function onVerify(element) {
   const nameSpan = element.querySelector('.names');
   const phoneSpan = element.querySelector('.phone_number');

   while (element.firstChild) {
       element.removeChild(element.firstChild);
   }

   if (nameSpan) {
       element.appendChild(nameSpan);
   }
   if (phoneSpan) {
       element.appendChild(phoneSpan);
   }

   element.className = 'verified_contact';

    let deleteBtn = create('button', 'Delete', 'delete_btn');
    deleteBtn.addEventListener('click', onDelete);
    element.appendChild(deleteBtn);

    let contactList = document.getElementById('contact_list');
    contactList.appendChild(element);
}

function onDelete(ev) {
    ev.target.parentElement.remove();
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
