// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// import values from other modules
const userNames = require('./4-firstmodule');
const sayHiFunc = require('./5-secondmodule');
const data = require('./6-alternative flavor');
require('./7-mind grenade')


// console.log(userNames);
// console.log(sayHiFunc);
// console.log(data);


// sayHiFunc('susan');
// sayHiFunc(userNames.john);
// sayHiFunc(userNames.peter)

// Node uses commonJS library under the hood. Every file in node is a module.