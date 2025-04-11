let host = "http://localhost:3030/jsonstore/appointments";

document.getElementById('load-appointments').addEventListener('click', loadAppointments);
let createBtn = document.getElementById('add-appointment');
createBtn.addEventListener('click', addAppointment);
let editBtn = document.getElementById('edit-appointment');
editBtn.addEventListener('click', onEdit);

let deleteBtn = document.getElementById()

async function loadAppointments() {
    let data = await getAllAppointments();

    let list = document.getElementById('appointments-list');
    list.replaceChildren();

    for (let entry of data) {
        let element = create('li', [
            create('h2', [entry.model]),
            create('h3', [entry.service]),
            create('h3', [entry.date]),
            create('div', [
                create('button', ['Change'], 'change-btn', () => editClick(entry, element)),
                create('button', ['Delete'], 'delete-btn', () => onDelete(entry._id))
            ])
        ], 'appointment');

        list.appendChild(element);
    }
}

async function addAppointment(ev) {
    ev.preventDefault();

    let model = document.getElementById('car-model').value;
    let service = document.getElementById('car-service').value;
    let date = document.getElementById('date').value;

    await createAnAppointment(model, service, date);

    document.querySelector('form').reset();

    loadAppointments();
}

async function onEdit(ev) {
    ev.preventDefault();

    let _id = editBtn.dataset.id;
    let model = document.getElementById('car-model').value;
    let service = document.getElementById('car-service').value;
    let date = document.getElementById('date').value;

    await updateAnAppointment(_id, model, service, date);

    createBtn.disabled = false;
    editBtn.disabled = true;

    document.querySelector('form').reset();

    loadAppointments();
}

function editClick(entry, element) {
    editBtn.dataset.id = entry._id
    document.getElementById('car-model').value = entry.model;
    document.getElementById('car-service').value = entry.service;
    document.getElementById('date').value = entry.date;

    element.remove();

    createBtn.disabled = true;
    editBtn.disabled = false;
}

async function onDelete(_id) {
    await deleteAnAppointment(_id);
    loadAppointments();
}


async function getAllAppointments() {
    let res = await fetch(host);

    if(res.status == 204) {
        return [];
    }
    let data = await res.json();

    return Object.values(data);
}

async function createAnAppointment(model, service, date) {
    let record = {
        model,
        service,
        date
    };

    let options = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(record)
    };

    await fetch(host, options);
}

async function updateAnAppointment(_id, model, service, date) {
    let record = {
        _id,
        model,
        service,
        date
    };
    let options = {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(record)
    };
    await fetch(`${host}/${_id}`, options);
}

async function deleteAnAppointment(_id) {
    await fetch(`${host}/${_id}`, {method: 'delete'});
}

function create(tagName, content = [], className, callback) {
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
    if(typeof callback == 'function') {
        element.addEventListener('click', callback);
    }
    return element;
}