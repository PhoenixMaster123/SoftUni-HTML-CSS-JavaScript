function cookingByNumber(number, cmd1, cmd2, cmd3, cmd4, cmd5) {
    let result = number;
    let array = [cmd1, cmd2, cmd3, cmd4, cmd5]
    for (let i = 0; i < array.length; i++) {
        switch(array[i]) {
            case 'chop': result /= 2; console.log(result); break;
            case 'dice': result = Math.sqrt(result); console.log(result); break;
            case 'spice': result += 1; console.log(result); break;
            case 'bake': result *= 3; console.log(result); break;
            case 'fillet': result *= 0.80; console.log(result.toFixed(2)); break;
        } 
    }
}

cookingByNumber(9, 'dice', 'spice', 'chop', 'bake', 'fillet');


// Example with array:
function cookingByNumberArray(number, array) {
    let result = number;

    for (let i = 0; i < array.length; i++) {
        switch(array[i]) {
            case 'chop': result /= 2; console.log(result); break;
            case 'dice': result = Math.sqrt(result); console.log(result); break;
            case 'spice': result += 1; console.log(result); break;
            case 'bake': result *= 3; console.log(result); break;
            case 'fillet': result *= 0.80; console.log(result.toFixed(2)); break;
        } 
    }
}