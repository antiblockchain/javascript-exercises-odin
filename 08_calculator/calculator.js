const add = function(inputOne, inputTwo) {
	let output = inputOne + inputTwo;
  return output;
};

const subtract = function(inputOne, inputTwo) {
	let output = inputOne - inputTwo;
  return output;
};

const sum = function(inputOne, inputTwo) {
	let output = inputOne + inputTwo;
  return output;
};

const multiply = function(inputOne, inputTwo) {
  let output = inputOne * inputTwo;
  return output;
};

const power = function(inputOne, inputTwo) {
	let output = inputOne;
  for (let i = 0; i < inputTwo; i++) {
    if (inputTwo > 1) {
      output = output * inputOne;
    } 
  }
  return output;
};

const factorial = function(input) {
  let output = 0;
	for (let i = input - 1; i = 1; i--) {
    output = output + input * i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
