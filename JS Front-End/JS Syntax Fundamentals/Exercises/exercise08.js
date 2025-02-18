function reverseOrder(a, b, c) {
    console.log(a.concat(' ', b).concat(' ', c).split('').reverse().join(''));
}
reverseOrder('A', 'B', 'C');