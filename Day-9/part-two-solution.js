// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");

// Create a list to keep track of unique positions the tail has visited
let tailPositionList = [[0,0]];

// Set the rope length and establish an empty array for the know 
const ropeLength = 10;
let knotPositionArray = [];

// Populate the initial positions of each knot in the rope
for (let i = 0; i < ropeLength; i++) {
    knotPositionArray.push([0,0]);
}

// Create functions to modify the global variables to avoid closure issues in nested loops
const moveKnotUp = (knotIndex) => {knotPositionArray[knotIndex][1]++}
const moveKnotDown = (knotIndex) => {knotPositionArray[knotIndex][1]--}
const moveKnotLeft = (knotIndex) => {knotPositionArray[knotIndex][0]--}
const moveKnotRight = (knotIndex) => {knotPositionArray[knotIndex][0]++}
const addNewTailPosition = (position) => {
    tailPositionList.push(position);
}

// Loop through each step in the problem input
for(let i = 0; i < data.length; i++) {
    // Parse the direction and step distance from the input
    let direction = data[i].split(' ')[0];
    let stepSize = parseInt(data[i].split(' ')[1]);
    let xDistance = 0;
    let yDistance = 0;
    // Move through each step one at a time, to allow the tail to keep up
    for (let j = 0; j < stepSize; j++) {
        // Move the head the desired direction
        switch (direction) {
            case 'U':
                moveKnotUp(0);
                break;
            case 'D':
                moveKnotDown(0);
                break;
            case 'L':
                moveKnotLeft(0);
                break;
            case 'R':
                moveKnotRight(0);
                break;
        }
        for (let k = 1; k < ropeLength; k++) {
            // Check if the current knot is within 1 space (x and y) of the leading knot or needs to move
            xDistance = knotPositionArray[k-1][0] - knotPositionArray[k][0];
            yDistance = knotPositionArray[k-1][1] - knotPositionArray[k][1];

            // Move the tail along the x axis if needed
            if (xDistance > 1) { 
                moveKnotRight(k)
                if (yDistance == 1) {moveKnotUp(k)}
                else if (yDistance == -1) {moveKnotDown(k)}
            } else if (xDistance < -1) { 
                moveKnotLeft(k)
                if (yDistance == 1) {moveKnotUp(k)}
                else if (yDistance == -1) {moveKnotDown(k)}
            }

            // Move the tail along the y axis if needed
            if (yDistance > 1) {
                moveKnotUp(k)
                if (xDistance == 1) {moveKnotRight(k)}
                else if (xDistance == -1) {moveKnotLeft(k)}
            } else if (yDistance < -1) {
                moveKnotDown(k)
                if (xDistance == 1) {moveKnotRight(k)}
                else if (xDistance == -1) {moveKnotLeft(k)}
            }
        }
        
        // If the tail hasn't visited the ne space before, add it to the list
        if (!tailPositionList.some(position => {
            if (position[0] == knotPositionArray[ropeLength - 1][0] && position[1] == knotPositionArray[ropeLength - 1][1]) { return true }
        })) {
            addNewTailPosition([...(knotPositionArray[ropeLength-1])]);
        }
    }
};

console.log(tailPositionList.length);