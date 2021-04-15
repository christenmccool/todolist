const addItemForm = document.querySelector('#add-item');
const toDoList = document.querySelector('#todo-list');

let toDoListArray = JSON.parse(localStorage.getItem('todolist'));

if (toDoListArray===null) {toDoListArray = []};

for (let item of toDoListArray) {
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    newLi.innerText = item[0];
    newBtn.innerText = 'Remove';
    if (item[1] === true) {
        newLi.classList.add('completed');
    }
    newLi.append(newBtn);
    toDoList.append(newLi);
}


addItemForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newToDo = document.querySelector('#new-todo');
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    newLi.innerText = newToDo.value;
    newBtn.innerText = 'Remove';

    newLi.append(newBtn);
    toDoList.append(newLi);
    toDoListArray.push([newToDo.value, false]);
    localStorage.setItem('todolist', JSON.stringify(toDoListArray));
    newToDo.value = '';
});

toDoList.addEventListener('click', (evt) => {
    if (evt.target.tagName === "BUTTON") {
        evt.target.parentElement.remove();
        for (let item of toDoListArray) {
            if (item[0] === evt.target.parentElement.firstChild.textContent) {
                toDoListArray.splice(toDoListArray.indexOf(item), 1);
            } 
        }
    } else if (evt.target.tagName === "LI") {
        evt.target.classList.toggle('completed');
        for (let item of toDoListArray) {
            if (item[0] === evt.target.firstChild.textContent) {
                item[1] = !item[1]; 
            } 
        }
    }
    localStorage.setItem('todolist', JSON.stringify(toDoListArray));
});


// const addItemForm = document.querySelector('#add-item');
// const toDoList = document.querySelector('#todo-list');

// let toDoListArray = JSON.parse(localStorage.getItem('todolist'));
// let toDoListCompleteArray = JSON.parse(localStorage.getItem('todolistcomplete'));

// if (toDoListArray===null) {toDoListArray = []};
// if (toDoListCompleteArray===null) {toDoListCompleteArray = []};

// for (let item of toDoListArray) {
//     const newLi = document.createElement('li');
//     const newBtn = document.createElement('button');
//     newLi.innerText = item;
//     newBtn.innerText = 'Remove';
//     if (toDoListCompleteArray.includes(item)) {
//         newLi.classList.add('completed');
//     }
//     newLi.append(newBtn);
//     toDoList.append(newLi);
// }


// addItemForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const newToDo = document.querySelector('#new-todo');
//     const newLi = document.createElement('li');
//     const newBtn = document.createElement('button');
//     newLi.innerText = newToDo.value;
//     newBtn.innerText = 'Remove';

//     newLi.append(newBtn);
//     toDoList.append(newLi);
//     toDoListArray.push(newToDo.value);
//     localStorage.setItem('todolist', JSON.stringify(toDoListArray));
//     newToDo.value = '';
// });

// toDoList.addEventListener('click', (evt) => {
//     if (evt.target.tagName === "BUTTON") {
//         evt.target.parentElement.remove();
//         toDoListArray.splice(toDoListArray.indexOf(evt.target.parentElement.firstChild.textContent), 1);
//         toDoListCompleteArray.splice(toDoListCompleteArray.indexOf(evt.target.parentElement.firstChild.textContent), 1);
//     } else if (evt.target.tagName === "LI") {
//         evt.target.classList.toggle('completed');
//         if (toDoListCompleteArray.includes(evt.target.firstChild.textContent)) {
//             toDoListCompleteArray.splice(toDoListCompleteArray.indexOf(evt.target.firstChild.textContent), 1);
//         } else {
//             toDoListCompleteArray.push(evt.target.firstChild.textContent);
//         }
//     }
//     localStorage.setItem('todolist', JSON.stringify(toDoListArray));
//     localStorage.setItem('todolistcomplete', JSON.stringify(toDoListCompleteArray));
// });


// const addItemForm = document.querySelector('#add-item');
// const toDoList = document.querySelector('#todo-list');

// addItemForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const newToDo = document.querySelector('#new-todo');
//     const newLi = document.createElement('li');
//     const newBtn = document.createElement('button');
//     newLi.innerText = newToDo.value;
//     newBtn.innerText = 'Remove';

//     newLi.append(newBtn);
//     toDoList.append(newLi);

//     localStorage.setItem(newToDo.value, 'not complete');

//     newToDo.value = '';
// });

// toDoList.addEventListener('click', (evt) => {
//     if (evt.target.tagName === "BUTTON") {
//         localStorage.removeItem(evt.target.parentElement.firstChild.textContent);
//         evt.target.parentElement.remove();
//     } else if (evt.target.tagName === "LI") {
//         evt.target.classList.toggle('completed');
//         if (evt.target.classList.contains('completed')) { 
//             localStorage.setItem(evt.target.firstChild.textContent, 'complete');
//         } else {
//             localStorage.setItem(evt.target.firstChild.textContent, 'not complete');
//         }
//     }
// });


    // newToDo.classList.add('toDoItem');
    // newToDo.setAttribute('type', 'checkbox');
    // newToDo.setAttribute('id', `todo${numItems}`)

    // let newToDoLabel = document.createElement('label');
    // newToDoLabel.setAttribute('for', `todo${numItems}`);
    // newToDoLabel.innerText = evt.target.children[2].value;

    // evt.target.children[2].value = '';

    // toDoList.append(newToDo);
    // toDoList.append(newToDoLabel);

    // console.log(evt);
    // console.log(newToDo);
    // console.log(newToDoLabel);