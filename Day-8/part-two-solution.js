// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");

// Divide the array into a 2d array of trees
const forest = [];
data.forEach((row) => {
    forest.push([...row]);
});

// Initially populate the visible tree count with all of the edge trees
let maxScenic = 1;

// Create a closed function to modify the global visibletrees from within the nested for loops
let setMaxScenic = (newMax) => {
    maxScenic = newMax;
}

// Loop through each row of trees
for (let i=1; i<(forest.length-1); i++) {
    // Loop through each tree in the row
    for (let j=1; j<(forest[i].length-1); j++) {
        // Set a visibility flag for each of the directions
        let scenic1=1;
        let scenic2=1;
        let scenic3=1;
        let scenic4=1;
        // Check for visibility from the left
        for (let k=j-1; k>=0; k--) {
            if (parseInt(forest[i][j])-parseInt(forest[i][k]) > 0) {
                scenic1++;
            }
            else {
                break;
            }
        }
        // Check for visibility from the right
        for (let k=j+1; k<forest[i].length; k++) {
            if (parseInt(forest[i][j])-parseInt(forest[i][k]) > 0) {
                scenic2++;
            }
            else {
                break;
            }
        }
        // Check for visibility from the top
        for (let k=i-1; k>=0; k--) {
            if (parseInt(forest[i][j])-parseInt(forest[k][j]) > 0) {
                scenic3++;
            }
            else {
                break;
            }
        }
        // Check for visibility from the bottom
        for (let k=i+1; k<forest.length; k++) {
            if (parseInt(forest[i][j])-parseInt(forest[k][j]) > 0) {
                scenic4++;
            }
            else {
                break;
            }
        }
        // If the tree is visible from any dirction, add it to the total
        let scenicScore = scenic1*scenic2*scenic3*scenic4;
        if (scenicScore > maxScenic) {
            setMaxScenic(scenicScore);
        }
    }
}

console.log(maxScenic);