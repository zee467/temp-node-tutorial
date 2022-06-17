// npm - global command, comes with node.
// npm --version

// local dependency - use it only in this particular project.
// npm i <packageName> e.g. npm i loadash

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file that stores important info about project/package.
// manual approach (create package.json in the root, create properties, etc.)
// npm init (step by step, press enter to skip) -- I used this
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const flatArray = _.flattenDeep(items);
console.log(flatArray);