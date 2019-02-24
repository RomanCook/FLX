let addInput = document.querySelector('.form input');
let addButton = document.querySelector('.form button');
let todoList = document.querySelector('.items');
let hiddenMessage = document.querySelector('.heading p');
const maxItems = 10;

function checkInputValue() {
    if (addInput.value !== '') {
        addButton.removeAttribute('disabled');
    } else {
        addButton.setAttribute('disabled', '');
    }
}

function addListItem() {
    let inputValue = document.createTextNode(addInput.value);
    let todoListItem = document.createElement('li');
    todoListItem.classList.add('item');
    todoListItem.setAttribute('draggable', 'true');
    let todoListCheck = document.createElement('div');
    todoListCheck.classList.add('check');
    let todoListCheckbox = document.createElement('input');
    todoListCheckbox.setAttribute('id', 'check');
    todoListCheckbox.setAttribute('type', 'checkbox');
    let todoListDone = document.createElement('i');
    todoListDone.classList.add('material-icons');
    let todoListDoneText = document.createTextNode('done');
    let todoListLabel = document.createElement('label');
    let todoListRemove = document.createElement('a');
    todoListRemove.classList.add('close');
    todoListRemove.setAttribute('href', 'javascript:void(0);');

    let todoListRemoveIcon = document.createElement('i');
    todoListRemoveIcon.classList.add('material-icons');
    let todoListRemoveText = document.createTextNode('delete');

    if (todoList.childElementCount === maxItems) {
        hiddenMessage.classList.add('active');
        addInput.value = '';
        addButton.setAttribute('disabled', '');
        addInput.setAttribute('disabled', '');
    } else {
        addInput.value = '';
        addButton.setAttribute('disabled', '');
        todoList.appendChild(todoListItem);
        todoListItem.appendChild(todoListCheck);
        todoListCheck.appendChild(todoListCheckbox);
        todoListCheck.appendChild(todoListDone);
        todoListDone.appendChild(todoListDoneText);
        todoListCheck.appendChild(todoListLabel);
        todoListLabel.appendChild(inputValue);
        todoListItem.appendChild(todoListRemove);
        todoListRemove.appendChild(todoListRemoveIcon);
        todoListRemoveIcon.appendChild(todoListRemoveText);
    }

    todoListRemove.onclick = function () {
        let element = this.parentNode;
        todoList = element.parentNode;
        todoList.removeChild(element);
        hiddenMessage.classList.remove('active');
        addInput.removeAttribute('disabled');
    };
}

let dragElem;
todoList.addEventListener('dragstart', function (e) {
    dragElem = e.target;
    e.target.style.opacity = 0.8;
}, false);

todoList.addEventListener('dragover', function (e) {
    e.preventDefault();
}, false);

todoList.addEventListener('dragleave', function (e) {
    e.target.style.opacity = 1;
}, false);

todoList.addEventListener('drop', function (e) {
    e.preventDefault();
    if (e.target.className === 'item') {
        todoList.insertBefore(dragElem, e.target);
    }
}, false);

addInput.addEventListener('keyup', checkInputValue);
addButton.addEventListener('click', addListItem);