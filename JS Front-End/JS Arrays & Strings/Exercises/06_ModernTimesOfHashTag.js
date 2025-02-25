function findSpecialWords(text) {
    for (let currentWord of text.split(' ')) {
        if(currentWord.startsWith('#') && /[#][a-z]+/.test(currentWord)) {
            console.log(currentWord.split('#')[1].trim());
        }
    }
}

findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');