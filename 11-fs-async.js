const { readFile, writeFile } = require('fs');


// N.B: If we don't add utf-coding, we'd get a buffer.
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);  // undefined
            console.log('done with this task');
        })
    })
})
console.log('starting the next task');

// promises and async await
// We can use callbacks, but the code can get messy