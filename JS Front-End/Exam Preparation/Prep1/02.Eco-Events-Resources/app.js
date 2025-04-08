window.addEventListener("load", solve);

function solve() {
  
  let submitBtn = document.getElementById('next-btn');
  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(ev) {
    ev.preventDefault();

    let email = document.getElementById('email').value;
    let event = document.getElementById('event').value;
    let location = document.getElementById('location').value;

    if(!email || !event || !location) {
      return; 
    }
    let result = create('li', [
      create('article', [
        create('h4', [email]),
          create('p', [
            create('strong', ['Event:']),
              create('br', []),
          event
        ]),
        create('p', [
          create('strong', ['Location:']),
            create('br', []),
          location
        ]),
      ]),
    ]);

    let editBtn = create('button', ['edit']);
    editBtn.className = 'action-btn edit';

    editBtn.addEventListener('click', () => onEdit(email, event, location));

    result.appendChild(editBtn);

    let applyBtn = create('button', ['apply']);
    applyBtn.className = 'action-btn apply';

    applyBtn.addEventListener('click', () => onApply(result));

    result.appendChild(applyBtn);

    result.className = 'application';

    let list = document.getElementById('preview-list');
    list.appendChild(result);

    document.querySelector('.registerEvent').reset();
    submitBtn.disabled = true;
  
  }

  function onEdit(email, event, location) {
    document.getElementById('email').value = email;
    document.getElementById('event').value = event;
    document.getElementById('location').value = location;

    submitBtn.disabled = false;

    document.getElementById('preview-list').innerHTML.replaceChildren();

  }
  function onApply(element) {
    document.getElementById('event-list').appendChild(element);
    let btns = Array.from(element.querySelectorAll('button'));

    for(let btn of btns) {
      btn.remove();
    }
    submitBtn.disabled = false;
  }
 

  function create(tagName, content) { // content => array
    let element = document.createElement(tagName);
   
    for(let child of content) {

      if(typeof child == 'object') {

        element.appendChild(child);

      } else {

        let node = document.createTextNode(child);

        element.appendChild(node);
      }
    }

    return element;
  }
}
