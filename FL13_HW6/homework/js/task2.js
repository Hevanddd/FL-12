'use strict'

let userWord = prompt('Enter your word: ').trim();

while(userWord === null || userWord === ''){
    alert('Invalid value');
    userWord = prompt('Enter correct word: ').trim();
}
userWord.length % 2 === 0 ? alert(userWord.substr(userWord.length / 2 - 1, 2)) :
alert(userWord.substr(userWord.length/2, 1));
