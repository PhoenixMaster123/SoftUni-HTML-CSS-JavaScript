window.addEventListener("load", solve);

function solve() {
    document.getElementById('save').addEventListener('click', onSave);
    document.querySelector('.delete').addEventListener('click', OnDelete);

    function onSave(ev) {
        ev.preventDefault();

        let event = document.getElementById('event').value;
        let note = document.getElementById('note').value;
        let date = document.getElementById('date').value;

        if(!event || !note || !date) {
            return;
        }

        let editBtn = create('button', ['Edit'], 'btn edit');
        editBtn.addEventListener('click', () => onEdit(event, note, date, element));

        let doneBtn = create('button', ['Done'], 'btn done');
        doneBtn.addEventListener('click', () => onDone(element));

        let element = create('li', [
            create('div', [
                create('article', [
                    create('p', `Name: ${event}`),
                    create('p', `Note: ${note}`),
                    create('p', `Date: ${date}`),
                ]),
                create('div', [
                    editBtn,
                    doneBtn
                ], 'buttons')
            ], 'event-container')
        ], 'event-item'); 

        let list = document.getElementById('upcoming-list');
        list.appendChild(element);

        document.querySelector('form').reset();
    }

    function onEdit(event, note, date, element) {
        document.getElementById('event').value = event;
        document.getElementById('note').value = note;
        document.getElementById('date').value = date;

        element.remove();
    }

    function onDone(element) {
        let article = document.querySelector('article');
        element.replaceChildren();
        element.appendChild(article);

        let list = document.getElementById('events-list');
        list.appendChild(element);
    }

    function OnDelete() {
        document.getElementById('events-list').replaceChildren();
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
// Structure to build:
/*
            <li class="event-item">
              <div class="event-container">
                <article>
                <p>Name: IMAGINE DRAGONS</p>
                  <p>Note: Vasil Levski National Stadium, Sofia</p>
                  <p>Date: 2023-07-30</p>
              </article>
                <div class="buttons">
                  <button class="btn edit">Edit</button>
                  <button class="btn done">Done</button>
                </div>
              </div>
            </li>
*/


