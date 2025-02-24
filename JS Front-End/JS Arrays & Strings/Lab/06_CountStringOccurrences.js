function solve(text, word) {
    let count = text
    .split(' ')
    .filter(k => k === word).length;
    console.log(count);
}

sentence.match(/\b\w+\b/g) || []

function solve2(text, word) {
    let count = (text.match(/\b\w+\b/g) || [])
    .filter(w => w === word).length;
    
    console.log(count);

}

solve2('This is a word and it also is a sentence','is')