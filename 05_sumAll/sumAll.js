const sumAll = function(startInt, endInt) {
    if(!(Number.isInteger(startInt)) || !(Number.isInteger(endInt)) || startInt < 0 || endInt <0){
        return "ERROR"
    }
    let output = 0
    let lowerInt = 0
    let higherInt = 0

    if (startInt >= endInt){
        lowerInt = endInt;
        higherInt = startInt;
    } else {
        lowerInt = startInt;
        higherInt = endInt;
    }

    for (let i = lowerInt; i<= higherInt; i++){
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
