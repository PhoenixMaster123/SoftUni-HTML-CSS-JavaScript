/*
Async Functions:
Returns a promise, that can await other promises in a way that looks synchronous

▪ Contains an await expression that:
▪ Is only valid inside async functions
▪ Pauses the execution of that function
▪ Waits for the Promise's resolution
*/

// Example:

async function start() {
    console.log('program start');

    let myPromise = new Promise((resolve) => {
        console.log('executor started');

        setTimeout(resolve, 2000, {msg: 'hello'});

        console.log('executor completed')
    });

    try {
        let result = await myPromise  // await = stop
        console.log(result);
    } catch(err) {
        console.log(err);
    }
    
    console.log('program end')

}

let output = start();
console.log(output);