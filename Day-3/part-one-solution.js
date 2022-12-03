// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");

// Declare a placeholder for the total priority
let priorityTotal = 0;

// Loop through each string
data.forEach((item) => {
    // Split the string into halves
    let compartment1 = item.substring(0, (item.length)/2);
    let compartment2 = item.slice((item.length)/2);

    // Iterate over each character in the first half until it finds a match int he second half
    for(let i = 0; i < compartment1.length; i++) {
        if (compartment2.includes(compartment1[i])) {
            // Get the ascii code for the character & convert it to the priority number
            let asciiCode = compartment1[i].charCodeAt(0);
            let priority = 0;
            if (asciiCode <= 90) {
                priority = asciiCode - 38;
            }
            else {
                priority = asciiCode - 96;
            }
            // Add it to the total priority
            priorityTotal += priority;
            // Break the inner for loop to prevent duplicates
            break;
        }
    }
})

console.log(priorityTotal);