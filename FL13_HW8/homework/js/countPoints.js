function isBigger(a, b) {
    return a > b;
}

function countPoints() {
    let points = 0;
    let result = '';
    for (let i = 0; i < arguments.length; i++) {
        result = arguments[i].split(":");
        if (isBigger(result[0], result[1])) {
            points += 3;
        } else if(result[0] === result[1]){
            points += 1;
        }
    }
    return points;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);