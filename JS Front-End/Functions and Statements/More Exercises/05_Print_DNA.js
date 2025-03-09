function printDNA(number) {
    const sequence = 'ATCGTTAGGG';
    let counter = 1;
    let counterRes = 1;
    let i = 0;
    while(true) { 
        if(counterRes == number + 1) {
            break;
        }
        if(counter == 1) {
            console.log(`**${sequence.charAt(i)}${sequence.charAt(i + 1)}**`);
            counter++;
        } else if(counter == 2) {
            console.log(`*${sequence.charAt(i)}--${sequence.charAt(i + 1)}*`);
            counter++;
        } else if(counter == 3) {
            console.log(`${sequence.charAt(i)}----${sequence.charAt(i + 1)}`);
            counter++;
        } else if(counter == 4){
            console.log(`*${sequence.charAt(i)}--${sequence.charAt(i + 1)}*`);
            counter = 1;
        }
        counterRes++;
        i+=2;
        if(i == sequence.length) {
            i = 0;
        }
    }
}

function printDNA2(number) {
    const sequence = 'ATCGTTAGGG';
    let i = 0;

    for (let line = 0; line < number; line++) {
        let first = sequence[i % sequence.length];
        let second = sequence[(i + 1) % sequence.length];

        if (line % 4 === 0) {
            console.log(`**${first}${second}**`);
        } else if (line % 4 === 1 || line % 4 === 3) {
            console.log(`*${first}--${second}*`);
        } else if (line % 4 === 2) {
            console.log(`${first}----${second}`);
        }

        i = (i + 2) % sequence.length;
    }
}

printDNA(10);