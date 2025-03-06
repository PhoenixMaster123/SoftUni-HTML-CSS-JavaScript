function solve(grade) {
    switch(true) {
        case grade < 3.00: console.log(`Fail (${Math.floor(grade)})`); break;
        case grade < 3.50: console.log(`Poor (${grade.toFixed(2)})`); break;
        case grade < 4.50: console.log(`Good (${grade.toFixed(2)})`); break;
        case grade < 5.50: console.log(`Very good (${grade.toFixed(2)})`); break;
        default: console.log(`Excellent (${grade.toFixed(2)})`); break;
    }
}

solve(3.33);
solve(4.50);
solve(2.99);