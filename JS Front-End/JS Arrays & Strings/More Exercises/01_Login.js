function checker(arr) {
    let username = arr[0];
    for (let i = 1; i <= 4; i++) {
       if(arr[i] == username.split('').reverse().join('')) {
        console.log(`User ${username} logged in.`);
        return;
       } else {
        if(i == 4) {
            break;
        }
        console.log('Incorrect password. Try again.');
       }
    }

    console.log(`User ${username} blocked!`);
}

checker(['Acer','login','go','let me in','recA']);
checker(['sunny','rainy','cloudy','sunny','not sunny']);