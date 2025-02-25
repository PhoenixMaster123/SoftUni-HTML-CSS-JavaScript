function printNames(arrayNames) {
    arrayNames.sort((a, b) => a.localeCompare(b)); // Case-insensitive sorting
    let counter = 1;
    for (let i = 0; i < arrayNames.length; i++) {
        console.log(`${counter++}.${arrayNames[i]}`);
    }
}

printNames(["John","Bob","Christina","Ema"]);