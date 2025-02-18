function toUpper(sentence) {
    let tokens = sentence.match(/\b\w+\b/g) || []; // extracts only words. | Handles special cases like multiple spaces automatically.
    let result = tokens.map(k => k.toUpperCase()).join(', ');
    console.log(result);
}
toUpper('Hi, how are you?');