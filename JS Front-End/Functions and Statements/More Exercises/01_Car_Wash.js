function solve(commandsArray) {
    let result = 0;
    for (let i = 0; i < commandsArray.length; i++) {
        let currentCommand = commandsArray[i];
        if(currentCommand == 'soap') {
            result += 10;
        } else if(currentCommand == 'water') {
            result += result * 0.20;
        } else if(currentCommand == 'vacuum cleaner') {
            result += result * 0.25;
        } else {
            result -= result * 0.10;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);