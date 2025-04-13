let host = 'http://localhost:3030/jsonstore/reservations'

document.getElementById('load-history').addEventListener('click', loadReservations);

let createBtn = document.getElementById('add-reservation');
createBtn.addEventListener('click', onCreate);
let editBtn = document.getElementById('edit-reservation');
editBtn.addEventListener('click', onEdit);


async function loadReservations() {
    let reservations = await getAllReservations();

    let list = document.getElementById('list');
    list.replaceChildren();

    for(let entry of reservations) {
    let element = create('div', [
        create('h2', entry.names),
        create('h3', entry.days),
        create('h3', entry.date),
        create('div', [
            create('button', ['Change'], 'change-btn', () => editClick(entry, element)),
            create('button', ['Delete'], 'delete-btn', () => onDelete(entry._id))
        ], 'buttons-container'),
    ], 'container')

    list.appendChild(element);
    }
}

async function onCreate(ev) {
    ev.preventDefault();

    let names = document.getElementById('names').value;
    let days = document.getElementById('days').value;
    let date = document.getElementById('date').value;

    if(!names || !days || !date) {
        return;
    }

    await createReservation(names, days, date);

    document.querySelector('form').reset();

    loadReservations();
}

async function onEdit(ev) {
    ev.preventDefault();

    let names = document.getElementById('names').value;
    let days = document.getElementById('days').value;
    let date = document.getElementById('date').value;
    let _id = editBtn.dataset.id;

    await updateReservation(names, days, date, _id);

    createBtn.disabled = false;
    editBtn.disabled = true;

    document.querySelector('form').reset();

    loadReservations()
}

function editClick(entry, element) {
    document.getElementById('names').value = entry.names;
    document.getElementById('days').value = entry.days
    document.getElementById('date').value = entry.date;
    editBtn.dataset.id = entry._id;

    element.remove();

    createBtn.disabled = true;
    editBtn.disabled = false;
}

async function onDelete(_id) {
    await deleteReservation(_id);

    loadReservations();
}


async function getAllReservations() {
    let res = await fetch(host);

    if(res.status == 204) {
        return [];
    }

    let data = await res.json();

    return Object.values(data);
}

async function createReservation(names, days, date) {
    let record = {
        names,
        days,
        date
    };

    let options = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(record)
    };

    await fetch(host, options);
}

async function updateReservation(names, days, date, _id) {
    let record = {
        names,
        days,
        date,
        _id
    };

    let options = {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(record)
    };

    await fetch(`${host}/${_id}`, options);
}

async function deleteReservation(_id) {
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