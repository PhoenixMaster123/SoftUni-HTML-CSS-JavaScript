function phoneBook(data) {
    let phoneBook = {};

    for (let item of data) {
        let [name, phone] = item.split(' ');

        phoneBook[name] = phone;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`)
    }
}

function phoneBook2(data) {

    return Object.entries(Object.fromEntries(data.map(i => i.split(' ')))).
    map(([key, value]) => `${key} -> ${value}`).join('\n');
   
}

phoneBook2(['Tim 0834212554',

    'Peter 0877547887',
    
    'Bill 0896543112',
    
    'Tim 0876566344'])

    console.log(phoneBook2(['Tim 0834212554',

        'Peter 0877547887',
        
        'Bill 0896543112',
        
        'Tim 0876566344']))