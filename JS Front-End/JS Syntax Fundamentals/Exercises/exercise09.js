function calculateTotal(fruit, weight, kilograms) {
    console.log(`I need $${((weight * kilograms) / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}
calculateTotal('orange', 2500, 1.80);