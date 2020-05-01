// Task 1

function convert() {
    let result = [];

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            result.push(arguments[i] + '');
        } else if (typeof arguments[i] === 'string') {
            result.push(+arguments[i]);
        }
    }
    return result;
}

// Task 2

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// Task 3

function mapArray(arr, callback) {
    let result = [];

    executeforEach(arr, function (el) {
        result.push(callback(Number(el)));
    });
    return result;
}

// Task 4

function filterArray(arr, callback) {
    let result = [];

    executeforEach(arr, function (el) {
        if (callback(el)) {
            result.push(el);
        }
    });
    return result;
}

// Task 5

function containsValue(arr, key) {
    let result = false;
    
    executeforEach(arr, function (el) {
        if (el === key) {
            result = true;
        }
    });
    return result;
}

// Task 6

function flipOver(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// Task 7

function makeListFromRange(arr) {
    let result = [],
        firstNum = arr[0],
        lastNum = arr[1];

    for (let i = firstNum; i <= lastNum; i++) {
        result.push(i);
    }
    return result;
}

// Task 8

const fruits = [{
        name: 'apple',
        weight: 0.5
    },
    {
        name: 'pineapple',
        weight: 2
    }
];

function getArrayOfKeys(object, key) {
    let result = [];

    executeforEach(object, function (el) {
        result.push(el[key]);
    });

    return result;
}

// Task 9

function substitute(arr) {
    const MIN_NUM = 10,
          MAX_NUM = 20;

    return mapArray(arr, function (el) {
        if (el < MAX_NUM && el > MIN_NUM) {
            return '*';
        } else {
            return el;
        }
    });
}

// Task 10

const date = new Date(2020, 0, 2);

function getPastDay(date, pastDays) {
    const MILISECINDAY = 86400000;

    return new Date(date - MILISECINDAY * pastDays).getDate();
}

// Task 11

function formatDate(date) {
    const TEN = 10;
    let hours = date.getHours() < TEN ? '0' + date.getHours() : date.getHours(),
        month = date.getMonth() < TEN ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
        minutes = date.getMinutes() < TEN ? '0' + date.getMinutes() : date.getMinutes(),
        days = date.getDate() < TEN ? '0' + date.getDate() : date.getDate();
    
    return `${date.getFullYear()}/${month}/${days} ${hours}:${minutes}`;
}