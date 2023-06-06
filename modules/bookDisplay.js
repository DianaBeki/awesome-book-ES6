class Display {
  constructor() {
    this.bookShop = JSON.parse(localStorage.getItem('bookShop')) || [];
    this.bookList = document.querySelector('.bookList');
    this.addForm = document.getElementById('addForm');
    this.userTitle = document.getElementById('title');
    this.userAuthor = document.getElementById('author');
  }

  add(title, author) {
    this.bookShop.push({ title, author });
    localStorage.setItem('bookShop', JSON.stringify(this.bookShop));
  }

  remove(title, author) {
    this.bookShop = this.bookShop.filter((b) => b.title !== title || b.author !== author);
    localStorage.setItem('bookShop', JSON.stringify(this.bookShop));
  }

  display() {
    this.bookList.innerHTML = '';
    this.bookShop.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('bookwrapper');
      const paragraph = document.createElement('p');
      paragraph.textContent = `"${item.title}", ${item.author}`;
      const buttonRemove = document.createElement('button');
      buttonRemove.classList.add('removeBtn');
      buttonRemove.textContent = 'Remove';
      div.appendChild(paragraph);
      div.appendChild(buttonRemove);
      this.bookList.appendChild(div);
      buttonRemove.addEventListener('click', () => {
        this.remove(item.title, item.author);
        this.display();
      });
    });
  }

  init() {
    this.addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.add(this.userTitle.value, this.userAuthor.value);
      this.display();
      this.addForm.reset();
    });
  }
}
export default Display;