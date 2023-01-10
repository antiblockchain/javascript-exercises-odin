const sumAll = function(numOne, numTwo) {
    sum = numOne + numTwo;
    for (let i = numOne + 1; i < numTwo; i++) {
        sum = sum + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
