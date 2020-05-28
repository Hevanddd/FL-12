const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
const listContainer = document.querySelector('.app-container__list');
const SUCCESS_CODE_GET = 200;
const SUCCESS_CODE_POST = 201;
const SUCCESS_CODE_PUT = 204;
const xhr = new XMLHttpRequest();
const newUserForm = appContainer.querySelector('.app-container__form');

const loadingElem = document.createElement('h5');
loadingElem.textContent = 'Loading...';
loadingElem.className = 'loading-element';

function getData() {
    listContainer.insertBefore(loadingElem, listContainer.firstChild);
    blockAllButtons();
    xhr.open('GET', baseUrl + '/users');
    xhr.send();
    xhr.onload = function () {
        listContainer.firstChild.remove();
        if (xhr.status !== SUCCESS_CODE_GET) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let data = JSON.parse(xhr.response);
            renderData(data);
        }
    }
    xhr.onerror = function () {
        alert('Request failed');
    }
}

function renderData(data) {
    if (listContainer.hasChildNodes()) {
        listContainer.lastChild.remove();
    }
    const listOfUsers = document.createElement('ul');
    listOfUsers.className = 'users-list';
    data.forEach(el => {
        const user = document.createElement('li');
        const userId = document.createElement('span');
        const userName = document.createElement('input');
        const userSurname = document.createElement('input');
        const userUpdateButton = document.createElement('button');
        const userDeleteButton = document.createElement('button');

        userId.className = 'user-id';
        userId.textContent = el.id;
        userName.value = el.name;
        userSurname.value = el.username;
        userUpdateButton.textContent = 'Update';
        userUpdateButton.addEventListener('click', onUpdateButton.bind(this, el.id, userName, userSurname), {
            once: true
        });
        userDeleteButton.textContent = 'Delete';
        userDeleteButton.addEventListener('click', onDeleteButton.bind(this, el.id), {
            once: true
        });

        listOfUsers.appendChild(user);
        user.appendChild(userId);
        user.appendChild(userName);
        user.appendChild(userSurname);
        user.appendChild(userUpdateButton);
        user.appendChild(userDeleteButton);
    });
    listContainer.appendChild(listOfUsers);
    unlockNewUserButton();
}

getData();

newUserForm.addEventListener('submit', function (event) {
    blockAllButtons();
    let formData = new FormData(document.forms.user);
    const user = {
        name: formData.get('name'),
        username: formData.get('username')
    };

    const json = JSON.stringify(user);

    listContainer.insertBefore(loadingElem, listContainer.firstChild);
    xhr.open('POST', baseUrl + '/users');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        listContainer.firstChild.remove();
        if (xhr.status !== SUCCESS_CODE_POST) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            getData();
        }
    }
    xhr.onerror = function () {
        alert('Request failed');
    }
    event.preventDefault();
})

function onUpdateButton(id, userName, userSurname) {
    blockAllButtons();
    const userData = {
        name: userName.value,
        username: userSurname.value
    }
    const json = JSON.stringify(userData);
    listContainer.insertBefore(loadingElem, listContainer.firstChild);
    xhr.open('PUT', baseUrl + '/users/' + id);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        listContainer.firstChild.remove();
        if (xhr.status !== SUCCESS_CODE_PUT) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            getData();
        }
    }
}

function onDeleteButton(id) {
    blockAllButtons();
    listContainer.insertBefore(loadingElem, listContainer.firstChild);
    xhr.open('DELETE', baseUrl + '/users/' + id);
    xhr.setRequestHeader('Authorization', 'admin');
    xhr.send();
    xhr.onload = function () {
        listContainer.firstChild.remove();
        if (xhr.status !== SUCCESS_CODE_PUT) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            getData();
        }
    }
}
function blockAllButtons(){
    let buttons = document.getElementsByTagName('button');
    if(buttons.length){
        for(let i = 0; i < buttons.length; i++){
            buttons[i].disabled = 'true';
        }
    }
}
function unlockNewUserButton(){
    let buttons = document.getElementsByTagName('button');
    buttons[0].removeAttribute('disabled');
}