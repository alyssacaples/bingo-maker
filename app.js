//const chalk = require("chalk");
//const fs = require('node:fs');
import fs from 'node:fs';
import chalk from 'chalk';

var msg = "greetings beautiful princess baby welcome to your javascript program";
console.log(chalk.blue(msg));


//eventually, we want a frontend where a user can paste text into a box
// our algorithm parses it and converts into bingo boxes


//let's start with a test text file and go from there

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
})