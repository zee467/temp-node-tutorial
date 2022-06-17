// Two flavors
// Asynchronously(Non-blocking) and Synchronously(Blocking)

// Synchronous approach here


const { readFileSync, writeFileSync } = require('fs');
console.log('start');


// Reads the content in the file 
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);


// To write to the file. It accepts two arguments. The file path, and the value.
// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);


// Append to the file
// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' });

console.log('done with this task');
console.log('starting the next one');

// It can only attend to one user at a time. It only attempts the next task after completing one.
