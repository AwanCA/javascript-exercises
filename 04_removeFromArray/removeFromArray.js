const removeFromArray = function(givenArray, ...dataToRemove) {
    let outputArray = [];
    for (let item of givenArray){
        let toRemove = false;
        for (let data of dataToRemove){
            if (item === data){
                toRemove = true;
                break;
            }
        }
        if (toRemove === true){
            continue;
        }
        else{
            outputArray.push(item);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
