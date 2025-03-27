function subtract() {
    let elements = document.querySelectorAll('#wrapper input');
    let substract = Number(elements[0].value) - Number(elements[1].value);

    let result = document.getElementById('result');
    result.textContent = substract;
}

function subtract2() {
    
    let num1 = document.getElementById('firstNumber');
    let num2 = document.getElementById('secondNumber');

    let substract = Number(num1.value) - Number(num2.value);

    let result = document.getElementById('result');
    result.textContent = substract;
}