'use strict';

let checkNumber = +prompt('Enter, please, check number: ');

while (isNaN(checkNumber) || checkNumber === null || checkNumber === '' || checkNumber < 0) {
    alert('Invalid input data');
    checkNumber = parseInt(prompt('Enter correct check number: '));
}

let percentage = +prompt('Enter, please, percentage: ');

while (isNaN(percentage) || percentage === null || percentage === '' || percentage > 100 || percentage < 0) {
    alert('Invalid input data');
    percentage = +prompt('Enter correct percentage: ');
}

let percent = checkNumber * percentage / 100;
let sum = checkNumber + percent;

alert(`Check number : ${checkNumber}
Tip: ${percentage}%
Tip amount: ${+percent.toFixed(2)}
Total sum to pay: ${+sum.toFixed(2)}`);