function convertToWord(letter) {
    if (letter === 'r') {
        return 'Rock'
    };
    if (letter === 'p') {
        return 'Paper'
    };
    if (letter === 's') {
        return 'Scissors'
    };
}

export default convertToWord;