function range(ch1, ch2) {
    function checker(ch1, ch2) {
        if(ch1.charCodeAt(0) > ch2.charCodeAt(0)) {
            return [ch2, ch1];
        } else {
            return [ch1, ch2];
        }
    }
    let checkPlaces = checker(ch1, ch2);

    let rangeResult = '';

    for (let i = checkPlaces[0].charCodeAt(0) + 1; i < checkPlaces[1].charCodeAt(0); i++) {
        rangeResult += String.fromCharCode(i) + ' ';        
    }
    console.log(rangeResult.trim());
}

range('a', 'd');
range('#', ':');
range('C', '#');