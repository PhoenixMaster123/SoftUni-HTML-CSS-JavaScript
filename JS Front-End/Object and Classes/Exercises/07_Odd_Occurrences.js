function oddOccurances(sentence) {
    let set = new Set();
    let words = sentence.split(' ').map(k => k.toLowerCase());

    function count(el) {
        let counter = 0;
        for (let ele of words) {
            if(ele == el) {
                counter++;
            }
        }
        return counter;
    }

    for (let element of words) {
        let elementCounter = count(element);
        if(elementCounter % 2 != 0) {
           set.add(element);
        }
   }
   let result = '';
   for (let el of set) {
    result += el + ' ';
   }
   console.log(result.trim());
}

function oddOccurances2(sentence) {
    let set = new Set();
    let words = sentence.split(' ').map(k => k.toLowerCase());

    for (let element of words) {
        let elementCounter = words.filter(k => element == k).length;
        if(elementCounter % 2 != 0) {
           set.add(element);
        }
   }
   let result = '';
   for (let el of set) {
    result += el + ' ';
   }
   console.log(result.trim());
}

oddOccurances2('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');