var fs = require('fs');
var data = fs.readFileSync('demo.txt');
console.log("Synchronous read: "+data.toString());
console.log("Pgm ended!");