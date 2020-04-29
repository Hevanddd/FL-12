function isBigger(a, b) {
    return a > b;
}

function getDifference(a, b){
    if(isBigger(a, b)){
        return a - b;
    } else {
        return b - a;
    }
}

getDifference(5, 3);