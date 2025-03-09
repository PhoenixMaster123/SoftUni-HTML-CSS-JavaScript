function min(num1, num2, num3) {
    let arr = [num1, num2, num3];

    let minNum = Math.min(...arr);
    console.log(minNum);
}

min(2, 5, 3);