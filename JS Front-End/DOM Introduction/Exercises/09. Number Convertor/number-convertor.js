function solve() {
    let num = Number(document.getElementById('input').value);
    let option = document.getElementById('selectMenuTo').value;

    let result;
    if(option == 'binary') {
        result = num.toString(2)
    } else if(option == 'hexadecimal') {
        result = num.toString(16).toUpperCase();
    }

    document.getElementById('result').value = result;
}