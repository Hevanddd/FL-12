function letterCount(str, letter){
    let sum = 0;
    let strLow = str.toLowerCase();
    for(let i = 0; i < strLow.length; i++){
        if(strLow[i] === letter){
            sum++;
        }
    }
    return sum;    
}

letterCount("Maggy", "g");