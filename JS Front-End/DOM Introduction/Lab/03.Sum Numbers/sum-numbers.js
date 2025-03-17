function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let calc = Number(num1.value) + Number(num2.value);
    let result = document.getElementById('sum');
    result.value = calc;
}