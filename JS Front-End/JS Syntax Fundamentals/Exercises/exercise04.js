function printAndSumNumbers(start, end) {
    let result = 0;
    let printResult = '';
    for(let i = start; i <= end; i++) {
        result += i;
        printResult += i + ' ';
    }
    console.log(printResult.trim());
    console.log(`Sum: ${result}`);
}
// Example:
printAndSumNumbers(5, 10) // -> 45