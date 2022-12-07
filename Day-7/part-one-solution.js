// Import necessary modules
const fs = require("fs");

// Get the data from the input file
const input = fs.readFileSync("input.txt");

// Split the data into an array at each new line
const data = input.toString().split("\r\n");
let stepNumber = 0;
let totalSubDirSize = 0;

const checkDirSize = () => {
    let subDirSize = 0;
    let continueFlag = true;
    let increaseStep = () => {
        stepNumber++;
    }
    let addToTotal = (increase) => {
        totalSubDirSize += increase;
    }
    while(continueFlag) {  
        if(stepNumber >= data.length - 1) {
            continueFlag = false;
            if (subDirSize <= 100000) {
                addToTotal(subDirSize);
                console.log(totalSubDirSize);
                return subDirSize;
            } else {
                return 0;
            }
        }   
        let step = data[stepNumber].split(' ');
        switch (true) {
            case (Number.isInteger(parseInt(step[0])) && parseInt(step[0]) <= 100000):
                subDirSize += (parseInt(step[0]));
                increaseStep();
                break;
            case (step[0]=='dir'):
                increaseStep();
                break;
            case (step[0]=='$' && step[1]=='ls'):
                increaseStep();
                break;
            case (step[0]=='$' && step[1]=='cd' && step[2]=='..'):
                if (subDirSize <= 100000) {
                    return subDirSize;
                } else {
                    return 0;
                }
            case (step[0]=='$' && step[1]=='cd'):
                increaseStep();
                addToTotal(checkDirSize());
            default:
                increaseStep();
        }
    }
}

checkDirSize();
console.log(totalSubDirSize);