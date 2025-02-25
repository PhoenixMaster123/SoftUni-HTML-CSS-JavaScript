function splitTheString(text) {
    let result = [];
    let endIndex = 1;
    let arrCounter = 0;
    let startIndex = 0;
    for (let i = 1; i < text.length; i++) {
        if(text.charAt(i) == text.charAt(i).toUpperCase() && text.charAt(i).charAt(i) != text.charAt(i).toLowerCase()) {
            let word = text.substring(startIndex, startIndex + endIndex);
            result[arrCounter++] = word; 
            startIndex = i;
            endIndex = 1;
        } else {
            endIndex++;
        }
    }
    result[arrCounter] = text.substring(startIndex);
    console.log(result.join(', '));
}


function splitTheString2(text) {
    let result = text.split('').reduce((acc, char) => {
        if (char === char.toUpperCase() && char !== char.toLowerCase() && acc.length > 0) {
            acc.push(char);
        } else {
            acc[acc.length - 1] += char;
        }
        return acc;
    }, ['']); // Initial value with an empty string
    result.shift(0);
    console.log(result.join(', '));
}

splitTheString2('SplitMeIfYouCanHaHaYouCantOrYouCan');