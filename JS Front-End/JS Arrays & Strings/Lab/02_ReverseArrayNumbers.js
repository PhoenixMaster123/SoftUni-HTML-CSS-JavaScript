function solve(n, array) {
    let arr = array.slice(0, n).reverse().join(' ');
    console.log(arr);
}

solve(3, [10, 20, 30, 40, 50]);
