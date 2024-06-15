// import {readFile} from 'node:fs';

// const os = require("os");
// const path = require("path");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.parse(__filename));

// const math = require('./math');

// console.log(math.add(1,2));
// console.log(math.sub(3,9));

const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname,'files','data.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.on('uncaughtException', err => {
  console.error(`There was an uncaught exception: ${err}`)
  process.exit(1)
});