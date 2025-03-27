let visible = false;

function toggle() {
    let content = document.getElementById('extra');
    let button = document.querySelector('.button');
    // Toggle on
    if(button.textContent == 'More') {
        content.style.display = 'block';
        button.textContent = 'Less'
    } else {
    // Toggle off
        content.style.display = 'none';
        button.textContent = 'More'
    }
}
// Variant 2: We don't read from the DOM Tree
function toggle2() {
    let content = document.getElementById('extra');
    let button = document.querySelector('.button');
    // Toggle on
    if(!visible) {
        content.style.display = 'block';
        button.textContent = 'Less'
        visible = true;
    } else {
    // Toggle off
        content.style.display = 'none';
        button.textContent = 'More'
        visible = false;
    }
}