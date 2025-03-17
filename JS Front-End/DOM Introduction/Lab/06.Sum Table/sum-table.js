function sumTable() {
    let rows = Array.from(document.querySelectorAll('table tr'));
    rows.shift();
    let output = rows.pop();

    let sum = 0;

    for (let row of rows) {
        let col = row.children[row.children.length - 1];
        sum += Number(col.textContent);
    }

    let outputCol = output.children[output.children.length - 1];
    outputCol.textContent = sum;
}