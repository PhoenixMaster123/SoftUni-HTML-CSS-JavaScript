function order(product, quantity) {
    let result = calculateTotal(product, quantity);
    console.log(result.toFixed(2));
    
    function calculateTotal(product, quantity) {
        const coffee = 1.50;
        const water = 1.00;
        const coke = 1.40;
        const snacks = 2.00;

        if(product == 'coffee') {
            return coffee * quantity;
        } else if(product == 'water') {
            return water * quantity;
        } else if(product == 'coke') {
            return coke * quantity;
        } else {
            return snacks * quantity;
        }
    }
}

order("water", 5);