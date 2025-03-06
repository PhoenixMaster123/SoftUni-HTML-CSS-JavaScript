function checker(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree];

    let negativeCount = arr.filter(num => num < 0).length;

    console.log(negativeCount % 2 == 0 ? 'Positive' : 'Negative');
}
checker(5, 12, -15);