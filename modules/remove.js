let bookShop = JSON.parse(localStorage.getItem('bookShop')) || [];
function remove(title, author) {
    bookShop = bookShop.filter((b) => b.title !== title || b.author !== author);
    localStorage.setItem('bookShop', JSON.stringify(bookShop));
  }
  export default remove;
