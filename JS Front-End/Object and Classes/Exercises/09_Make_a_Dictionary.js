function createDictionary(data) {
    let map = new Map();
    for (let word of data) {
        let obj = JSON.parse(word);
    
        for (let [term, definition] of Object.entries(obj)) {
           map.set(term, definition)
        }
    }
    let sortedMap = new Map([...map.entries()].sort());

    for (let el of sortedMap.entries()) {
        console.log(`Term: ${el[0]} => Definition: ${el[1]}`);
    }
}

createDictionary(
    [
     '{"Coffee":"A hot drink madefrom the roasted and ground seeds (coffee beans) of a tropical shrub."}',
     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
)