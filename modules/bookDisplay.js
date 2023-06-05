import {add} from './add.js';

const bookList = document.querySelector('.bookList');
const form = document.getElementById('addForm');

const displayBooks = ()=>{
    for(let i = 0; i < 4; i++){
        const div = document.createElement('div');
        div.classList.add('bookwrapper');
        const paragraph = document.createElement('p');
        paragraph.textContent = '"Title" by author';
        const button = document.createElement('button');
        button.classList.add('removeBtn');
        button.textContent = 'Remove';
        button.style.
     
        div.appendChild(paragraph);
        div.appendChild(button);
     
        bookList.appendChild(div);
     }
}

const addBtn=()=>{
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    add(title.value.trim(), author.value.trim());
    DisplayBooks();
    form.reset();
  });
  }

export {displayBooks, addBtn};

 