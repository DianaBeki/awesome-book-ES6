let bookShop = JSON.parse(localStorage.getItem('bookShop')) || [];
function add(title, author) {
    bookShop.push({ title, author });
    localStorage.setItem('bookShop', JSON.stringify(bookShop));
  }
  export default add;