function sortNumbers(arrayNumbers) {
    arrayNumbers.sort((a, b) => a - b);
    let resultArray = [];
    let counter = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if(i % 2 == 0) {
            resultArray[i] = arrayNumbers[counter++];
        } else {
            resultArray[i] = arrayNumbers[arrayNumbers.length - counter];
        }
    }
    return resultArray;
} 

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);