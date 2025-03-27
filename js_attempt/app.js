//const chalk = require("chalk");
//const fs = require('node:fs');
import fs from 'node:fs';
import chalk from 'chalk';
import PDFDocument from 'pdfkit';

var msg = "greetings alyssa welcome to your wonderful fantastic javascript program";
console.log(chalk.blue(msg));

//eventually, we want a frontend where a user can paste text into a box
// our algorithm parses it and converts into bingo boxes
var fileContentSync;
var s_array;
try {
    fileContentSync = fs.readFileSync('input2.txt', 'utf8');
  } catch (err) {
    console.error("An error occurred:", err);
  }

// put values into array
// for 5x5 array, pull one value out of the array and put it into the box.

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

// // Embed a font, set the font size, and render some text
 doc
  .font('fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')
//   .fontSize(25)
//   .text('Some text with an embedded font!', 100, 100);

// // Add an image, constrain it to a given size, and center it vertically and horizontally
// doc.image('tiger.png', {
//   fit: [250, 300],
//   align: 'center',
//   valign: 'center'
// });

// // Add another page
// doc
//   .addPage()
//   .fontSize(25)
//   .text('roar!', 100, 100);

// doc
//   .fontSize(11)
//   .text(fileContentSync, 50, 50);
const try_again = fileContentSync.split("\n");
console.log(try_again);
console.log(try_again.length);

for(let j = 0; j < try_again.length; j++){
    if(j % 2 == 1){
        console.log(chalk.red(try_again[j]));
    } else {
        console.log(chalk.yellow(try_again[j]));
    }
}

var x_pos = 50;
var y_pos = 50;
var fill_color = "red";
var row_index = 0;
var square_size = 100;
const starting_pos = 50;
var array_it = 0;

doc
    .rect(starting_pos, starting_pos, 500, 500)
    .stroke();

// need to make a 5x5 grid within this rectangle
doc.fontSize(10)
for (let i = 1; i < 26; i++) {
    if((row_index % 2 == 0 && (i % 5 == 2 | i % 5 == 4))) {
        fill_color = "green";
    } else if ((row_index % 2 == 1 && (i % 5 == 1 || i % 5 == 3 || i % 5 == 0))){
        fill_color = "green";
    }
    else {
        fill_color = "yellow";
    }
    var bingo_phrase =  try_again[array_it].replace(/[0-9]./g, '');
   // console.log(row_index + " color is " + fill_color);
    doc.rect(x_pos, y_pos, square_size, square_size).dash(5, {space: 10}).fillAndStroke(fill_color, "#200");
    if(i > try_again.length){
        array_it = 0;
    }
    console.log(array_it, try_again[array_it], x_pos, y_pos);
    //console.log(chalk.red("alright"));
    doc.fillColor("purple").text(`${bingo_phrase}`, x_pos, y_pos+(square_size/2)); 
    // // , {
    //     align: 'center',
    //     height: square_size,
    //     width: square_size,
    //     continued: true
    //     }
    if (i % 5 == 0){
    x_pos = starting_pos;
    y_pos += square_size;
    row_index++;
    } else {
        x_pos += square_size;
    }
    //y_pos += 25;
    array_it++;
   // doc.addPage();
  }

   // .fillAndStroke("yellow", "#900")
  // .fill("yellow")

// Draw a triangle
// doc
//   .save()
//   .moveTo(100, 150)
//   .lineTo(100, 250)
//   .lineTo(200, 250)
//   .fill('#FF3300');

// // Apply some transforms and render an SVG path with the 'even-odd' fill rule
// doc
//   .scale(0.6)
//   .translate(470, -380)
//   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
//   .fill('red', 'even-odd')
//   .restore();

// Add some text with annotations
// doc
//   .addPage()
//   .fillColor('blue')
//   .text('Here is a link!', 100, 100)
//   .underline(100, 100, 160, 27, { color: '#0000FF' })
//   .link(100, 100, 160, 27, 'http://google.com/');

// Finalize PDF file
doc.end();