class Display{
  constructor(){
      this.bookShop = JSON.parse(localStorage.getItem('bookShop')) || [];
      this.bookList = document.querySelector('.bookList');
      this.addForm = document.getElementById('addForm');
  }
  add(title, author) {
      this.bookShop.push({ title, author });
      localStorage.setItem('bookShop', JSON.stringify(this.bookShop));
    }
    remove(title, author) {
      this.bookShop = this.bookShop.filter((b) => b.title !== title || b.author !== author);
      localStorage.setItem('bookShop', JSON.stringify(this.bookShop));
    }
  display(){
      this.bookList.innerHTML = '';
  for(let i = 0; i < this.bookShop.length; i++){
      const div = document.createElement('div');
      div.classList.add('bookwrapper');
      const paragraph = document.createElement('p');
      paragraph.textContent = `"${this.bookShop[i].title}", ${this.bookShop[i].author}`;
      const buttonRemove = document.createElement('button');
      buttonRemove.classList.add('removeBtn');
      buttonRemove.textContent = 'Remove';
      div.appendChild(paragraph);
      div.appendChild(buttonRemove);
      this.bookList.appendChild(div);
      buttonRemove.addEventListener('click', () => {
          this.remove(this.bookShop[i].title, this.bookShop[i].author);
          this.display()
        });
   }
  }
  init(){
      this.addForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.add(title.value, author.value);
          this.display();
          this.addForm.reset();
        });
  }
}
export default Display;