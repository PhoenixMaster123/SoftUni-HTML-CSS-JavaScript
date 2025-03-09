function buildMatrix(num) {
    let matrix = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            matrix += num + ' ';
        }
        matrix += '\n';
    }
    console.log(matrix.trim());
}
buildMatrix(3);