document.addEventListener('DOMContentLoaded', solve);

function solve2() {
   let form = document.getElementById('task-input');
   let inputField = form.querySelector('input[type="text"]');
   let submitButton = form.querySelector('input[type="submit"]');
   let content = document.getElementById('content');

   submitButton.addEventListener('click', onGenerate);

   function onGenerate(event) {
      event.preventDefault();
      content.innerHTML = '';

      let input = inputField.value.split(', ');

      for (let element of input) {
         let div = document.createElement('div');
         let p = document.createElement('p');
   
         p.innerHTML = element;
         div.appendChild(p);
         content.appendChild(div);
      }
   }
}

function solve() {
  // add event listener to submit button

  // event form sumbission
  // find input element and read value
  // parse value to array
  // for every string of array:
  // - create div
  // - create paragraph
  // - set parapraph content
  // - append div and append div to output

  let submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', addContent);

  function addContent(event) {
   event.preventDefault();

   let data = document.querySelector('input[type="text"]').value;
   let sections = data.split(', ');

   let content = document.getElementById('content');
   for (let entry of sections) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = entry;
      div.appendChild(p);
      content.appendChild(div);

   }
  }
}