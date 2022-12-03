// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");

let totalScore = 0;

// Loop through each round
data.forEach((item) => {
    const round = item.split(" ");
    switch (true) {
        case (round[0] == 'A' && round[1] == 'X'):
            // 3 for scissors + 0 for loss
            totalScore += 3
            break;
        case (round[0] == 'A' && round[1] == 'Y'):
            // 1 for rock + 3 for draw
            totalScore += 4
            break;
        case (round[0] == 'A' && round[1] == 'Z'):
            // 2 for paper + 6 for win
            totalScore += 8
            break;   
        case (round[0] == 'B' && round[1] == 'X'):
            // 1 for rock + 0 for loss
            totalScore += 1
            break;  
        case (round[0] == 'B' && round[1] == 'Y'):
            // 2 for paper + 3 for draw
            totalScore += 5
            break;
        case (round[0] == 'B' && round[1] == 'Z'):
            // 3 for scissors + 6 for win
            totalScore += 9
            break;
        case (round[0] == 'C' && round[1] == 'X'):
            // 2 for paper + 0 for loss
            totalScore += 2
            break;  
        case (round[0] == 'C' && round[1] == 'Y'):
            // 3 for scissors + 3 for draw
            totalScore += 6
            break;
        case (round[0] == 'C' && round[1] == 'Z'):
            // 1 for rock + 6 for win
            totalScore += 7
            break;
    }
});

console.log(totalScore);