function GetRandom(max){
    return Math.floor(Math.random() * Math.floor(max));
} 

function ReturnRandomString(stringArray){    
    return stringArray[GetRandom(stringArray.length)];    
}

export {ReturnRandomString}