function repeatSolution1(string, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += string;
    }
    console.log(result);
}

function repeatSolution2Rec(string, count, result = '') {
    if(count == 0) {
        console.log(result);
        return;
    }
    repeatSolution2Rec(string, count - 1, result + string);
}

repeatSolution2Rec('abc', 3)