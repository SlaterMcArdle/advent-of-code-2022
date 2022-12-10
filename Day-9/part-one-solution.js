// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");

// Create a list to keep track of unique positions the tail has visited
let tailPositionList = [[0,0]];

// Start the x,y positions of the head and tail at 0,0
let headPosition = [0,0];
let tailPosition = [0,0];

// Create functions to modify the global variables to avoid closure issues in nested loops
const moveHeadUp = () => {headPosition[1]++}
const moveHeadDown = () => {headPosition[1]--}
const moveHeadLeft = () => {headPosition[0]--}
const moveHeadRight = () => {headPosition[0]++}
const moveTailUp = () => {tailPosition[1]++}
const moveTailDown = () => {tailPosition[1]--}
const moveTailLeft = () => {tailPosition[0]--}
const moveTailRight = () => {tailPosition[0]++}
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
                moveHeadUp();
                break;
            case 'D':
                moveHeadDown();
                break;
            case 'L':
                moveHeadLeft();
                break;
            case 'R':
                moveHeadRight();
                break;
        }
        // Check if the tail is within 1 space (x and y) of the head or needs to move
        xDistance = headPosition[0] - tailPosition[0];
        yDistance = headPosition[1] - tailPosition[1];

        // Move the tail along the x axis if needed
        if (xDistance > 1) { 
            moveTailRight()
            if (yDistance == 1) {moveTailUp()}
            else if (yDistance == -1) {moveTailDown()}
        } else if (xDistance < -1) { 
            moveTailLeft()
            if (yDistance == 1) {moveTailUp()}
            else if (yDistance == -1) {moveTailDown()}
        }

        // Move the tail along the y axis if needed
        if (yDistance > 1) {
            moveTailUp()
            if (xDistance == 1) {moveTailRight()}
            else if (xDistance == -1) {moveTailLeft()}
        } else if (yDistance < -1) {
            moveTailDown()
            if (xDistance == 1) {moveTailRight()}
            else if (xDistance == -1) {moveTailLeft()}
        }
        
        // If the tail hasn't visited the ne space before, add it to the list
        if (!tailPositionList.some(position => {
            if (position[0] == tailPosition[0] && position[1] == tailPosition[1]) { return true }
        })) {
            addNewTailPosition([...tailPosition]);
        }
    }
};

console.log(tailPositionList.length);