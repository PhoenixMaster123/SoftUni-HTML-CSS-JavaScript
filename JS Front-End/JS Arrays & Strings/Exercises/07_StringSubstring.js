function findASubstring(word, text) {
    text = text.toLowerCase();
    let tokens = text.split(' ');

    if(tokens.includes(word)) {
        console.log(tokens.find(w => w == word));
    } else {
        console.log(`${word} not found!`);
    }
}

findASubstring('javascript', 'JavaScript is the best programming language');
findASubstring('python', 'JavaScript is the best programming language');