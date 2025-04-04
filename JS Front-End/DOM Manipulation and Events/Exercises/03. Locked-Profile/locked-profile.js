document.addEventListener('DOMContentLoaded', solve);

function solve2() {
   let buttons = Array.from(document.querySelectorAll('button'));

   for (let btn of buttons) {
        btn.addEventListener('click', toggleText);
   }

   function toggleText(ev) {
    let profile = ev.target.parentElement;

    let isLocked = profile.querySelector('[type="radio"]').checked;

    if(isLocked) {
        return;
    }

    let info = profile.querySelector('.hidden-fields');

    if(info.style.display == 'block') {
        info.style.display = 'none';
        ev.target.textContent = 'Show more';
    } else {
        info.style.display = 'block';
        ev.target.textContent = 'Show less';
    }
   }
}
// Variant 2:
function solve() {
    let profiles = Array.from(document.getElementsByClassName('profile'));

    for (let profile of profiles) {
        let userLocked = profile.querySelector('input[id$="Lock"]'); // Selector for Content (get the element that contains Lock)
        let userUnlocked = profile.querySelector('input[id$="Unlock"]');
        let showMore = profile.querySelector('button');
        let hiddenFields = profile.querySelector('.hidden-fields');

        showMore.addEventListener('click', handleShowMore);

        function handleShowMore() {
            if(userUnlocked.checked) {
                if(hiddenFields.style.display == 'none') {
                    hiddenFields.style.display = 'block';
                    showMore.textContent = 'Show less'
                } else {
                    hiddenFields.style.display = 'none';
                    showMore.textContent = 'Show more';
                }
            }
        }
    }
 }