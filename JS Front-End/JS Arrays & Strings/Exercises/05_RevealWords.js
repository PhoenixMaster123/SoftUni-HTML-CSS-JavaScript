// Without Replace
function revealWordsInTheSentence(wordsToReveal, text) {
    let splitedWords = wordsToReveal.split(', ');
    let tokens = text.split(' ');
    let result = [];
    for (let i = 0; i < tokens.length; i++) {
        let currentWord = tokens[i];
        if(currentWord.includes('*')) {
            let foundedWordToReveal = splitedWords.find(w => w.length == currentWord.length);
            result[i] = foundedWordToReveal;
        } else {
            result[i] = currentWord;
        }
    }
    console.log(result.join(' '));
}

// With Replace
function revealWordsInTheSentence2(wordsToReveal, text) {
    let splitedWords = wordsToReveal.split(', ');
    let tokens = text.split(' ');
    for (let i = 0; i < tokens.length; i++) {
        let currentWord = tokens[i];
        if(currentWord.includes('*')) {
            let foundedWordToReveal = splitedWords.find(w => w.length == currentWord.length);
            text = text.replace('*'.repeat(currentWord.length), foundedWordToReveal);
        }
    }
    console.log(text);
}

revealWordsInTheSentence2('great', 'softuni is ***** place for learning new programming languages');