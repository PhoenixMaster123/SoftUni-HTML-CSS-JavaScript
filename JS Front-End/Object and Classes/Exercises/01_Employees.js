function generateNumber(employeesArray) {
    for (let employee of employeesArray) {
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
    }
}

// With object:

function generateNumber2(employeesArray) {
    let result = {};
    for (let employee of employeesArray) {
        result[employee] = employee.length;
    }
    for (let name in result) {
        console.log(`Name: ${name} -- Personal Number: ${result[name]}`);
    }
}

generateNumber(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);