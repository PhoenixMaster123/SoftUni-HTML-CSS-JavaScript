function solve() {
   let tableRows = document.querySelectorAll('.container tbody tr');
   let input = document.getElementById('searchField');

   let pattern = input.value;

   if(!pattern) {
      return;
   }

   for (let row of tableRows) {
      if(row.textContent.includes(pattern)) {
         row.classList.add('select');
      } else {
         row.classList.remove('select');
      }
   }
   input.value = '';
}

function solve2() {
   document.querySelectorAll('.select').forEach(el => el.classList.remove('select'));

   let searchField = document.querySelectorAll('tbody tr');
   let searchText = document.getElementById('searchField')

   if (!searchText || searchText.value.trim() === '') {
      return;
   }
   
   for (let field of searchField) {
      if(field.textContent.toLowerCase().includes(searchText.value.toLowerCase())) {
         field.classList.add('select');
      }
   }

   searchText.value = '';
}