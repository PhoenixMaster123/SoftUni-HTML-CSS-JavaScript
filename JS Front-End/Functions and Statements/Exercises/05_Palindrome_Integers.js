function polindromChecker(array) {
    for (let i = 0; i < array.length; i++) {
        let reverseNumber = Array.from(array[i].toString()).reverse().join('');
        if(array[i] == reverseNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

polindromChecker([123,323,421,121]);