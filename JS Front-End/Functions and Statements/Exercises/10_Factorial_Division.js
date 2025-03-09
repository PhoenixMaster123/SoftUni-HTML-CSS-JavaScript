function divideFact(num1, num2) {
    function fact(num) {
        if(num == 1) {
            return num;
        }
        return num * fact(num - 1);
    }
    let fact1 = fact(num1);
    let fact2 = fact(num2);

    console.log((fact1 / fact2).toFixed(2));
}
divideFact(5, 2);