function solve(number) {
    let array = Array.from(number.toString());
    let arrNumber = array.map(k => Number(k));
    let evenSum = arrNumber.filter(k => k % 2 == 0).reduce((acc, val) => acc + val, 0);
    let oddSum = arrNumber.filter(k => k % 2 != 0).reduce((acc, val) => acc + val, 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

function solve2(number) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < number.toString().length; i++) {
        if(Number(number.toString().charAt(i)) % 2 == 0) {
            evenSum += Number(number.toString().charAt(i));
        } else {
            oddSum += Number(number.toString().charAt(i));
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);