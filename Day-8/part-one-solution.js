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
let visibletrees = 2*(forest.length-1) + 2*(forest[0].length -1);

// Create a closed function to modify the global visibletrees from within the nested for loops
let addVisible = () => {
    visibletrees++;
}

// Loop through each row of trees
for (let i=1; i<(forest.length-1); i++) {
    // Loop through eah tree in the row
    for (let j=1; j<(forest[i].length-1); j++) {
        // Set a visibility flag for each of the directions
        let visible1=true;
        let visible2=true;
        let visible3=true;
        let visible4=true;
        // Check for visibility from the left
        for (let k=j-1; k>=0; k--) {
            if (parseInt(forest[i][j])-parseInt(forest[i][k]) <= 0) {
                visible1 = false;
                break;
            }
        }
        // Check for visibility from the right
        for (let k=j+1; k<forest[i].length; k++) {
            if (parseInt(forest[i][j])-parseInt(forest[i][k]) <= 0) {
                visible2 = false;
                break;
            }
        }
        // Check for visibility from the top
        for (let k=i-1; k>=0; k--) {
            if (parseInt(forest[i][j])-parseInt(forest[k][j]) <= 0) {
                visible3 = false;
                break;
            }
        }
        // Check for visibility from the bottom
        for (let k=i+1; k<forest.length; k++) {
            if (parseInt(forest[i][j])-parseInt(forest[k][j]) <= 0) {
                visible4 = false;
                break;
            }
        }
        // If the tree is visible from any dirction, add it to the total
        if (visible1 || visible2 || visible3 || visible4) {
            addVisible();
        }
    }
}

console.log(visibletrees);