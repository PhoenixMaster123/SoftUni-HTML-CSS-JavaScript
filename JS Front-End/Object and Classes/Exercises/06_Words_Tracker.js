function occurances(words) {
    let wordToSearch = words[0].split(' ');
    let map = new Map();
    
    for (let word of wordToSearch) {
        map.set(word, 0);
    }

    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        if(map.has(currentWord)) {
            let value = Number(map.get(currentWord));
            map.set(currentWord, value + 1);
        }
    }
    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    for (let entry of sortedMap.entries()) {
        console.log(`${entry[0]} - ${entry[1]}`);
    }
}

occurances(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
    )