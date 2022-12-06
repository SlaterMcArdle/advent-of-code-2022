// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into two arrays at the double new line
const data = input.toString().split("\r\n\r\n");

// Split the stacks and steps into arrays at each newline
let stacks = data[0].split("\r\n");
const steps = data[1].split("\r\n");

// Create a placeholder for the processed stacks
let finalStacks = [];

// Process the stacks, breaking them into crates and removing the surrounding characters
for (let i = 0; i < stacks.length; i++) {
    let stack = stacks[i].match(/.{1,4}/g);
    let trimmedStack = [];
    for (let j = 0; j < stack.length; j++) {
        trimmedStack.push(stack[j][1]);
    }
    finalStacks.push(trimmedStack);
}

// Remove the stack numbers
finalStacks.pop();

// Create a placeholder for the vertical stacks
let transformedStacks = [];

// Transform the horizontal stacks into vertical stacks
for (let i = 0; i < finalStacks[0].length; i++) {
    let insideStack = [];
    for (let j = 0; j < finalStacks.length; j++) {
        if (finalStacks[j][i] !== ' ') {
            insideStack.unshift(finalStacks[j][i]);
        }
    }
    transformedStacks.push(insideStack);
}

// Loop through each step, grabbing the right number of stacks and moving them each time
steps.forEach((step) => {
    // Split the steps apart and grab the amount of crates, staring and ending columns
    let stepArray = step.split(' ');
    const amount = parseInt(stepArray[1]);
    const initialStack = parseInt(stepArray[3]) - 1;
    const finalStack = parseInt(stepArray[5]) - 1;
    // Remove the correct amount of crates from the top of one stack and place it on top of the another stack
    const splicedValue = transformedStacks[initialStack].splice((-1) * amount, amount);
    transformedStacks[finalStack].push(...splicedValue);
})

// Grab the values of the top crates in each column
let topCrates = '';
transformedStacks.forEach((stack) => {
    topCrates += stack[stack.length - 1];
})

console.log(topCrates);