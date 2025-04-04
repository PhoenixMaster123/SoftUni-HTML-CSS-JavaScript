function start() {
    console.log('program start');

    let myPromise = new Promise((resolve, reject) => {
        console.log('executor started');

        setTimeout(resolve, 2000, {msg: 'hello'});

        console.log('executor completed')
    });
    
    console.log('program end')

    myPromise
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
}

start();