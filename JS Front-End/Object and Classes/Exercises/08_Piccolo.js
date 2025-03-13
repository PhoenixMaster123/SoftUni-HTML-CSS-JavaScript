function carParking(data) {
    let set = new Set();

    for (let item of data) {
        let tokens = item.split(', ');

        let command = tokens[0];
        let carNumber = tokens[1];

        if(command == 'IN') {
            set.add(carNumber);
        } else {
            set.delete(carNumber);
        }
    }
    if(set.size == 0) {
        console.log('Parking Lot is Empty');
    }
    let arr = Array.from(set);
    arr.sort();
    arr.forEach(k => console.log(k));
}

carParking([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI', 
    'IN, CA9876HH', 
    'IN, CA2822UU']);