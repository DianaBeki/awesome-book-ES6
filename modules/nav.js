const linklist = document.querySelector('#linklist');
const linkadd = document.querySelector('#linkadd');
const linkcontact = document.querySelector('#linkcontact');
const books = document.querySelector('.books');
const formPage = document.querySelector('.formPage');
const contactInfo = document.querySelector('.contactInfo');

const nav = () => {
  linklist.addEventListener('click', () => {
    books.style.display = 'block';
    formPage.style.display = 'none';
    contactInfo.style.display = 'none';
  });

  linkadd.addEventListener('click', () => {
    books.style.display = 'none';
    formPage.style.display = 'block';
    contactInfo.style.display = 'none';
  });

  linkcontact.addEventListener('click', () => {
    books.style.display = 'none';
    formPage.style.display = 'none';
    contactInfo.style.display = 'flex';
  });
};

export default nav;