// Task 1
//////////////////////////////////////////////////////

function maxElement(arr) {
    return Math.max(...arr)
}

const arr = [1,2,3,4,5,123,2,1];

console.log(maxElement(arr));

// Task 2
//////////////////////////////////////////////////////

function copyArray(array) {
    return [...array]
}

const array = [1,2,3];
const copiedArray = copyArray(array);
console.log(array, copiedArray);
console.log(array === copiedArray);

// Task 3
//////////////////////////////////////////////////////

function addUniqueId(obj) {
    const newObj = obj;
    newObj.id = Symbol('id');
    return newObj; 
}

const testObj = {name: 123};
console.log(addUniqueId(testObj));

// Task 4
//////////////////////////////////////////////////////

function regroupObject(obj) {
    const  {name: firstName, details: {id, age, university}} = obj;
    return{
        university,
        user: {
            age,
            firstName,
            id
        }
    };   
}

const oldObj = {
    name: 'Someone',
    details: {
        id: 1,
        age: 11,
        university: 'UNI'
    }
}

console.log(regroupObject(oldObj));

// Task 5
//////////////////////////////////////////////////////

function findUniqueElements(array) {
    const result = new Set(array);
    return Array.from(result);
}

const newArray = [1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1];

console.log(findUniqueElements(newArray));

// Task 6
/////////////////////////////////////////////////////

function hideNumber(phoneNumber) {
    return phoneNumber.slice(-4).padStart(phoneNumber.length, '*');
}

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));

// Task 7
//////////////////////////////////////////////////////

function required () {
    throw new Error('Missing property')
}

function add(a = required(), b = required()) { 
    return a + b;
}

console.log(add(1, 3));

// Task 8
///////////////////////////////////////////////////////

function getNamesPromise() {
    fetch('https://api.github.com/users/Hevanddd/repos')
        .then(response => response.json())
        .then(info => info.map(el => el.name).sort())
        .then(list => console.log(list))
        .catch(error => console.error(error));
}

getNamesPromise();

// Task 9
//////////////////////////////////////////////////////

async function getNamesAwait() {
    try {
        const response = await fetch('https://api.github.com/users/Hevanddd/repos');
        const info = await response.json();
        console.log(info.map(el => el.name).sort());
    } catch (error) {
        console.error(error);
    }
}
getNamesAwait()