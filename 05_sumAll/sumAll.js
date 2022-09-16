const sumAll = function(a,b) {
    if(typeof a!="number" || typeof b!="number"){
        return "ERROR";
    }else if(a<0||b<0){
        return "ERROR";
    }
    const left= a<b?a:b;
    const right= a<b?b:a;
    let result=0;
    for(let i=left;i<=right;i++){
        result+=i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
