function solve(stocks, products) {
    let map = new Map();
    let counter = 0;
    let name = '';
    let quantity = 0;
    for (let stock of stocks) {
        if(counter % 2 == 0) {
            name = stock;
        } else {
            quantity = stock;
            map.set(name, quantity);
        }
        counter++;
    }
    for (let stock of products) {
        if(counter % 2 == 0) {
            name = stock;
        } else {
            quantity = stock;
            if(!map.has(name)) {
                map.set(name, quantity);
            } else {
                let increase = Number(map.get(name)) + Number(quantity);
                map.set(name, increase);
            } 
        }
        counter++;
    }
    for(let entry of map.entries()) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    } 
}

function solve2(stocks, products) {
    let map = new Map();

    function processStockList(list) {
        for (let i = 0; i < list.length; i += 2) {
            let name = list[i];
            let quantity = Number(list[i + 1]);

            map.set(name, (map.get(name) || 0) + quantity);
        }
    }

    processStockList(stocks);
    processStockList(products);

    for (let [name, quantity] of map) {
        console.log(`${name} -> ${quantity}`);
    }
}

solve2(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
    )