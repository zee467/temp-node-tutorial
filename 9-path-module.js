const path = require('path');

// What seperates the path
// console.log(path.sep);


// Join file paths
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);


// To get the last portion of  file path
const base = path.basename(filePath);
console.log(base);


// Returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
