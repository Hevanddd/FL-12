const data = [{
    'folder': true,
    'title': 'Pictures',
    'children': [{
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [{
          'title': 'spain.jpeg'
        }]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [{
      'folder': true,
      'title': 'screenshots',
      'children': null
    }]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [{
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(data, parentElement) {
  data.forEach(el => {

    let element = document.createElement('li');
    let wrapper = document.createElement('div');
    let i = document.createElement('i');
    let span = document.createElement('span');

    i.className = 'material-icons';
    i.textContent = el.folder ? 'folder' : 'insert_drive_file';

    wrapper.className = el.folder ? 'folder' : '';

    el.folder ? wrapper.addEventListener('click', onClickFolder) : null;

    span.textContent = el.title;
    wrapper.appendChild(i);
    wrapper.appendChild(span);
    element.appendChild(wrapper);
    parentElement.appendChild(element);

    if (!el.children && el.folder) {
      callEmptyFolder(element, 'none');
    }
    if (el.children) {
      let childUl = document.createElement('ul');

      childUl.style.display = 'none';
      element.appendChild(childUl);
      createTree(el.children, childUl);
    }
  });
}

function callEmptyFolder(folder, style) {
  let emptyUl = document.createElement('ul');
  let emptyLi = document.createElement('li');
  let emptyWrapper = document.createElement('span');

  emptyWrapper.textContent = 'Folder is empty';
  emptyWrapper.style.fontStyle = 'italic';
  emptyUl.style.display = style;

  emptyLi.appendChild(emptyWrapper);
  emptyUl.appendChild(emptyLi);
  folder.appendChild(emptyUl);
}

let treeParent = document.createElement('ul');

rootNode.appendChild(treeParent);
createTree(data, treeParent);

function onClickFolder() {
  let folderDisplay = this.nextElementSibling.style.display;

  if (folderDisplay === 'block') {
    this.nextElementSibling.style.display = 'none';
  } else {
    this.nextElementSibling.style.display = 'block';
  }

  let icon = this.children[0].textContent;

  if (icon === 'folder_open') {
    this.children[0].textContent = 'folder';
  } else {
    this.children[0].textContent = 'folder_open';
  }
}

rootNode.addEventListener('contextmenu', function (event) {

  event.preventDefault();
  let target = event.target.closest('DIV');

  deleteContextMenu.call(target, target);

  if (!event.target.closest('DIV').children[1]) {
    let disabledMenu = true;

    callContextMenu(event.pageX, event.pageY, disabledMenu);
  } else {
    callContextMenu(event.pageX, event.pageY);
    target.style.backgroundColor = '#f2f2f2';

    let renameButton = rootNode.querySelector('div.renameButton');
    let deleteButton = rootNode.querySelector('div.deleteButton');

    renameButton.addEventListener('click', function () {
      callInput(target);
    });

    deleteButton.addEventListener('click', function () {
      if (target.parentElement.parentElement.childNodes.length === 1) {
        callEmptyFolder(target.parentElement.parentElement);
      }
      target.parentElement.remove();
      target.remove();
      rootNode.querySelector('div.contextMenu').remove();
    });
  }
  window.addEventListener('click', deleteContextMenu.bind(this, target), {
    once: true
  });
});

function deleteContextMenu(target) {
  console.log(target);
  if (document.querySelector('div.contextMenu')) {
    target.style.backgroundColor = 'white';
    document.querySelector('div.contextMenu').remove();
  }
}

function callContextMenu(x, y, disabled) {
  let contextmenu = document.createElement('div');
  let renameButton = document.createElement('div');
  let deleteItemButton = document.createElement('div');

  renameButton.textContent = 'Rename';
  deleteItemButton.textContent = 'Delete item';
  contextmenu.className = 'contextMenu';
  renameButton.className = 'renameButton';
  deleteItemButton.className = 'deleteButton';
  contextmenu.appendChild(renameButton);
  contextmenu.appendChild(deleteItemButton);
  contextmenu.style.top = y + 'px';
  contextmenu.style.left = x + 'px';

  if (disabled) {
    contextmenu.style.color = 'rgb(218, 217, 217)';
  }

  rootNode.appendChild(contextmenu);
}

function callInput(element) {
  let input = document.createElement('input');

  input.value = element.children[1].textContent;
  element.children[1].style.display = 'none';
  element.append(input);
  input.focus();

  let inputSelected = input.value.split('.');

  input.setSelectionRange(0, inputSelected[0].length);

  input.addEventListener('click', function (event) {
    element.children[1].textContent = input.value;
    input.remove();
    element.children[1].style.display = 'inline-block';
    event.stopPropagation();
  });
}