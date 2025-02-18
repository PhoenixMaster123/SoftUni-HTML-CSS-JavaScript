function sumDigits(number) {
    let result = 0;
    let text = number.toString();
    for (let i = 0; i < text.length; i++) {
        result += Number(text.charAt(i));
    }
    return result;
}
console.log(sumDigits(97561));