'use strict';

let checkNumber = +prompt('Enter, please, check number: ');

if (isNaN(checkNumber) || checkNumber === null || checkNumber === '' || checkNumber < 0) {
    alert('Invalid input data');
}

let percentage = +prompt('Enter, please, percentage: ');

if (isNaN(percentage) || percentage === null || percentage === '' || percentage > 100 || percentage < 0) {
    alert('Invalid input data');
}

let percent = checkNumber * percentage / 100;
let sum = checkNumber + percent;

alert(`Check number : ${checkNumber}
Tip: ${percentage}%
Tip amount: ${+percent.toFixed(2)}
Total sum to pay: ${+sum.toFixed(2)}`);