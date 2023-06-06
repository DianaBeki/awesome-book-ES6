import remove from './remove.js'
let bookShop = JSON.parse(localStorage.getItem('bookShop')) || [];
const bookList = document.querySelector('.bookList');
function display(){
    bookList.innerHTML = '';
    for(let i = 0; i < bookShop.length; i++){
        const div = document.createElement('div');
        div.classList.add('bookwrapper');
        const paragraph = document.createElement('p');
        paragraph.textContent = `"${bookShop[i].title}", ${bookShop[i].author}`;
        const buttonRemove = document.createElement('button');
        buttonRemove.classList.add('removeBtn');
        buttonRemove.textContent = 'Remove';
        div.appendChild(paragraph);
        div.appendChild(buttonRemove);
        bookList.appendChild(div);
        buttonRemove.addEventListener('click', () => {
            remove(bookShop[i].title, bookShop[i].author);
            location.reload()
          });
     }
}
export default display;