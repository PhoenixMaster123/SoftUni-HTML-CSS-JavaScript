document.addEventListener('DOMContentLoaded', focused);

// Variant 1:
function focused() {
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused');
    }
}

// Variant 2:
/*function focused() {
   document.querySelector('main').addEventListener('focusin', onFocus);
   document.querySelector('main').addEventListener('focusout', onBlur);

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused');
    }

    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused');
    }
}
*/
