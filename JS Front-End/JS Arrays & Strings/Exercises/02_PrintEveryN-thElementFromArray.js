function printElementsFromArray(arrayString, step) {
    let resultArray = [];
    let counter = 0;
    for (let i = 0; i < arrayString.length; i+=step) {
        resultArray[counter++] = arrayString[i];
    }
    return resultArray;
}

printElementsFromArray(['5','20','31','4','20'], 2)