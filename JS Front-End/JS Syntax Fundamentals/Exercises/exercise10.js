function sameNumber(number) {
    let string = number.toString();
    let element = string[0];
    let sum = 0;
    let isTheSame = true;
    for (let i = 0; i < string.length; i++) {
        if(element != string[i]) {
            isTheSame = false;
        }
        sum += Number(string[i]);
    }
    if(isTheSame) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
} 
// Example:
sameNumber(2222222); // -> true ; 14