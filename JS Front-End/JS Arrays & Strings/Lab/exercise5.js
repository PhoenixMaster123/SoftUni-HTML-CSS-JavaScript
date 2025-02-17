function solve(num1, num2, operator) {
   if(operator == '+') {
        console.log(num1 + num2);
   } else if(operator == '-') {
        console.log(num1 - num2);
   } else if(operator == '*') {
        console.log(num1 * num2);
   } else if(operator == '/') {
        console.log(num1 / num2);
   } else if(operator == '%') {
        console.log(num1 % num2);
   } else {
        console.log(num1 ** num2);
   }
}
// Example:
solve(2, 3, '**'); // 2^3 = 8