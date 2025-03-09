function visualize(percentage) {
    if(percentage == 100) {
        console.log(`${percentage}% Complete!`);
        console.log(`[${'%'.repeat(10)}]`);
        return;
    }
    let calculatePercent = percentage / 10;

    console.log(`${percentage}% [${'%'.repeat(calculatePercent)}${'.'.repeat(10-calculatePercent)}]`);
    console.log('Still loading...');
}

visualize(30);
visualize(50);
visualize(100);