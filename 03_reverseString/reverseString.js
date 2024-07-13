const reverseString = function(string) {
    let stringArray = [];
    for (let i = 0; i < string.length; i++){
        stringArray.unshift(string[i]);
    }
    let output = stringArray.join("")
    return output;
};

// Do not edit below this line
module.exports = reverseString;
