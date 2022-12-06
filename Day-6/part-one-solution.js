const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into two arrays at the double new line
const data = input.toString();

let bufferArray = [data[0],data[1],data[2],data[3]];

if (bufferArray[0] !== bufferArray[1] && bufferArray[0] !== bufferArray[2] && bufferArray[0] !== bufferArray[3] && bufferArray[1] !== bufferArray[2] && bufferArray[1] !== bufferArray[3] && bufferArray[2] !== bufferArray[3]) {
    console.log(4);
} else {
    for (let i = 4; i < data.length; i++) {
        // remove the first item in the array to make room for the next character
        bufferArray.shift();
        // add the next character in the buffer to the array
        bufferArray.push(data[i]);
        if (bufferArray[0] !== bufferArray[1] && bufferArray[0] !== bufferArray[2] && bufferArray[0] !== bufferArray[3] && bufferArray[1] !== bufferArray[2] && bufferArray[1] !== bufferArray[3] && bufferArray[2] !== bufferArray[3]) {
            console.log(i+1);
            break;
        }
    }
}
