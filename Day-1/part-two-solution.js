// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each double new line
const data = input.toString().split("\r\n\r\n");

// Declare a holder for the total of the three calorie maximums
let topThreeTotal = 0;

// Total the calories for each elf
let calorieTotals = data.map((item) => {
    return item.split("\r\n").reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr);
    })
});

// Loop through the array three times
for (let i = 0; i < 3; i++) {
    // Find the max calories
    let maxCalories = Math.max(...calorieTotals);
    // Get the index for later deletion
    let maxIndex = calorieTotals.indexOf(maxCalories);
    // Add the calories to the grand total
    topThreeTotal += maxCalories;
    // Remove the max so it's not reused
    calorieTotals.splice(maxIndex, 1);
}

console.log(topThreeTotal);