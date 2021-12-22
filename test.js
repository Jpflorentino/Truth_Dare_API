const file = require("./files/truths.txt");
// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = (filename) => fs.readFileSync(filename).toString("UTF8").split("\n");

// Calling the readFiles function with file name
let arr = readFileLines(file);

// Printing the response array
console.log(arr);
