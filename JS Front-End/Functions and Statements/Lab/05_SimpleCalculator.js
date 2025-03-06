function calculateSolution1(numOne, numTwo, operator) {
    switch(operator) {
        case 'add': return numOne + numTwo;
        case 'subtract': return numOne - numTwo;
        case 'multiply': return numOne * numTwo;
        default: return numOne / numTwo;
    }
}

// HashMap
function calculateSolution2(numOne, numTwo, operator) {
    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    };

    return (operations[operator] || operations["divide"])(numOne, numTwo);
}


calculateSolution1(5, 5, 'multiply');