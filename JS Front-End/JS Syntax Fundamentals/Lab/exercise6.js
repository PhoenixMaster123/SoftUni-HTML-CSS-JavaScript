function largestNumber(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        console.log(`The largest number is ${num1}.`);
    } else if(num2 > num1 && num2 > num3) {
        console.log(`The largest number is ${num2}.`);
    } else {
        console.log(`The largest number is ${num3}.`);
    }
}

largestNumber(-3, -5, -22.5); // The largest number is -3.