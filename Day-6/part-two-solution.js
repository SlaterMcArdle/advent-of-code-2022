const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into two arrays at the double new line
const data = input.toString();

// Set the desired buffer length and assign an empry buffer array
const bufferLength = 14;
let bufferArray = [];

// Fill the buffer array to the assigned length
for (let i = 0; i < bufferLength; i++) {
    bufferArray.push(data[i]);
}

// Build a function to check if the current buffer is unique
const uniqueChars = () => {
    let tempBuffer = [...bufferArray];
    let unique = true;
    for (let i = 0; i < bufferLength; i++) {
        const testValue = tempBuffer.pop();
        if (tempBuffer.includes(testValue)) {
            unique = false;
            break;
        }
    }
    return unique;
}

// If the initial buffer is unique, print out the buffer length
if (uniqueChars()) {
    console.log(bufferLength);
} 
// If not, loop through the data until a unique buffer is found
else {
    for (let i = bufferLength; i < data.length; i++) {
        // remove the first item in the array to make room for the next character
        bufferArray.shift();
        // add the next character in the buffer to the array
        bufferArray.push(data[i]);
        if (uniqueChars()) {
            console.log(i+1);
            break;
        }
    }
}
