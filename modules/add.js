let bookShop = JSON.parse(localStorage.getItem('bookShop')) || [];


const add = (title, author) =>{
    bookShop.push({ title, author });
    localStorage.setItem('bookShop', JSON.stringify(bookShop));
  }

  export{add};