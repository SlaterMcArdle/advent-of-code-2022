// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each double new line
const data = input.toString().split("\r\n\r\n");

// Define the max value variable
let maxCalories = 0;

// Loop through each block of calories and total them up
data.forEach((item) => {
    const calories = item.split("\r\n").reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr);
    })
    // If the calories is greater than the max, make it the new max
    if (calories > maxCalories) {
        maxCalories = calories;
    }
});

// print the output
console.log(maxCalories);