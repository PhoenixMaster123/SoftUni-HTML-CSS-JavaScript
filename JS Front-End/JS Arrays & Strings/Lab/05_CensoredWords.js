// Variant 1 with replaceAll
function solve(sentence, word) {
    let censored = sentence.replaceAll(word, '*'.repeat(word.length));
    console.log(censored);
}

// Variant 2 without replaceAll
function solve2(sentence, word) {
    while(sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(word.length));
    }
    console.log(sentence);
}

// Variant 3 with map
function solve3(sentence, word) {
    sentence = sentence
      .split(' ')
      .map(w => w === word ? '*'.repeat(word.length) : w)
      .join(' ');
  
    console.log(sentence);
  }


solve3('A small sentence with some small words', 'small')