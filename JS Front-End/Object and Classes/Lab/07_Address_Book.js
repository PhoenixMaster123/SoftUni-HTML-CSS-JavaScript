function sort(data) {
    let phoneBook = {};
    for (let key of data) {
       let [name, address] = key.split(':');

       phoneBook[name] = address;
    }

    let entries = Object.entries(phoneBook);
    entries.sort(compare);
    let sorted = Object.fromEntries(entries);

    for (const key in sorted) {
        console.log(`${key} -> ${sorted[key]}`);
    }

    function compare(a, b) {
        return a[0].localeCompare(b[0]);
    }
}

sort(['Tim:Doe Crossing',

    'Bill:Nelson Place',
    
    'Peter:Carlyle Ave',
    
    'Bill:Ornery Rd']);