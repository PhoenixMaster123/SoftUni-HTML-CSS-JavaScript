function solve(num1, num2, num3) {
    function add(num1, num2) {
        return num1 + num2;
    }
    function substract(result, num3) {
        return result - num3;
    }

    let result = add(num1, num2);
    console.log(substract(result, num3));
}

solve(23, 6, 10);