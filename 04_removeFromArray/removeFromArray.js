const removeFromArray = function(array,...theArgs) {
    for(const arg of theArgs){
        let indexToRemove=array.indexOf(arg);
        if(indexToRemove>=0){
            array.splice(indexToRemove,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
