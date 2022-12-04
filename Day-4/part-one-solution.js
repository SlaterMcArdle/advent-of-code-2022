// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");

// Create a placeholder for the number of groups that fully contain their pair
let containingPairs = 0;

// Loop through each pair of groups
data.forEach((item) => {
    // split the pairs apart, then break each pair into an array
    const pair = item.split(",");
    const pair1 = pair[0].split("-");
    const pair2 = pair[1].split("-");
    // Check if the first pair contains the seconds
    if (parseInt(pair1[0]) <= parseInt(pair2[0]) && parseInt(pair1[1]) >= parseInt(pair2[1])) {
        containingPairs++;
    } 
    // Check if the second pair contains the first
    else if (parseInt(pair2[0]) <= parseInt(pair1[0]) && parseInt(pair2[1]) >= parseInt(pair1[1])) {
        containingPairs++;
    }
});

console.log(containingPairs);