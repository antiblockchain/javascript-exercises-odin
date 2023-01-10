const removeFromArray = function(input, arg) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === arg) {
            delete input[i];
        }
    }
    console.log(input);

};

// Do not edit below this line
module.exports = removeFromArray;
