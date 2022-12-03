// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");

// Declare a placeholder for the total priority
let priorityTotal = 0;

// Loop through each group of three strings
for(let i = 0; i < data.length; i+= 3) {
    // Loop through each character in the first string in the group until a match is found in both other strings
    for(let j = 0; j < data[i].length; j++) {
        if (data[i+1].includes(data[i][j]) && data[i+2].includes(data[i][j])) {
            // Find the ascii code for the matching character and convert it into a priority
            let asciiCode = data[i][j].charCodeAt(0);
            let priority = 0;
            if (asciiCode<= 90) {
                priority = asciiCode - 38;
            }
            else {
                priority = asciiCode - 96;
            }
            // Add it to the total priority
            priorityTotal += priority;
            // Break the inner loop to prevent duplicates
            break;
        }
    }
}

console.log(priorityTotal);