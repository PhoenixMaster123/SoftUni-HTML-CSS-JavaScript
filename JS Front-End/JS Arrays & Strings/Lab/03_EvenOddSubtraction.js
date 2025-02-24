// Variant 1:
function solve(array) {
    let evenSum = array.filter(k => k % 2 == 0).reduce((acc, val) => acc + val, 0); // accumulator + currentValue, initialValue,
    let oddSum = array.filter(k => k % 2 != 0).reduce((acc, val) => acc + val, 0);
    console.log(evenSum - oddSum);
}
// Variant 2:
function solve2(array) {
    let evenSum = 0;
    let oddSum = 0;
    array.forEach(element => {
        if(element % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    });
    console.log(evenSum - oddSum);
}

solve2([1,2,3,4,5,6]);