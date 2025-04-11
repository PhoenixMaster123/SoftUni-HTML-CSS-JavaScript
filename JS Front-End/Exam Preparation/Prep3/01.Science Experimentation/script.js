function solve(input) {
    let numberOfChemicals = Number(input.shift());
    let list = [];

    for (let i = 0; i < numberOfChemicals; i++) {
        let line = input.shift();
        let tokens = line.split(' # ');
        let chemicalName = tokens[0];
        let chemicalQuantity = Number(tokens[1]);
        list.push({ chemicalName, chemicalQuantity});
    }

    let commandLine = input.shift();

    while (commandLine !== 'End') {
        let command = commandLine.split(' # ');
        let action = command[0];

        if (action === 'Mix') {
            let chem1Name = command[1];
            let chem2Name = command[2];
            let mixedQuantityNeeded = Number(command[3]);

            let chem1 = list.find(c => c.chemicalName === chem1Name);
            let chem2 = list.find(c => c.chemicalName === chem2Name);

            if (!chem1 || !chem2) {
                console.log(`Insufficient quantity of ${chem1Name}/${chem2Name} to mix.`);
            } else if (chem1.chemicalQuantity >= mixedQuantityNeeded && chem2.chemicalQuantity >= mixedQuantityNeeded) {
                chem1.chemicalQuantity -= mixedQuantityNeeded;
                chem2.chemicalQuantity -= mixedQuantityNeeded;
                console.log(`${chem1Name} and ${chem2Name} have been mixed. ${mixedQuantityNeeded} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chem1Name}/${chem2Name} to mix.`);
            }

        } else if (action === 'Replenish') {
            let chemName = command[1];
            let quantityToReplenish = Number(command[2]);

            let findChem = list.find(c => c.chemicalName === chemName);
            if (!findChem) {
                console.log(`The Chemical ${chemName} is not available in the lab.`);
            } else {
                let originalQuantity = findChem.chemicalQuantity;
                findChem.chemicalQuantity = Math.min(500, findChem.chemicalQuantity + quantityToReplenish);
                let actualIncrease = findChem.chemicalQuantity - originalQuantity;

                if (findChem.chemicalQuantity === 500) {
                    console.log(`${chemName} quantity increased by ${actualIncrease} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chemName} quantity increased by ${actualIncrease} units!`);
                }
            }

        } else if (action === 'Add Formula') {
            let chemName = command[1];
            let formula = command[2];

            let findChem = list.find(c => c.chemicalName === chemName);
            if (!findChem) {
                console.log(`The Chemical ${chemName} is not available in the lab.`);
            } else {
                findChem.formula = formula;
                console.log(`${chemName} has been assigned the formula ${formula}.`);
            }
        }

        commandLine = input.shift();
    }

    for (let chem of list) {
        let output = `Chemical: ${chem.chemicalName}, Quantity: ${chem.chemicalQuantity}`;
        if (chem.formula != undefined) {
            output += `, Formula: ${chem.formula}`;
        }
        console.log(output);
    }
}


solve(
    [
    '4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End'
    ]
)
console.log('---------------------');

solve(
    [ 
        '3',
        'Sodium # 300',
        'Chlorine # 100',
        'Hydrogen # 200',
        'Mix # Sodium # Chlorine # 200',
        'Replenish # Sodium # 250',
        'Add Formula # Sulfuric Acid # H2SO4',
        'Add Formula # Sodium # Na',
        'Mix # Hydrogen # Chlorine # 50',
        'End'
    ]
      
)