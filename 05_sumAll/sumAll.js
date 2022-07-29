// Loop through numbers from a to b inclusive
// add each number to previous number
const sumAll = function(a, b) {
    // check which is higher a or b
    let sum = 0;
    let upper = 0;
    let lower = 0;
    // Check if any of the numbers are negative or not an integer
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } 
    if (a > b) {
      upper = a;
      lower = b;
    } else {
      upper = b;
      lower = a;
    }
    for (let i = lower; i <= upper; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
