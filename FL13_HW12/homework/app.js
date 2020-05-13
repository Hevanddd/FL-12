const root = document.getElementById('root');


const listBookSide = document.createElement('div');
const previewSide = document.createElement('div');
const listBook = document.createElement('ul');

listBookSide.className = 'list-book-side';
previewSide.className = 'preview-side';
listBook.className = 'list-book';


location.hash = '';

if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify(window.books));
}

function renderList() {
    let id = 1;
    let localBooks = JSON.parse(localStorage.getItem('books'));
    localBooks.forEach(el => {
        const itemBook = document.createElement('li');
        const editButton = document.createElement('button');

        el.id = id++;
        editButton.textContent = 'Edit';
        editButton.className = 'button';
        itemBook.textContent = el.bookName;

        itemBook.appendChild(editButton);
        listBook.appendChild(itemBook);

        itemBook.addEventListener('click', function () {
            location.hash = `?id=${el.id}#preview`;
        });

        editButton.addEventListener('click', function (e) {
            location.hash = `?id=${el.id}#edit`;
            e.stopPropagation();
        });
    });
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.className = 'add-button';

    addButton.addEventListener('click', function () {
        location.hash = `#add`;
    });
    root.appendChild(listBookSide);
    root.appendChild(previewSide);
    listBookSide.appendChild(listBook);
    listBookSide.appendChild(addButton);
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify(localBooks));
}
renderList();

function callPreview() {
    const itemBookImage = document.createElement('img');
    const itemBookAuthor = document.createElement('p');
    const itemBookDescription = document.createElement('p');

    itemBookImage.className = 'item-book_image';
    itemBookImage.src = this.imageUrl;
    itemBookDescription.className = 'item-book_description';

    itemBookDescription.textContent = this.plot;
    itemBookAuthor.textContent = this.author;

    previewSide.appendChild(itemBookImage);
    previewSide.appendChild(itemBookAuthor);
    previewSide.appendChild(itemBookDescription);
}

function editBook(localBooks) {
    deleteChildren(previewSide);
    const formMain = document.createElement('form');
    formMain.id = 'form1';
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            if (key === 'id') {
                continue
            }
            const input = document.createElement('input');
            input.className = 'input';
            input.required = true;
            input.value = this[key];
            input.addEventListener('focus', function () {
                input.select();
            });
            formMain.appendChild(input);
        }
    }

    const buttons = document.createElement('div')
    const cancelButton = document.createElement('button');
    const saveButton = document.createElement('button');
    
    saveButton.type = 'submit';
    saveButton.setAttribute('form', 'form1');
    cancelButton.textContent = 'Cancel';
    saveButton.textContent = 'Save';
    buttons.className = 'edit-buttons-container'
    cancelButton.className = 'edit-button';
    saveButton.className = 'edit-button';

    previewSide.appendChild(formMain);
    previewSide.appendChild(buttons);
    buttons.appendChild(cancelButton);
    buttons.appendChild(saveButton);

    cancelButton.addEventListener('click', function () {
        if (confirm('Discard changes?')) {
            window.history.back();
        }
    });
    formMain.addEventListener('submit', saveData.bind(this, localBooks));
}

function saveData(localBooks) {
    const inputs = previewSide.querySelectorAll('input');
    const TIMEOUT = 200;
    this.bookName = inputs[0].value;
    this.author = inputs[1].value;
    this.imageUrl = inputs[2].value;
    this.plot = inputs[3].value;

    deleteChildren(listBook);
    deleteChildren(listBookSide);
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify(localBooks));
    renderList();
    location.hash = `?id=${this.id}#preview`
    setTimeout(alertSaveBook, TIMEOUT);
}

function alertSaveBook() {
    alert(`Book successfully updated`);
}

function deleteChildren(parent) {
    while (parent.lastElementChild) {
        parent.removeChild(parent.lastElementChild);
    }
}

window.addEventListener('hashchange', function () {
    let id = parseInt(location.hash.match(/\d{1}/g));
    let localBooks = JSON.parse(localStorage.getItem('books'));

    if (location.hash === '') {
        deleteChildren(previewSide);
    } else if (/#?id=.#preview/.test(location.hash)) {
        localBooks.forEach(el => {
            if (el.id === id) {
                deleteChildren(previewSide);
                callPreview.call(el);
            }
        });
    } else if (/#?id=.#edit/.test(location.hash)) {
        localBooks.forEach(el => {
            if (el.id === id) {
                editBook.call(el, localBooks);
            }
        });
    } else if (/add/.test(location.hash)) {
        let newBook = new window.Book();
        localBooks.push(newBook);
        editBook.call(newBook, localBooks);
    } else {
        location.hash = '';
    }
});